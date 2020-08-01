var config = {};

var lineDrawingMode = false;
var markedTile = false;
var curLevel = -1; // main_gi This is such a hack to implement, I wish I could do it in another way other than declaring tons of vars.
var rightClicked = false;

function updateSVG (level) {
  mysvg = document.getElementById("svg" + level);
}

function makeSpellSVG () {
  // StackOverflow says this should work
  var container = document.createElement('div');
  container.insertAdjacentHTML('beforeend', makeSVGTag("g", {
    class: "spell-group " + config.name,
    "data-id": config.id,
    id: "spell-"+config.name,
  }));
  var gTag = container.lastElementChild;
  if (config.color1 && config.color2 && !config.nobox) {
    gTag.insertAdjacentHTML('beforeend', makeSVGTag("rect", {
      height: 10,
      width: 10,
      stroke: config.color1,
      "stroke-width": 2,
      "stroke-alignment": "outer",
      x: 1,
      y: 1,
      fill: config.color2,
      class: "spell",
      "data-id": config.id
    }));
  }
  if (config.color3 && config.symbol1 && !config.noSymbol1) {
    gTag.insertAdjacentHTML('beforeend', makeSVGTagContent("text", {
      x: 6,
      y: 6,
      "font-family": "'monospac', 'fallspac'",
      "font-size": 9,
      "text-anchor": "middle",
      "dominant-baseline": "middle",
      stroke: "none",
      fill: config.color3,
      class: "spell-symbol spell-symbol1",
      "data-id": config.id
    }, config.symbol1));
  }
  if (config.color4 && config.symbol2 && !config.noSymbol2) {
    gTag.insertAdjacentHTML('beforeend', makeSVGTagContent("text", {
      x: 6,
      y: 6,
      "font-family": "'monospac', 'fallspac'",
      "font-size": 9,
      "text-anchor": "middle",
      "dominant-baseline": "middle",
      stroke: "none",
      fill: config.color4,
      class: "spell-symbol spell-symbol2",
      "data-id": config.id
    }, config.symbol2));
  }

  return container.innerHTML;
}

function preloadSpells() {
  var mydefs = document.getElementById("mydefs");
  mydefs.insertAdjacentHTML('beforeend', makeSVGTag("defs", {
    id: "defs"
  }));
  var defs = mydefs.lastElementChild;
  for (var i = 0; i < MOVES.length; i++) {
    loadMove(MOVES[i]);
    defs.insertAdjacentHTML('beforeend', makeSpellSVG(config));
  }
}

function initializeBoards() {
  for (var ext = 0; ext < 4; ext ++) {
    updateSVG(ext);
    for (var i = 0; i < 225; i++) {
      mysvg.insertAdjacentHTML("beforeend", makeSVGTag("rect", {
        height: 17,
        width: 17,
        stroke: "#444",
        "stroke-width": 1,
        x: (i % 15) * 17 + 1,
        y: Math.floor(i / 15) * 17 + 1,
        fill: i % 2 ? "#ccc" : "#eee",
        class: "tile",
        "data-index": i,
        "data-level": ext,
        draggable: false,
        //"shape-rendering": "crispEdges"
      }));
    }
    
    mysvg.insertAdjacentHTML("beforeend", makeSVGTag("rect", {
      height: 256,
      width: 256,
      stroke: "#444",
      "stroke-width": 2,
      x: 0,
      y: 0,
      fill: "transparent",
      draggable: false,
      class: "ignore-mouse",
      //"shape-rendering": "crispEdges"
    }));
    
    mysvg.insertAdjacentHTML("beforeend", makeSVGTag("circle", {
      cx: mysvg.getAttribute("width") / 2,
      cy: mysvg.getAttribute("height") / 2,
      r: 6,
      class: "piece",
      "data-index": 112
    }));
  }

  // Events moved to here because reasons

  $(".tile").on("mousedown", function (e) {
    e.preventDefault();
    updateSVG(this.dataset.level); // main_gi: Mental note to self: "level" refers to each of the 4 boards

    mouse.down = this.dataset.level;
    if (this.dataset.index == 112) {
      lineDrawingMode = true;
      curLevel = this.dataset.level
      return;
    }

    var curMove = getSpell(this.dataset.index);
    if (curMove.dataset && curMove.dataset.id == config.id) mouse.mode = "remove"; // Changes functionality to erase

    changeSpell(this.dataset.index, this.dataset.level);
  });

  $(".tile").on("mouseover", function (e) {
    e.preventDefault();

    if (lineDrawingMode) {
      markedTile = this.dataset.index;
      return
    }
    if (mouse.down != this.dataset.level) return;
    updateSVG(this.dataset.level);

    if (this.dataset.index == 112) return;
    changeSpell(this.dataset.index, this.dataset.level);
  });

  $(".tile").on("contextmenu", function () {
    mouse.mode = "remove";
    rightClicked = true;
    return false;
  });

  $(".tile[data-index=112]").on("dblclick", function (e) { // main_gi: Mental note to self: 112 is the center square
    e.preventDefault();
    for (var l = this.dataset.level; l < 4; l ++) {
      DATA[LEVELS[l]].move = DATA[LEVELS[l]] || "";
      setDisplay(LEVELS[l], MOVES[IMOVE[config.id]].name);
    }
  });
}

