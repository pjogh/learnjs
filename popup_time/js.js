let input = document.getElementById('input');

let popup = document.createElement('div');
popup.className = 'popup';
popup.id = 'popup';
document.body.appendChild(popup);
popup.hidden = true;

let timeblock = document.createElement('div');
timeblock.className = 'timeblock';
timeblock.id = 'timeblock';
popup.appendChild(timeblock);

let button = document.createElement('input');
button.type = 'submit';
button.className = 'button';
button.value = 'set';
button.id = 'button';
popup.appendChild(button);

function checkTime(i) {
	if (i < 10) {
		i = "0" + i;
	}
	return i;
}

function startTime ()
{
	let today = new Date();
	let h = today.getHours();
	let m = today.getMinutes();
	let s = today.getSeconds();
	m = checkTime(m);
	s = checkTime(s);
	let time = h + ':' + m + ":" + s;
	document.getElementById("timeblock").innerHTML = h + ":" + m + ":" + s;

	let input = document.getElementById('input');
	let popup = document.getElementById('popup');
	let button = document.getElementById('button');
	button.onclick = function ()
	{
		input.value = time;
	}
	input.onfocus = function ()
	{
		popup.hidden = false;
	}
	// input.onblur = function ()
	// {
	// 	popup.hidden = true;
	// }

	let coords = input.getBoundingClientRect();
	let top = coords.top + coords.height + 10;
	popup.style.top = top + "px";
	popup.style.left = coords.left + "px";

	t = setTimeout(function() {
		startTime();
	}, 500);
}

startTime();
