function send() {                                         // функция смены активности кнопки отправить при заполнении определенных полей формы и показа окна "спасибо"
    const form = document.querySelector('.main-form'),
          popup = document.querySelector('.popup-reg'),
          thanks = document.querySelector('.popup-thanks'),
          btn = document.querySelector('.main-form__send'),
          thanksBtn = document.querySelector('.thanks-btn'),

          cityInput = document.querySelector('.main-form__select'),
          nameInput = document.querySelector('.main-form__name'),
          phoneInput = document.querySelector('.main-form__phone'),
          checkboxText = document.querySelectorAll('.main-form__checkbox-text'),

          activeBtn = 'active-btn',
          activeCheckbox = 'radio-checkbox-active';

    let checkboxValue = [false, false, false];

    checkboxText.forEach((item, i) => {
        item.addEventListener('click', () => {
            
            if (item.classList.contains(activeCheckbox)) {
                checkboxValue[i] = true;
            } else {
                checkboxValue[i] = false;
            }
    
        });
    });
        
    setInterval(function() {
        let check;
        for (let i = 0; i < checkboxValue.length; i++) {
            if (checkboxValue[i]) {
                check = true;
                break;
            }
        }

        if (cityInput.value != '' && nameInput.value != '' && phoneInput.value != '' && check ) {
            btn.classList.add(activeBtn);
        } else {
            btn.classList.remove(activeBtn);
        }
    }, 200);   
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        if (btn.classList.contains(activeBtn)) {
            popup.style.display = 'none';
            thanks.style.display = 'block';
            form.reset();
        }
    });

    thanksBtn.addEventListener('click', () => {
        thanks.style.display = 'none';
        popup.style.display = 'block';
    });

}

export default send;