function loadMove(move, noShow) {
  if (!noShow) {
    noShow = {};
  }
  config.id = move.id;
  config.name = move.name;
  config.nobox = move.nobox || false;
  if (!noShow.tile) {
    config.color1 = "rgb(" + createColors(move)[0].join(",") + ")";
    config.color2 = "rgb(" + createColors(move)[1].join(",") + ")";
  }
  if (!noShow.symbol1) {
    config.color3 = "rgb(" + createColors(move)[2].join(",") + ")";
    config.symbol1 = move.symbol1 ? move.symbol1 : null;
  }
  if (!noShow.symbol2) {
    config.color4 = "rgb(" + createColors(move)[3].join(",") + ")";
    config.symbol2 = move.symbol2 ? move.symbol2 : null;
  }
}

function makeSVGTag(tagName, properties) {
  var keys = Object.keys(properties);
  var ret = "<" + tagName;
  for (var i = 0; i < keys.length; i++) {
    ret += " " + keys[i] + '="' + properties[keys[i]] + '"';
  }
  ret += "/>";
  return ret;
}

function makeSVGTagContent(tagName, properties, content) {
  var keys = Object.keys(properties);
  var ret = "<" + tagName;
  for (var i = 0; i < keys.length; i++) {
    ret += " " + keys[i] + '="' + properties[keys[i]] + '"';
  }
  ret += ">" + content.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;") + "</" + tagName + ">";
  return ret;
}

function setSpellOnBoard(i) {
  var x = mysvg.children[i].getAttribute("x");
  var y = mysvg.children[i].getAttribute("y");
  mysvg.insertAdjacentHTML('beforeend', makeSVGTag("use", {
    x: +x + 3,
    y: +y + 3,
    class: "spell-display",
    "data-index": i,
    "data-id": config.id,
    href: "#spell-" + config.name
  }));
}

function changeSpell(i, l) {
  var curMove = getSpell(i);
  var levMoves = DATA[LEVELS[l]].moves;
  var indexStr = (+i+225).toString(15).slice(1);
  // Delete curMove
  if (curMove.dataset) {
    var id = curMove.dataset.id;

    // If painting over the same spell, skip everything.
    if (mouse.mode == "add" && id == config.id) return; 

    // Assuming levMoves[id] exists. If it doesn't, this section shouldn't run to begin with.
    levMoves[id] = levMoves[id].replace(new RegExp(indexStr + "(?=(..)*$)", "g"), "");
    if (levMoves[id] == "") {
      delete levMoves[id];
      removeDisplay(LEVELS[l], MOVES[IMOVE[id]].name);
    }
    curMove.remove();
  }

  if (mouse.mode == "add") {
    setSpellOnBoard(i);
    // Check and add display
    levMoves[config.id] = levMoves[config.id] || "";
    levMoves[config.id] += indexStr;
    setDisplay(LEVELS[l], MOVES[IMOVE[config.id]].name);
  }

  if (l == 3) return;
  // Peek nextMove
  updateSVG(+l+1);
  var nextMove = getSpell(i);
  if (! curMove.dataset && ! nextMove.dataset ) changeSpell(i, +l+1);
  else if (! curMove.dataset || ! nextMove.dataset) return;
  else if (curMove.dataset.id == nextMove.dataset.id) changeSpell(i, +l+1);
}

function getSpell(index) {
  var ret = {};
  var moveGrid = mysvg.getElementsByClassName("spell-display");
  for (var i = 0; i < moveGrid.length; i++) {
    if (moveGrid[i].getAttribute("data-index") == index) {
      ret = moveGrid[i];
    }
  }

  return ret;
}

function resolveMarkedTile(i, level) { // main_gi: Does something based on the index of the marked tile, a number from 0-255.
  if (i == false) {return} // Center = (0, 0) infinite loop, do not want
  // main_gi: Split this to x and y where (0, 0) is the center
  let x = (i % 15) - 7
  let y = Math.floor(i / 15) - 7
  // Top left is (-7, -7), bottom right is (7, 7)
  let curX = x;
  let curY = y;
  // main_gi: Add (x, y) to itself, until one of them goes out of the grid.
  while (Math.abs(curX) <= 7 && Math.abs(curY) <= 7) {
    // main_gi: Convert the curX and curY back to the number and put it on the grid
    updateSVG(level);
    changeSpell((curY + 7)*15 + (curX + 7), level);
    curX = curX + x; curY = curY + y
    //console.log(curX)
    //console.log(curY)
  }
}


//$(document).on("contextmenu", function () {
//  return !rightClicked
//});
// main_gi: This is supposed to prevent a context menu from popping up if you right clicked on the grid, then left the grid and released right click. It doesn't work.


$(document).on("mouseup dragend", function () {
  mouse.down = -1;
  mouse.mode = "add";
  if (lineDrawingMode) {resolveMarkedTile(markedTile, curLevel)}
  lineDrawingMode = false;
  markedTile = false;
  rightClicked = false;
});
