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

          cityTitle = document.querySelector('.city'),
          nameTitle = document.querySelector('.initials'),
          phoneTitle = document.querySelector('.num-tel'),

          sum = document.querySelector('.main-form__sum-range'),
          strip = document.querySelector('.main-form__range-active'),

          textRadio = document.querySelectorAll('.main-form__radio-text'),
          textCheckbox = document.querySelectorAll('.main-form__checkbox-text'),

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
    
    function checkbox () {
        textCheckbox.forEach(item => {
            item.classList.remove(activeCheckbox);
        });
    }
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        if (btn.classList.contains(activeBtn)) {
            popup.style.display = 'none';
            thanks.style.display = 'block';
            form.reset();
            cityTitle.style.opacity = 0;
            nameTitle.style.opacity = 0;
            phoneTitle.style.opacity = 0;
            cityInput.style.color = "rgba(255, 255, 255, 0.5)";
            sum.innerHTML = `0
                <span class="rub">P</span>`;
            strip.style.width = `0%`;
            checkbox();
            textRadio[0].click();
        }
    });

    thanksBtn.addEventListener('click', () => {
        thanks.style.display = 'none';
        popup.style.display = 'block';
    });

}

export default send;