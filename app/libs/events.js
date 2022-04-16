document.addEventListener('DOMContentLoaded', () => {
  'use strict ';

  console.log('       ');
  console.log('В цьому файлі відпрацьовую работу з подіями Javascript');
  console.log('       ');

  document.addEventListener('keydown', (e) => {
    console.log(`Нажата клавіша клавіатури: її код -  ${e.code}, назва клавіши клавіатури - ${e.key}`);
  });

  function keyU(e) {
    console.log(`Нажата клавіша клавіатури: її код -  ${e.code}, назва клавіши клавіатури - ${e.key}`);
  }

  function keyD(e) {
    console.log(`Отжата клавіша клавіатури: її код -  ${e.code}, назва клавіши клавіатури - ${e.key}`);
  }
  document.addEventListener('keydown', keyD);
  document.addEventListener('keyup', keyU);
  /*eslint-disable */
  document.addEventListener('keydown', function (e) {
    /* eslint-enable */
    if (e.code === 'KeyZ' && (e.ctrlKey || e.metaKey)) {
      console.log('Відключаю дію!');
    }
  });

  /** Зворотній відлік знаків */
  const textArea = document.querySelector('.text__reaa');
  textArea.style.marginTop = '20px';
  textArea.style.padding = '10px';
  textArea.style.width = '500px';
  textArea.style.background = '#808080';
  textArea.style.color = '#fff';

  const txtItemLimit = textArea.getAttribute('maxlength');
  const txtCounter = document.querySelector('.textarea__counter');
  txtCounter.innerHTML = txtItemLimit;

  textArea.addEventListener('keyup', txtSetCounter);
  /*eslint-disable */
  textArea.addEventListener('keydown', function (e) {
    if (e.repeat) txtSetCounter();
  });

  txtCounter.innerHTML = `Осталось знаков ${txtItemLimit}`;

  function txtSetCounter() {
    const txtCounterResult = txtItemLimit - textArea.value.length;
    txtCounter.innerHTML = `Осталось знаков ${txtCounterResult}`;
  }
  document.querySelector('.maxleght').innerHTML = `Печатных знаков - ${txtItemLimit}`;
  document.querySelector('.maxleght1').textContent = txtItemLimit;

  const menuBody = document.querySelector('.menu');
  function menu(e) {
    if (e.target.closest('.menu_button')) {
      menuBody.classList.toggle('_active');
    }
    if (!e.target.closest('.menu')) {
      menuBody.classList.remove('_active');
    }
  }

  document.addEventListener('click', menu);
  document.addEventListener('keyup', function (e) {
    console.log(e.code);
    if (e.code === 'Escape') {
      menuBody.classList.remove('_active');
    }
  });

  /** Свойство target интерфейса Event является ссылкой на объект, который был инициатором события. Он отличается от Event.currentTarget, если обработчик события вызывается во время всплытия (bubbling) или захвата события.
   *
   * Event.currentTarget Определяет элемент, в котором в данный момент обрабатывается событие, при движении события внутри DOM. Всегда совпадает элементом, на котором обработчик события был назначен, в отличие от свойства event.target, идентифицирующего элемент, на котором событие возникло.
   *
   *
   */

  window.addEventListener('scroll', function (e) {
    /** кількість прокручених пікселів по вертикалі
     * scrollY or pageYOffset (застаріло)
     * кількість прокручених пікселів по горізонталі
     * scrollX or pageXOffset (застаріло)
     */
    console.log(`${scrollY}px`);
    if (scrollY > 120) {
      console.log('повинно з"явитися верхнє меню');
    }

    if (scrollY > 801 && scrollY <= 1600) {
      console.log('Проскролений перший блок');
    }
  });
  /**
   * подіі завантаження сторінки
   * DOMContentLoaded - завантажив HTML, збудований  DOM, медіа не завантежено
   * load - браузер завантажив все
   * beforeinload - подія відбувається в момент виходу з сторінки
   *
   */
  /** Стан завантаження
   *  document.readyState
   * loading - іде завантаження
   * interactive - документ був завантажений
   * complete - документ був прочитанний та всі ресурси завантажені
   *
   */

  console.log(' document.readyState & DOMContentLoaded ');
  console.log('       ');

  document.addEventListener('DOMContentLoaded', readyDom);
  window.addEventListener('load', readyLoad);
  function readyDom() {
    const image = document.querySelector('.image');
    console.log(document.readyState);
    console.log('DOM завантажений!');
    console.log(image.offsetWidth);
  }

  function readyLoad() {
    console.log(document.readyState);
    const image = document.querySelector('.image');
    console.log('Сторінка завантажений!');
    console.log(image.offsetWidth);
  }

  window.addEventListener('beforeunload', beforeUnloud);
  function beforeUnloud(e) {
    e.preventDefault();
    e.returnValue = '';
  }

  window.addEventListener('unload', function (e) {
    // Выдправка статистики у фоновому режимы
  });
  /**
   * Вопрос в том, знаете ли вы какой цикл вам подходит лучше всего. Ведь есть и for, и обратный for, и for...of, и foreach, и for...in, и for...await. Эта статья - некая дискуссия на эту тему.
   *
   *  */
  console.log('       ');
  console.log('В цьому файлі скінчилась відпрацьювання з подіями Javascript');
  console.log('       ');
});
