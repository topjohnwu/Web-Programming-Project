var input = document.getElementById('input');
var button = document.getElementById('button');
var list = document.getElementById('list');
var count = document.getElementById('count');

var num = 0;

input.onkeydown = newItem;
button.onclick = removeDone;

function newItem() {
	if(event.keyCode != 13) return;
	var item = document.createElement('li');
	item.innerHTML = 
	'<div><input type="checkbox"></input>' + 
	'<label>' + input.value + '</label>' +
	'<button></button></div>';
	input.value = '';
	item.childNodes[0].childNodes[0].onclick = function () {
		var label  = item.childNodes[0].childNodes[1];
		if(event.target.checked === true) {
			label.className = 'complete';
			--num;
		}
		else {
			label.className = '';
			++num;
		}
		updateCount();
	};
	item.childNodes[0].childNodes[2].onclick = function () {
		list.removeChild(event.target.parentElement.parentElement);
	};
	list.appendChild(item);
	++ num;
	updateCount();
}

function removeDone() {
	var array = list.childNodes;
	for(var i = 0; i < array.length; ++i) {
		if(array[i].childNodes[0].childNodes[0].checked === true) {
			list.removeChild(array[i]);
			--i;
		}
	}
}

function updateCount() {
	if (num === 0) {
		count.innerHTML = 'No item left';
	}
	else if (num === 1) {
		count.innerHTML = num + ' item left';
	}
	else count.innerHTML = num + ' items left';
}