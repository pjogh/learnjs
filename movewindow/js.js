let block = document.getElementById('block');
let header = document.getElementById('header');

header.onmousedown = function(e) {
  var coords = getCoords(header);
  var shiftX = e.pageX - coords.left;
  var shiftY = e.pageY - coords.top;

  block.style.position = "absolute";
  document.body.appendChild(block);
  moveAt(e);

  block.style.zIndex = 1000; // над другими элементами

  function moveAt(e) {
    block.style.left = e.pageX - shiftX + "px";
    block.style.top = e.pageY - shiftY + "px";
  }

  document.onmousemove = function(e) {
    moveAt(e);
  };

  block.onmouseup = function() {
    document.onmousemove = null;
    block.onmouseup = null;
  };
};

block.ondragstart = function() {
  return false;
};

function getCoords(elem) {
  var box = elem.getBoundingClientRect();
  return {
    top: box.top + pageYOffset,
    left: box.left + pageXOffset
  };
}

