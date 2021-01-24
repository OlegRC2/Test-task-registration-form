function radio() {                                                  // функция для работы радиокнопок
    const radio = document.getElementsByName('radio'),
          text = document.querySelectorAll('.main-form__radio-text'),
          active = 'radio-checkbox-active';

    text[0].classList.add(active);

    text.forEach(item => {
        item.addEventListener('click', (e)=> {
            const target = e.target;
            text.forEach(textItem => {
                textItem.classList.remove(active)
            });
            target.classList.add(active)

            radio.forEach(btn => {
                btn.setAttribute('checked', false)
            });
            target.previousElementSibling.setAttribute('checked', true);
        });
    });
}

export default radio;