// let block = document.getElementById('block');
// let header = document.getElementById('header');

// header.onmousedown = function(obj) {
//   var coords = getCoords(header);
//   var shiftX = obj.pageX - coords.left;
//   var shiftY = obj.pageY - coords.top;

//   block.style.position = "absolute";
//   document.body.appendChild(block);
//   moveAt(obj);

//   block.style.zIndex = 1000;

//   function moveAt(e) {
//     block.style.left = e.pageX - shiftX + "px";
    // block.style.top = e.pageY - shiftY + "px"

//   document.onmousemove = function(e) {
//     moveAt(e);
//   };

//   block.onmouseup = function() {
//     document.onmousemove = null;
//     block.onmouseup = null;
//   };
// };

// block.ondragstart = function() {
//   return false;
// };

// function getCoords(elem) {
//   var box = elem.getBoundingClientRect();
//   return {
//     top: box.top + pageYOffset,
//     left: box.left + pageXOffset
//   };
// }

function Block (options)
{
  options = options && typeof(options) === "object" ? options : {};
  this.target = options.elem;

  if (!this.target)
  {
    throw new Error("Target is required.");
  }
}

Block.prototype = {
  move: function ()
  {
    let coords = this.getCoords(event.target);
    let shiftX = event.pageX - coords.left;
    let shiftY = event.pageY - coords.top;

    if (!event.target.onmouseup)
    {
      
    }
    console.log(event.pageX);
    console.log(coords.left);
    console.log(shiftX);
  },

  getCoords: function (elem)
  {
    var box = this.target.getBoundingClientRect();
    return {
      top: box.top + pageYOffset,
      left: box.left + pageXOffset
    };
  },
}

const block = document.querySelector('#block');
const header = block.querySelector('#header');

const el = new Block ({
  elem: block,
  
});

header.addEventListener("mousedown", function(){
  el.move();
});