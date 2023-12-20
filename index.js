document.addEventListener('DOMContentLoaded', () =>{
    const header = document.querySelector('.header')
    const header_cont =document.querySelector('.header_container')
    const scrolItem =document.querySelector('.scrol-item')


window.addEventListener('scroll' ,() => {
    let scrollTop = window.scrollY;
    let hederCenter = header.offsetHeight / 2;


    if(scrollTop >= hederCenter){
        header_cont.classList.add('header_container2');
       
    }else {
        header_cont.classList.remove('header_container2');
        header.style.marginTop = `0px`
    }
})
})
const Batton =document.querySelector('.container_menu');
Batton.addEventListener('click' , Click)
function Click(){
    document.querySelector(".leave").classList.toggle("activ");
}


//----------
const btnUp = {
    el: document.querySelector('.btn-up'),
    show() {
      // удалим у кнопки класс btn-up_hide
      this.el.classList.remove('btn-up_hide');
    },
    hide() {
      // добавим к кнопке класс btn-up_hide
      this.el.classList.add('btn-up_hide');
    },
    addEventListener() {
      // при прокрутке содержимого страницы
      window.addEventListener('scroll', () => {
        // определяем величину прокрутки
        const scrollY = window.scrollY || document.documentElement.scrollTop;
        // если страница прокручена больше чем на 400px, то делаем кнопку видимой, иначе скрываем
        scrollY > 400 ? this.show() : this.hide();
      });
      // при нажатии на кнопку .btn-up
      document.querySelector('.btn-up').onclick = () => {
        // переместим в начало страницы
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth'
        });
      }
    }
  }
  
  btnUp.addEventListener();

