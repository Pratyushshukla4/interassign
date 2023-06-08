const items = document.querySelectorAll('.item');
const dropzone = document.getElementById('dropzone');
const resetBtn = document.getElementById('resetBtn');
let successMessage;

// Add event listeners to items for drag events
items.forEach(item => {
  item.addEventListener('dragstart', dragStart);
  item.addEventListener('dragend', dragEnd);
});

// Add event listeners to dropzone for drop events
dropzone.addEventListener('dragover', dragOver);
dropzone.addEventListener('dragenter', dragEnter);
dropzone.addEventListener('dragleave', dragLeave);
dropzone.addEventListener('drop', drop);

// Add event listener to reset button
resetBtn.addEventListener('click', reset);

// Drag functions
function dragStart(event) {
  event.dataTransfer.setData('text/plain', event.target.textContent);
  event.target.classList.add('dragging');
}

function dragEnd(event) {
  event.target.classList.remove('dragging');
}

// Dropzone functions
function dragOver(event) {
  event.preventDefault();
}

function dragEnter(event) {
  event.preventDefault();
  dropzone.classList.add('dragover');
}

function dragLeave(event) {
  dropzone.classList.remove('dragover');
}

function drop(event) {
  event.preventDefault();
  const data = event.dataTransfer.getData('text/plain');
  const newItem = document.createElement('div');
  newItem.textContent = data;
  dropzone.appendChild(newItem);
  dropzone.classList.remove('dragover');
  showSuccessMessage();
}

// Reset function
function reset() {
  dropzone.innerHTML = '';
  removeSuccessMessage();
}

// Success message functions
function showSuccessMessage() {
  if (!successMessage) {
    successMessage = document.createElement('p');
    successMessage.textContent = 'Item dropped successfully!';
    successMessage.classList.add('success-message');
    document.body.appendChild(successMessage);
  }
}

function removeSuccessMessage() {
  if (successMessage) {
    successMessage.remove();
    successMessage = null;
  }
}


function drop(event) {
    event.preventDefault();
    const data = event.dataTransfer.getData('text/plain');
    const newItem = document.createElement('div');
    newItem.textContent = data;
    dropzone.appendChild(newItem);
    dropzone.classList.remove('dragover');
    showSuccessMessage();
  
    // Remove the dropped item from the first container
    const draggedItem = document.querySelector('.dragging');
    draggedItem.remove();
  }

  function reset() {
    dropzone.innerHTML = '';
    removeSuccessMessage();
  
    // Restore all items to the first container
    const container1 = document.querySelectorAll('.container')[0];
    items.forEach(item => container1.appendChild(item));
  }
  