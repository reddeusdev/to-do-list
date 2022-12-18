class Resultat {
      constructor() {
            let _taskTable = [];
            this.getTaskTable = () => _taskTable;
            this.lenTaskTable = () => _taskTable.length;
            this.delTaskTable = (item) => {
                  this.getTaskTable().splice(item ,1);
                  localStorage.setItem("taskTable", JSON.stringify(this.getTaskTable()));
            };
            this.setTaskTable = (item) => {
                  if (Array.isArray(item)) {
                        item.forEach(element => {
                              _taskTable.push(element);
                        })
                  } else {
                        _taskTable.push(item)
                  };
                  return _taskTable;
            }
      }
      createTab(tab,lista) {
            let htmlTab = [];
            tab.forEach(item => {
                  const li = document.createElement("li");
                  li.classList.add("task");
                  li.innerHTML = item + "  <button>Usun</button>";
                  htmlTab.push(li);
                  li.querySelector("li button").addEventListener('click', (e) => {
                       this.delTaskTable(e.target.parentNode.dataset.key)
                       htmlTab.splice(e.target.parentNode.dataset.key ,1);
                       Draw.renderTab(htmlTab,lista);
                       Draw.renderNumber(this.lenTaskTable());
                  });
            })
            return htmlTab;
      }
}