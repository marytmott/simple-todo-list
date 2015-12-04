(function() {
  var button = document.querySelector('#add_todo');
  var ul = document.querySelector('ul');

  function addToDo(e) {
    var toDoField = document.querySelector('#list-item');
    var input = toDoField.value;
    var newLi = document.createElement('li');
    e.preventDefault();

    if (input) {
      newLi.innerHTML = input + '<span class="delete"><a>Delete</a></span>';
      ul.appendChild(newLi);
      toDoField.setAttribute('placeholder', 'what do you need to do?');
      toDoField.value = '';
    }
  }

  function itemCompleted(e) {
    var deleteTarget = e.target.innerHTML;
    console.log(e.target.parentNode.parentNode);
    e.stopPropagation();
    e.target.setAttribute('class', 'completed');

    if (deleteTarget === "Delete") {
      e.target.remove(this);
    }
  }


  function deleteSpan() {


  }




  ul.addEventListener('click', itemCompleted);


  button.addEventListener('click', addToDo);


})();

//add click handler on ul
