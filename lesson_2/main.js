let inputCreate = document.getElementById("input-create");
let buttonCreate = document.getElementById("btn-create");
let list = document.getElementById("todo-list");

buttonCreate.addEventListener('click', function(){
  let value = inputCreate.value;
  if(value){
    addItemToDom(value);
    inputCreate.value = '';
  }
})

function addItemToDom(value){
    let itemView = `
      <div class="item">
        <span class="item-text">${value}</span>
        <span class="secondary-content">
          <div class="item-btn item-btn-del btn-floating btn-small waves-effect waves-light red">x</div>
        </span>
      </div>`;

    let item = document.createElement('li');
    //класс, который я не вспомнил на уроке
    item.classList = 'collection-item';
    item.innerHTML = itemView;

    //добавим слушатель для удаления
    let buttonDelete = item.getElementsByClassName('item-btn-del')[0];
    buttonDelete.addEventListener('click', removeItem);

    list.appendChild(item);

}

function removeItem(event){
  let item = event.target.parentNode.parentNode.parentNode;
  list.removeChild(item);
}