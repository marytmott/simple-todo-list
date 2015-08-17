(function() {
  var button = document.querySelector('#add_todo');

  button.addEventListener('click', function(e) {
    var toDoField = document.querySelector('#list-item');
    var ul = document.querySelector('ul');
    var newLi = document.createElement('li');
    var input = toDoField.value;
    e.preventDefault();

    newLi.innerText = input;
    ul.appendChild(newLi);
    toDoField.setAttribute('placeholder', 'what do you need to do?');
    toDoField.value = '';
  });
})();

//new li item...append child