var input = document.getElementById('input');
var button = document.getElementById('button');
var list = document.getElementById('list');
var count = document.getElementById('count');
var toggle_all = document.getElementById('toggle-all');

var array = list.childNodes;
var num = 0;

input.onkeydown = newItem;
button.onclick = removeDone;
toggle_all.onclick = toggleAll;

function newItem() {
	if(event.keyCode != 13) return;
	var item = document.createElement('li');
	item.innerHTML = 
	'<div><input type="checkbox">' + 
	'<label>' + input.value + '</label>' +
	'<button></button></div>';
	input.value = '';
	item.childNodes[0].childNodes[0].onclick = function () { toggle(event.target); };
	item.childNodes[0].childNodes[2].onclick = function () {
		list.removeChild(event.target.parentElement.parentElement);
	};
	list.appendChild(item);
	++ num;
	updateCount();
}

function removeDone() {
	for(var i = 0; i < array.length; ++i) {
		if(array[i].childNodes[0].childNodes[0].checked) {
			list.removeChild(array[i]);
			--i;
		}
	}
	updateCount();
}

function updateCount() {
	if (num === 0) {
		count.innerHTML = 'No item left';
		if(list.childElementCount) toggle_all.checked = true;
		else toggle_all.checked = false;
	}
	else if (num === 1) {
		count.innerHTML = num + ' item left';
		toggle_all.checked = false;
	}
	else {
		count.innerHTML = num + ' items left';
		toggle_all.checked = false;
	}
}

function toggle(target) {
	var label = target.nextSibling;
	if(target.checked) {
		label.className = 'complete';
		--num;
	}
	else {
		label.className = '';
		++num;
	}
	updateCount();
}

function toggleAll() {
	if(list.childElementCount === 0) {
		toggle_all.checked = false;
		return;
	}
	var i;
	var full = true;
	for(i = 0; i < array.length; ++i) {
		if(!array[i].childNodes[0].childNodes[0].checked) {
			full = false;
			break;
		}
	}
	if(full) {
		for(i = 0; i < array.length; ++i) {
			array[i].childNodes[0].childNodes[0].checked = false;
			toggle(array[i].childNodes[0].childNodes[0]);
		}
	}
	else {
		for(i = 0; i < array.length; ++i) {
			if(!array[i].childNodes[0].childNodes[0].checked) {
				array[i].childNodes[0].childNodes[0].checked = true;
				toggle(array[i].childNodes[0].childNodes[0]);
			}
		}
	}
}