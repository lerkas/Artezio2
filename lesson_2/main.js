let inputCreate = document.getElementById("input-create");
let buttonCreate = document.getElementById("btn-create");
let list = document.getElementById("todo-list");
let completeList = document.getElementById("complete-list");
let firstItemDelete = false;

buttonCreate.addEventListener('click', function() {
    let value = inputCreate.value;
    if (/\S/.test(value)) { // Задание 1. Проверка на строку из одних пробелов
        addItemToDom(value);
        inputCreate.value = '';
    }
})

function addItemToDom(value) {
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

function removeItem(event) {
    let item = event.target.parentNode.parentNode.parentNode;
    list.removeChild(item);
    completeItem(item);
}

// Задание 2. Перенос элемента в новый список при удалении
function completeItem(item) {
    if (!firstItemDelete) {
        completeList.insertAdjacentHTML('beforebegin',
            `<div class="input-field">
                <input id="input-create" type="text" placeholder="Введите текст для поиска">
            </div>`);
        firstItemDelete = true;
    }

    let completeItem = document.createElement('li');
    completeItem.innerHTML = item;
    completeList.appendChild(item);

    let btn = completeList.getElementsByClassName('item-btn-del');
    for (let i = btn.length - 1; i >= 0; i--) {
        btn[i].remove();
    }
}