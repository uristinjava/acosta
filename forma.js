'use strict'

document.addEventListener('DOMContentLoaded', function () {


    const itemEl = document.querySelector('.form_action');
    const bodyEl = document.querySelector('.body');
    const formEl = document.querySelector('.wrapper_form');
    const mainEl = document.querySelector('.main');



    //обработчик события клика на ссылку 
    itemEl.addEventListener('click', (event) => {
        formEl.classList.toggle('visible');
        bodyEl.classList.toggle('lock');
        mainEl.classList.toggle('blur');

    });

    /**
     * обрабатываем событие убрать форму
     * 1. форма убирается если нажали на пустое поле
     * 2. форма убирается если нажали на кнопку отправить
     * 3. форма убирается еcли нажали на кнопку отмена
     */



    window.addEventListener('click', e => {

        const target = e.target
        if (target.closest('.cansel_botton')) {
            formEl.classList.add('visible');
            bodyEl.classList.remove('lock');
            mainEl.classList.remove('blur');
        } else {
            return
        }
    });

    // if (formEl.contains('visible')) {

    //     window.addEventListener('click', e => {
    //         const target = e.target;
    //         if (!target.closest('.send_botton')) {
    //             formEl.classList.remove('visible');
    //             bodyEl.classList.remove('lock');
    //             mainEl.classList.remove('blur');
    //         }
    //     })
    // }




    // function getRenderForm() {
    //     return `
    //      <div class="wrapper_form">
    //         <div class="forma">
    //             <p class="text_header">Заявка на финансовую услугу</p>
    //             <form class="form" id="form" action="#">
    //                 <div class="area">
    //                     <input class="input _reg" type="text" placeholder="Наименование организации">
    //                     <p class="under_text" required>Данное поле является обязательным</p>
    //                     <input class="input _reg" type="number" step="1" min="1" max="27" placeholder="ИНН">
    //                     <input class="input _reg" type="text" placeholder="Фамилия">
    //                     <input class="input _reg" type="text" placeholder="Имя">
    //                     <input class="input" type="text" placeholder="Отчество">
    //                     <input class="input _email" type="email" placeholder="Адрес электронной почты">
    //                     <input class="input" type="tel" placeholder="Телефон в формате +79ХХХХХХХХХ">
    //                     <textarea class="input text_area" name="" id="" cols="30" rows="10" placeholder="Дополнительный комментарий">
    //                     </textarea>
    //                 </div>
    //                 <div class="bottom_box">
    //                     <div class="button">
    //                         <p class="text_botton">Отмена</p>
    //                     </div>
    //                     <div class="button">
    //                         <p class="text_botton">Отправить</p>
    //                     </div>
    //                 </div>

    //             </form>
    //         </div>
    //     </div>
    //     `
    // }
});