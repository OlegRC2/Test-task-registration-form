function switchOnOff() {                                    // функция работы переключателя онлайн-офлайн
    const text = document.querySelectorAll('.main-form__switch-title'),
          onOff = document.querySelector('.switch-label'),
          active = 'radio-checkbox-active';

    text[0].classList.add(active);

    onOff.addEventListener('click', () => {
        text[0].classList.toggle(active);
        text[1].classList.toggle(active);
    });

    text.forEach(item => {
        item.addEventListener('click', () => {
            onOff.click();
        });
    });
}

export default switchOnOff;