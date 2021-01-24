function range() {                                  // функция работы ползунка
    const sum = document.querySelector('.main-form__sum-range'),
          strip = document.querySelector('.main-form__range-active'),
          inputRange = document.querySelector('.main-form__range');

    inputRange.addEventListener('input', () => {
        sum.innerHTML = `${inputRange.value}
        <span class="rub">P</span>`;

        let percentWidth = inputRange.value / (inputRange.max / 100);
        strip.style.width = `${percentWidth}%`;
    });
}   

export default range;