import textInputs from './modules/textInputs';
import radio from './modules/radio';
import checkbox from './modules/checkbox';
import switchOnOff from './modules/switchOnOff';
import range from './modules/range';
import send from './modules/send';
import mask from './modules/mask';

window.addEventListener('DOMContentLoaded', () => {
    textInputs();               // функция для работы инпутов ввода текста
    mask('[name="phone"]');     // функция для работы маски инпута
    radio();                    // функция для работы радиокнопок
    checkbox();                 // функция для работы чекбоксов
    switchOnOff();              // функция работы переключателя онлайн-офлайн
    range();                    // функция работы ползунка
    send();                     // функция смены активности кнопки отправить при заполнении определенных полей формы и показа окна "спасибо"
});