
(function () {
    window.onload = function (){
        let getPosOfLi = 0;
        let mainArray = [];
        let secondArr = [];
        let lastLoadedIdFromServer = 0;
        if (JSON.parse(localStorage.getItem('localStorageArray')) != null) {
            mainArray = JSON.parse(localStorage.getItem('localStorageArray'));
        }
        renderArray(todoList);
        //add element button
        function renderArray(todoList) {
            todoList.innerHTML = '';
            for (i = 0; i < mainArray.length; i++) {
                let itemsCheckbox = `<input type="checkbox" id="todoListCheckboxItem` + i + `" class="todoListCheckboxItem">`;
                let itemsText = `<span>` + mainArray[i].title + `</span>`;
                //check for completed tasks
                if (mainArray[i].completed === true) {
                    itemsText = `<span style="text-decoration: line-through;color: #b3b3b3">` + mainArray[i].title + `</span>`;
                    itemsCheckbox = `<input type="checkbox" id="todoListCheckboxItem` + i + `" class="todoListCheckboxItem" checked="checked">`;
                }
                let markup = `
                     <li id="li` + i +`"> ` +
                    itemsCheckbox +
                    itemsText +
                    `
                    <a href="#ex1" rel="modal:open" class="editBtn">Edit</a>  
                    <button class="rmBtn">\u00D7</button>  
                    <div class="clearfix"></div>  
                    </li>
                `;
                //appending item to the html
                document.getElementById('todoList').innerHTML += markup;
            }
            for(i=0;i < document.getElementsByClassName('todoListCheckboxItem').length;i++){
                document.getElementsByClassName('todoListCheckboxItem')[i].addEventListener('click', function (e) {
                    if (e.target.checked === true) {
                        mainArray[parseInt(e.target.parentElement.id.substr(2))].completed = true;
                    }
                    else {
                        mainArray[parseInt(e.target.parentElement.id.substr(2))].completed = false;
                    }
                    pushToLocalStorage();
                    renderArray(todoList);
                });
            }
            //delete element button
            for(i=0;i < document.getElementsByClassName('todoListCheckboxItem').length;i++){
                document.getElementsByClassName('rmBtn')[i].addEventListener('click', function (e) {
                    mainArray.splice(parseInt(e.target.parentElement.id.substr(2)), 1);
                    pushToLocalStorage();
                    renderArray(todoList);
                });
            }
            //edit element button
            for(i=0;i < document.getElementsByClassName('editBtn').length;i++){
                document.getElementsByClassName('editBtn')[i].addEventListener('click', function (e) {
                    getPosOfLi = parseInt(e.target.parentElement.id.substr(2));
                    $('#modalEditInput').val(mainArray[parseInt(e.target.parentElement.id.substr(2))].title);
                    renderArray(todoList);
                });
            }
            //clear array and local storage
            document.getElementById('clearArrayStorage').addEventListener('click', function () {
                localStorage.clear();
                document.getElementById('todoList').innerHTML = '';
                mainArray = [];
            });
            //clear completed tasks from everywhere
            document.getElementById('clearCompleted').addEventListener('click', function () {
                for (i = 0; i < mainArray.length; i++) {
                    if (mainArray[i].completed === true) {
                        mainArray.splice(i, 1)
                    }
                }
                pushToLocalStorage();
                renderArray(todoList);
            });
            //get parent id and set parameter "completed"
        }
        //add new item from text input
        document.getElementById('addButton').addEventListener('click',function getInputText() {
            if (document.getElementById('inputText').value != '') {
                mainArray.push({
                    "id": mainArray.length,
                    "title": document.getElementById('inputText').value,
                    "completed": false
                });
            }
            document.getElementById('inputText').value = '';
            if (mainArray != null) {
                pushToLocalStorage();
            }
            renderArray(todoList);
        });

        //download more tasks from server
        document.getElementById('loadMoreTodos').addEventListener('click', function () {
            let loadFromServerLenght = lastLoadedIdFromServer + 5;
            $.getJSON('https://jsonplaceholder.typicode.com/todos', function (data) {
                secondArr = data;
                for (let i = lastLoadedIdFromServer; i < loadFromServerLenght; i++) {
                    mainArray.push(secondArr[i]);
                    lastLoadedIdFromServer = secondArr[i].id;
                    if (lastLoadedIdFromServer > secondArr.length - 1) {
                        lastLoadedIdFromServer = 0;
                    }
                    pushToLocalStorage();
                    renderArray(todoList);
                }
            });
        });
        //save button in modal window on edit
        document.getElementById('modalSaveBtn').addEventListener('click', function () {
            mainArray[getPosOfLi].title = document.getElementById('modalEditInput').value;
            document.getElementById('modalEditInput').value = '';
            pushToLocalStorage();
            renderArray(todoList);
        });

        function pushToLocalStorage() {
            localStorage.setItem('localStorageArray', JSON.stringify(mainArray));
        }
    }
})();
