let firstArray = [
    {
        'elem': 0
    },
    {
        'elem': 1
    },
    {
        'elem': 2
    }
    ];
let secondArray = [];
let thirdArray = [];
let putHereElement = [];
let dragStartArray = -1;
renderView();
    function renderView() {
        document.getElementById('div1').innerHTML = '';
        document.getElementById('div2').innerHTML = '';
        document.getElementById('div3').innerHTML = '';
        renderArray(firstArray,'div1');
        renderArray(secondArray,'div2');
        renderArray(thirdArray,'div3');
    }

    function findMaxOfArray(array) {
        let max = -1;
        for(let i=0;i<array.length;i++) {
            if (array[i].elem > max) {
                max = array[i].elem;
            }
        }
        return max;
    }
    function spliceStartDragArray() {
        if (dragStartArray === 0) {
            firstArray.splice(firstArray.length-1,1);
        }
        else if (dragStartArray === 1) {
            secondArray.splice(secondArray.length-1,1);
        }
        else if (dragStartArray === 2) {
            thirdArray.splice(thirdArray.length-1,1);
        }
        else alert('error, wrong array')
    }
    //check for target block and splice start of drag array
    function checkForDrop(divId, array,ev) {
        if (ev.target.id === divId) {
            if (putHereElement[0].elem > findMaxOfArray(array)) {
                array.push(putHereElement[0]);
                spliceStartDragArray();
            }
            else alert('you cant put a larger block on a smaller block!');
        }
    }
    function checkForDrag(divId,array,ev,startNumber) {
        if(ev.target.parentElement.id === divId) {
            putHereElement[0] = array[array.length-1];
            dragStartArray = startNumber;
        }
    }

function renderArray(array,idOfDiv) {
    for (let i = 0; i< array.length; i++) {
        let isdraggable ='false';
        if (i === array.length - 1) {
            isdraggable ='true';
        }
        document.getElementById(idOfDiv).innerHTML +=(`
            <div draggable="`+
            isdraggable
            +`" ondragstart="drag(event)" class="draggableDiv" id="drag` +
            array[i].elem +`">` + `</div>`);
    }
}
function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
    checkForDrag('div1',firstArray,ev,0);
    checkForDrag('div2',secondArray,ev,1);
    checkForDrag('div3',thirdArray,ev,2);
}

function drop(ev) {
    ev.preventDefault();
    let data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
    checkForDrop('div1',firstArray,ev);
    checkForDrop('div2',secondArray,ev);
    checkForDrop('div3',thirdArray,ev);
    renderView();
    if (secondArray.length ===3) {
        alert('Congratulation, you have broken the universe -_-')
    }
}
