const task = new Task();



// const addInput = document.querySelector('.addInput');
// const addButton = document.querySelector('form');

// const searchInput = document.querySelector('.searchInput');
// const searchButton = document.querySelector('.searchButton');

// const lista = document.querySelector('.lista');


// let taskTable = [];

// addButton.addEventListener('submit', (e) => {
//     e.preventDefault();
//     if(!addInput.value) return;
//     const li = document.createElement("li");
//     li.classList.add("task");
//     li.innerHTML = addInput.value +" <button>Usun</button>";
//     taskTable.push(li);
//     addInput.value = "";
//     searchInput.value = "";
//     li.querySelector("li button").addEventListener('click', (e) => {
//         taskTable.splice(e.target.parentNode.dataset.key, 1);
//         renderTab();
//     });
//     renderTab();
// })

// searchInput.addEventListener('input', (e) => {
//     let text = e.target.value.toLowerCase();
//     searchButton.addEventListener('click', () => {
//        let tasker = taskTable.filter(item => item.textContent.toLowerCase().includes(text));
//        lista.textContent = "";
//         addInput.value = "";
//             tasker.forEach((item, index) => {
//             lista.appendChild(item); 
//         })
//     })
    
// })

// const numberTask = () => {
//     document.querySelector('span').textContent = taskTable.length;
// }

// const renderTab = () => {
//     lista.textContent = "";
//      numberTask();
//     taskTable.forEach((item, index) => {
//         item.dataset.key = index;
//         lista.appendChild(item); 
//     })
// }

