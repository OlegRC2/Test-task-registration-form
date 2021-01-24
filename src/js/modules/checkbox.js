function checkbox() {                                       // функция для работы чекбоксов
    const text = document.querySelectorAll('.main-form__checkbox-text'),
          active = 'radio-checkbox-active';

    text.forEach(item => {
        item.addEventListener('click', (e)=> {
            const target = e.target;
            target.classList.toggle(active); 
        });
    });
}

export default checkbox;