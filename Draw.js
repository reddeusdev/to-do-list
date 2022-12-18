class Draw {
      static renderTab(tab, lista) {
            lista.textContent = "";
            tab.forEach((item, index) => {
                  item.dataset.key = index;
                  lista.appendChild(item);
            })
      }
      static renderNumber(number){
            document.querySelector('span').textContent = number;
      }
}