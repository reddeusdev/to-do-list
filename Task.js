class Task {
      constructor() {
            this.task = new Resultat()
            const addInput = document.querySelector('.addInput');
            const searchInput = document.querySelector('.searchInput');
            const searchButton = document.querySelector('.searchButton');
            if (typeof localStorage !== "undefined") {
                  this.task.setTaskTable(JSON.parse(localStorage.getItem("taskTable")));
            };
            this.render(this.task.getTaskTable(), addInput);

            document.querySelector('form').addEventListener('submit', (e) => {
                  e.preventDefault();
                  if (!addInput.value) return;
                  this.task.setTaskTable(addInput.value);
                  localStorage.setItem("taskTable", JSON.stringify(this.task.getTaskTable()));
                  this.render(this.task.getTaskTable(), addInput);
            })
            searchInput.addEventListener('input', (e) => {
                  let text = e.target.value.toLowerCase();
                  searchButton.addEventListener('click', () => {
                        let tasker = Wyszukaj.serach(text,this.task.getTaskTable())
                        this.render(tasker, addInput);
                  })
            })
      }
      render(tableTask = [], addInput) {
            document.querySelector('span').textContent = this.task.lenTaskTable();
            addInput.value = ""
            const lista = document.querySelector('.lista');
            Draw.renderTab(this.task.createTab(tableTask, lista), lista, addInput);
            Draw.renderNumber(this.task.lenTaskTable());
      }

}