function textInputs() {                                                     // функция для работы инпутов ввода текста

    const autosize = require("autosize");
    autosize(document.querySelector('textarea'));                           // изменение высоты textarea в зависимости от кол-ва введенного текста. Работает через плагин autosize (подключен через npm)

    const city = document.querySelector('.city'),
          initials = document.querySelector('.initials'),
          numTel = document.querySelector('.num-tel'),
          comment = document.querySelector('.comment');

    const select = document.querySelector('.main-form__select'),
          name = document.querySelector('.main-form__name'),
          phone = document.querySelector('.main-form__phone'),
          commentInput = document.querySelector('.main-form__textarea');

    const bugLineName = document.querySelector('.bug-line-name'),           // устранение бага с изменением цвета полосы под инпутом при автоподстановке
          bugLinePhone = document.querySelector('.bug-line-phone');
          
    
    select.addEventListener('input', ()=> {
        if (select.value != '') {
            city.style.opacity = 1;
            select.style.color = 'white';                                   // при любом выборе в селекте устанавливаем нужный цвет текста
        }

    });
    name.addEventListener('input', ()=> {
        if (name.value != '') {
            initials.style.opacity = 1;

            let nameWidth = +getComputedStyle(name).width.replace(/\D/g, '');   // блок с устранением бага с автоподстановкой
            name.style.borderBottom = 'none';
            bugLineName.style.width = nameWidth + 'px';
            bugLineName.style.opacity = 1;

        } else {
            initials.style.opacity = 0;
        }

    });
    phone.addEventListener('input', ()=> {
        if (phone.value != '') {
            numTel.style.opacity = 1;

            let numTelWidth = +getComputedStyle(phone).width.replace(/\D/g, '');   // блок с устранением бага с автоподстановкой
            phone.style.borderBottom = 'none';
            bugLinePhone.style.width = numTelWidth + 'px';
            bugLinePhone.style.opacity = 1;

        } else {
            numTel.style.opacity = 0;
        }
    });
    commentInput.addEventListener('input', ()=> {
        if (commentInput.value != '') {
            comment.style.opacity = 1;
        } else {
            comment.style.opacity = 0;
        }
    });


    
}

export default textInputs;