var __slice = Array.prototype.slice;
//Now with Paper.js dependency!... :v
paper.install(window);

(function($) {
	var paperSketch;
	sign = function(x) {
		if (typeof x === "number" && x !== "null") {
			if (x) {
				if (x < 0) {
					return -1;
				} else {
					return 1;
				}
			} else if (x === x) {
				return 0;
			} else {
				return NaN;
			}
		} else {
			return NaN;
		}
	};
	$.fn.sketch = function() {
		var args, key, sketch;
		key = arguments[0], args = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
		if (this.length > 1) {
			$.error("Sketch.js can only be called on one element at a time.");
		}
		sketch = this.data("sketch");
		if (typeof key === "string" && sketch) {
			if (sketch[key]) {
				if (typeof sketch[key] === "function") {
					return sketch[key].apply(sketch, args);
				} else if (args.length === 0) {
					return sketch[key];
				} else if (args.length === 1) {
					return sketch[key] = args[0];
				}
			} else {
				return $.error("Sketch.js did not recognize the given command.");
			}
		} else if (sketch) {
			return sketch;
		} else {
			this.data("sketch", new paperSketch(this.get(0), key));
			return this;
		}
	};
	paperSketch = (function() {
		function paperSketch(el, opts) {
			this.el = el;
			this.canvas = $(el);
			this.context = paper.setup(this.el.id);
			this.options = $.extend({
				toolLinks: true,
				defaultTool: "marker",
				defaultColor: "#000",
				defaultSize: 3,
				defaultFill: 0,
			}, opts);
			this.painting = false;
			this.color = this.options.defaultColor;
			this.size = this.options.defaultSize;
			this.tool = this.options.defaultTool;
			this.fill = this.options.defaultFill;
			this.actions = ["set"+this.size+this.color+this.fill+this.tool];
			this.cache = null;
			this.paths = [];
			this.action = [];
			this.undone = [];
			this.unpath = [];
			this.undot = [];
			if (this.options.toolLinks) {
				$("body").delegate("a[href=\"#" + (this.canvas.attr("id")) + "\"]", "click", function(e) {
					var $canvas, $this, key, sketch, _ref, changes = false;
					$this = $(this);
					$canvas = $($this.attr("href"));
					sketch = $canvas.data("sketch");
					_ref = ["size", "color", "fill", "tool"];
					for (key of _ref) {
						if ($this.attr("data-" + key)) {
							sketch.set(key, $(this).attr("data-" + key));
							changes = true;
						}
					}
					if (changes) {
						var actions = sketch.get("actions");
						if(actions != false && actions[actions.length-1].match(/^set/))actions.pop();
						var word = "set";
						$.each(_ref,function(a,b){
							if (a=$this.attr("data-" + b)) {
								word+=a;
							} else {
								word+=sketch.get(b);
							}
						});
						actions.push(word);
						sketch.set("actions",actions);
					}
					if ($(this).attr("data-download")) {
						sketch.download($(this).attr("data-download"));
					}
					if ($(this).attr("data-operation")) {
						sketch.operation($(this).attr("data-operation"));
					}
					return false;
				});
			}
		}
		paperSketch.prototype.download = function(format) {
			var mime;
			format || (format = "png");
			if (format === "jpg") {
				format = "jpeg";
			}
			mime = "image/" + format;
			return window.open(this.el.toDataURL(mime));
		};
		paperSketch.prototype.operation = function(type) {
			var actioncache;
			switch(type){
				case "undo":
					if(this.actions.length === 1) return false;
					this.undone = this.undone || [];
					this.unpath = this.unpath || [];
					actioncache=this.actions.pop();
					if(actioncache.match(/^set/)){
						this.undone.push(this.actions.pop());
						if(this.actions[this.actions.length-1].match(/^set/))this.undone.push(this.actions.pop());
						this.actions.push(actioncache);
					} else {
						this.undone.push(actioncache);
					}
					this.unpath.push(this.paths.pop());
					this.unpath[this.unpath.length-1].remove();
					break;
				case "redo":
					if(this.undone == false) return false;
					this.undone = this.undone || [];
					this.unpath = this.unpath || [];
					actioncache=this.actions.pop();
					if(!actioncache || !actioncache.match(/^set/)){
						this.actions.push(actioncache);
						if(this.undone[this.undone.length-1].match(/^set/))this.actions.push(this.undone.pop());
						this.actions.push(this.undone.pop());
					} else {
						if(this.actions.length>0&&this.actions[this.actions.length-1].match(/^set/))this.undone.push(this.actions.pop());
						this.actions.push(this.undone.pop());
						this.actions.push(actioncache);
					}
					this.paths.push(this.unpath.pop());
					project.activeLayer.addChild(this.paths[this.paths.length-1]);
					break;
				case "clear":
					this.actions = ["set"+this.size+this.color+this.fill+this.tool];
					this.undone = [];
					this.unpath = [];
					project.clear();
					break;
				default:
					this.actions = ["set"+this.size+this.color+this.fill+this.tool];
					this.undone = [];
					this.unpath = [];
					project.clear();
					break;
			}
			return this.canvas.triggerHandler("draw");
		};
		paperSketch.prototype.set = function(key, value) {
			this[key] = value;
			console.log(key, "set to", value);
			if(key=="tool")$.sketch.tools[value].activate();
			return this.canvas.trigger("sketch.change" + key, value);
		};
		paperSketch.prototype.get = function(key, value) {
			return this[key];
		};
		paperSketch.prototype.startPainting = function() {
			this.painting = true;
			return this.action = [];
		};
		paperSketch.prototype.stopPainting = function(raw) {
			if (!this.painting)return ; else this.painting = false;
			if (this.action.length) {
				if(this.cache)this.cache.remove();
				var shortpath = this.optimize(this.action,raw);
				this.actions.push(shortpath);
				$.sketch.tools[this.tool].draw.call(sketch, shortpath);
			}
			this.action=null;
			this.cache=null;
			this.undone=[];
			this.unpath=[];
			return this.canvas.triggerHandler("draw");
		};
		paperSketch.prototype.optimize = function(action,raw) {
			var BSSSP = new Path(); //Shorthand for paperSketchStrokeSimplifiedwithBeizers, don't ask why it is reversed
			BSSSP.addSegments(action);
			if(!raw)BSSSP.simplify(5);

			action = BSSSP.exportJSON({asString:false,precision:0})[1].segments.map((arr) => {
				if(arr.length==2)arr=[arr,[0,0],[0,0]];
				return [arr[0],[arr[0][0]+arr[1][0],arr[0][1]+arr[1][1]],[arr[0][0]+arr[2][0],arr[0][1]+arr[2][1]]].reduce($.merge).map((num) => num>=0?("00"+num.toString(16)).slice(-2):"NN").reduce((a,b)=>a+b);
			}).reduce((a,b)=>a+b); //Wtf is this mess lol

			if(action.length==12)action+=action; //Hack for dots!
			BSSSP.remove();
			return action;
		};
		paperSketch.prototype.drawPath = function(action) {
			var SSP = new Path(); //Shorthand for paperSketchStroke, don't ask why it is reversed

			if(typeof(action)=="string")action = action.match(/.{12}/g).map((a)=>{
				a=a.match(/.{4}/g).map((a)=>a.match(/.{2}/g).map((a)=>parseInt(a,16)));
				if(a[1][0]===a[1][0]&&a[1][1]===a[1][1])return [a[0],[a[1][0]-a[0][0],a[1][1]-a[0][1]],[a[2][0]-a[0][0],a[2][1]-a[0][1]]];
				else return [a[0],[a[0][0]-a[2][0],a[0][1]-a[2][1]],[a[2][0]-a[0][0],a[2][1]-a[0][1]]];
			});

			SSP.strokeJoin = "round";
			SSP.strokeCap = "round";
			SSP.strokeColor = this.color;
			SSP.strokeWidth = this.size;
			SSP.addSegments(action);
			return SSP;
		};
		paperSketch.prototype.redrawCache = function(mode) { //remove cached item and redraw.
			if(this.cache)this.cache.remove();
			this.cache=this.drawPath(this.action);
			if(mode)this.cache.blendMode=mode;
			return view.update();
		};
		paperSketch.prototype.changeCache = function() { //remove last point and redraw it back.
			this.cache.removeSegment(this.cache.segments.length-1);
			this.cache.addSegments(this.action.slice(-1));
			this.undot = [];
			return view.update();
		};
		paperSketch.prototype.delCache = function () { //remove last point
			this.cache.removeSegment(this.cache.segments.length-1);
			return view.update();
		}
		paperSketch.prototype.redraw = function() {
			project.clear();
			for(var action of this.actions){
				if (action.match(/^set/)) {
					var params = action.replace(/set([0-9]+)(#[0-9a-f]{3,4})([a-z]+)/,(_,a,b,c)=>[a,b,c].join(",")).split(",");
					if (params[1].length == 5) this.fill = +params[1][params[1].length-1], params[1] = params[1].slice(1,-1);
					this.size = params[0], this.color = params[1], this.tool = params[2], $.sketch.tools[params[2]].activate();
				} else {
					$.sketch.tools[this.tool].draw.call(sketch, action);
				}
			}
			return this.canvas.triggerHandler("draw");
		};
		return paperSketch;
	})();
	$.sketch = {
		tools: {}
	};
	$.sketch.tools.marker = new Tool();
	$.sketch.tools.marker.minDistance = 5;
	$.sketch.tools.marker.onMouseDown = (e)=>{_start(e);_addpoint(e);};
	$.sketch.tools.marker.onMouseDrag = _addpoint;
	$.sketch.tools.marker.onMouseUp = (e)=>{_addpoint(e);_stop(e);};
	$.sketch.tools.marker.draw = _draw;
	$.sketch.tools.line = new Tool();
	$.sketch.tools.line.onMouseDown = (e)=>{_start(e);_addpoint(e);_addpoint(e);};
	$.sketch.tools.line.onMouseDrag = _changelastpoint;
	$.sketch.tools.line.onMouseUp = (e)=>{_changelastpoint(e);_rawstop(e);};
	$.sketch.tools.line.draw = _draw;
	$.sketch.tools.eraser = new Tool();
	$.sketch.tools.eraser.minDistance = 5;
	$.sketch.tools.eraser.onMouseDown = (e)=>{_start(e);_eraserize();};
	$.sketch.tools.eraser.onMouseDrag = (e)=>{_addpoint(e);_addpoint(e);_eraserize();};
	$.sketch.tools.eraser.onMouseUp = (e)=>{_addpoint(e);_addpoint(e);_stop(e);};
	$.sketch.tools.eraser.draw = _eraserdraw;
	$.sketch.tools.leraser = new Tool();
	$.sketch.tools.leraser.onMouseDown = (e)=>{_start(e);_addpoint(e);_addpoint(e);_eraserize();};
	$.sketch.tools.leraser.onMouseDrag = (e)=>{_changelastpoint(e);_eraserize();};
	$.sketch.tools.leraser.onMouseUp = (e)=>{_changelastpoint(e);_rawstop(e);};
	$.sketch.tools.leraser.draw = _eraserdraw;
	$.sketch.tools.vector = new Tool();
	$.sketch.tools.vector.onKeyDown = (e)=>{if(e.key=="shift"&!sketch.painting)_start(e);};
	$.sketch.tools.vector.onKeyUp = (e)=>{if(e.key=="shift")_rawstop(e);else _kop(e);};
	$.sketch.tools.vector.onMouseDown = (e)=>{if(Key.isDown("shift"))_addpoint(e);};
	$.sketch.tools.vector.onMouseDrag = (e)=>{if(Key.isDown("shift"))_changelastcurvepoint(e);};
	$.sketch.tools.vector.onMouseUp = (e)=>{if(Key.isDown("shift"))_changelastcurvepoint(e);};
	$.sketch.tools.vector.draw = _draw;
	$.sketch.tools.vshape = new Tool();
	$.sketch.tools.vshape.onKeyDown = (e)=>{if(e.key=="shift"&!sketch.painting)_start(e);};
	$.sketch.tools.vshape.onKeyUp = (e)=>{if(e.key=="shift")_rawstop(e);else _kop(e);};
	$.sketch.tools.vshape.onMouseDown = (e)=>{if(Key.isDown("shift"))_addpoint(e);};
	$.sketch.tools.vshape.onMouseDrag = (e)=>{if(Key.isDown("shift"))_changelastcurvepoint(e);};
	$.sketch.tools.vshape.onMouseUp = (e)=>{if(Key.isDown("shift"))_changelastcurvepoint(e);};
	$.sketch.tools.vshape.draw = _closedraw;

	function _start(e){
		sketch.startPainting();
	}
	function _addpoint(e){
		if(!sketch.painting)return;
		if(!view.bounds.contains(e.point))return;
		sketch.action.push([
			e.point,
			[0,0],
			[0,0]
		]);
		sketch.redrawCache();
	}
	function _changelastpoint(e){
		if(!sketch.painting)return;
		if(!view.bounds.contains(e.point))return;
		sketch.action[sketch.action.length-1]=[
			e.point(),
			[0,0],
			[0,0]
		];
		sketch.changeCache();
	}
	function _undolastpoint(){
		if(sketch.action.length == 1) return false;
		sketch.undot.push(sketch.action.pop());
		sketch.delCache();
	}
	function _redolastpoint(){
		if(sketch.undot.length == 0) return false;
		sketch.action.push(sketch.undot.pop());
		sketch.redrawCache();
	}
	function _changelastcurvepoint(e){
		if(!view.bounds.contains(e.point))return;
		sketch.action[sketch.action.length-1]=[
			e.downPoint,
			e.downPoint.subtract(e.point),
			e.point.subtract(e.downPoint)
		];
		sketch.changeCache();
		//sketch.cache.fullySelected = true;
	}
	function _stop(e){
		sketch.stopPainting();
	}
	function _rawstop(e){
		sketch.stopPainting(true);
	}
	function _draw(action){
		sketch.paths.push(sketch.drawPath(action));
		return view.update();
	}
	function _eraserdraw(action){
		var path = sketch.drawPath(action);
		path.blendMode="destination-out";
		sketch.paths.push(path);
		return view.update();
	}
	function _closedraw(action){
		var path = sketch.drawPath(action);
		path.closed = true;
		_setFillcolor(path);
		sketch.paths.push(path);
		return view.update();   
	}
	function _eraserize(){
		if(sketch.cache)sketch.cache.blendMode="destination-out";
		return view.update();
	}

	function _kop(e){
		if(sketch.cache === null)return true;
		var $e = e.character;
		if ($e == "Z"){
			_undolastpoint();
		}
		else if ($e == "Y"){
			_redolastpoint();
		}
		//else if ($e == "R"){ //upcoming. requires feature fix
		//	_cutlastpoint();
		//}
	}

	function _setFillcolor(path){
		__grads = {
			base: {
				gradient: {
					stops: ["#ccc", ["#eee", 0.2], ["#eee", 0.8], "#ccc"],
				},
				origin: path.bounds.leftCenter,
				destination: path.bounds.rightCenter
			},
			stand: {
				gradient: {
					stops: ["#eee", "#ccc"],
				},
				origin: path.bounds.topCenter,
				destination: path.bounds.bottomCenter,
			},
			head: {
				gradient: {
					stops: ["#eee", ["#ccc", 0.8]],
					radial: true
				},
				origin: path.position,
				destination: path.bounds.leftCenter
			},
			grey: {
				gradient: {
					stops: ["#ccc", ["#888", 0.8]],
					radial: true
				},
				origin: path.position,
				destination: path.bounds.leftCenter
			}
		}
		__fills = ["base","stand","head","grey"];
		path.fillColor = __grads[__fills[sketch.fill]];
	}

	__sizes = [2,3,5,10];
	$(document).keyup(function (e) {
		if(!sketch)return;
		var $e = $(e.target);
		if ($e.is("input, textarea, [contenteditable]")) return true;
		if (sketch.painting&&sketch.cache!==null) return false;
		$e = e.key;
		if ($e == "Z"){
			sketch.operation("undo");
		}
		else if ($e == "Y"){
			sketch.operation("redo");
		}
		else if ($e == "+"){
			console.log (sketch.size);
			var ix = __sizes.indexOf(sketch.size); if(ix != __sizes.length-1) ++ix;
			sketch.set("size",__sizes[ix]);
		}
		else if ($e == "_"){
			var ix = __sizes.indexOf(sketch.size); if(ix !== 0) --ix;
			sketch.set("size",__sizes[ix]);
		}
	});	
	return ;
})(jQuery);
;
