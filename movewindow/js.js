function Block (options)
{
	options = options && typeof(options) === "object" ? options : {};
	this.target = options.elem;

	if (!this.target)
	{
		throw new Error("Target is required.");
	}

	this.avatar = null;
}

Block.prototype = {
	mouseDown: function (event)
	{
		if (event.which != 1)
		{
			return false;
		}

		const header = this.target.querySelector('#header');

		if (event.target != header)
		{
			return false;
		}
		
		let coords = this.getCoords(event.target);
		this.shiftX = event.pageX - coords.left;
		this.shiftY = event.pageY - coords.top;

		this.target.style.position = "absolute";
		this.avatar = document.body.appendChild(this.target);
	},

	mouseMove: function (event)
	{
		if (!this.avatar)
		{
			return false;
		}
		
		this.moveAt(event);
	},

	mouseUp: function ()
	{
		this.avatar = null;
		
		// this.target = removeEventListener;
	},

	getCoords: function (elem)
	{
		var box = this.target.getBoundingClientRect();
		return {
			top: box.top + pageYOffset,
			left: box.left + pageXOffset
		};
	},

	moveAt: function (e)
	{

			this.avatar.style.left = e.pageX - this.shiftX + "px";
			this.avatar.style.top = e.pageY - this.shiftY + "px";
	}
}

const block = document.querySelector('#block');

const el = new Block ({
	elem: block,
	
});

block.addEventListener("mousedown", function(){
	el.mouseDown(event);
});

document.addEventListener("mousemove", function(){
	el.mouseMove(event);
});

document.addEventListener("mouseup", function(){
	el.mouseUp();
});
