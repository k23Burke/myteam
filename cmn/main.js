var dragSrcEl = null;
function handleDragStart(e) {
	this.style.opacity = '0.4';
	dragSrcEl = this;

  e.dataTransfer.effectAllowed = 'move';
  e.dataTransfer.setData('text/html', this.innerHTML);
}
function handleDragOver(e) {
	if(e.preventDefault){
		e.preventDefault(); //allows us to drop
	}
	e.dataTransfer.dropEffect = 'move';

	return false;
}
function handleDragEnter(e) {
	this.classList.add('over');
}
function handleDragLeave(e) {
	this.classList.remove('over');
}
function handleDrop(e) {
	if(e.stopPropagation) {
		e.stopPropagation();
	}
	// Don't do anything if dropping the same column we're dragging.
	if (dragSrcEl != this) {
		// Set the source column's HTML to the HTML of the column we dropped on.
		dragSrcEl.innerHTML = this.innerHTML;
		this.innerHTML = e.dataTransfer.getData('text/html');
	}
	return false;
}
function handleDragEnd(e) {
	this.style.opacity = '1';
	[].forEach.call(cols, function(item) {
		item.classList.remove('over');
	});
}


//items to drag
var drags = document.querySelectorAll('.playerlist > .player');
var le = null;
for (var i= 0;i< drags.length; i++) {
	le = drags[i];
	le.setAttribute('draggable','true');
	le.addEventListener('dragstart', handleDragStart, false);
	le.addEventListener('dragover', handleDragOver, false);
	le.addEventListener('dragenter', handleDragEnter, false);
	le.addEventListener('dragleave', handleDragLeave, false);
	le.addEventListener('drop', handleDrop, false);
	le.addEventListener('dragend', handleDragEnd, false);
}


var cols = document.querySelectorAll('#columns .column');
[].forEach.call(cols, function(col) {
	col.addEventListener('dragstart', handleDragStart, false);
	col.addEventListener('dragover', handleDragOver, false);
	col.addEventListener('dragenter', handleDragEnter, false);
	col.addEventListener('dragleave', handleDragLeave, false);
	col.addEventListener('drop', handleDrop, false);
	col.addEventListener('dragend', handleDragEnd, false);
});