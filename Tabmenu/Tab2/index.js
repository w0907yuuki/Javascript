/***************************/
/* タブ切り替えメニューのコード */
/***************************/

const tabs = document.querySelectorAll('.tab');
const contents = document.querySelectorAll('.content');

tabs.forEach(function (tab,index) {
  tab.addEventListener('click', toggleClass);
  function toggleClass() {
    for(const tab of tabs){
      tab.classList.remove('active');
    }
    for(const content of contents){
      content.classList.remove('active');
    }
    tab.classList.add('active');
    contents[index].classList.add('active');
  }
});