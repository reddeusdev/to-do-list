class Wyszukaj{
      static serach(text, tab){
          return  tab.filter(item => item.toLowerCase().includes(text));
      }
}