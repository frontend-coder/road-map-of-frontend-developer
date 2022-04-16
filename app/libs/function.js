document.addEventListener('DOMContentLoaded', () => {
  'use strict ';

  function checkauVivid() {
    const r = 'Працюю з іменной функцією ';
    return r;
  }
  const checkauVividV = checkauVivid();
  document.querySelector('.name_func').textContent = checkauVividV;
  document.querySelector('.name_func').style.cssText = 'margin-top:30px';

  console.log('В цьому файлі відбуваеться работа с javascript функціями');
  const functionOone = document.querySelector('.function_one');

  function fOne(oneData, twoData, funData = '.function_two') {
    const res = oneData * twoData;
    //  functionOone.textContent = res;
    document.querySelector(funData).innerHTML = res;
  }
  fOne(34, -7, '.function_one');

  fOne(34, 154);
  fOne(34, 4, '.function_three');

  const arroyFunc = (mogo) => {
    document.querySelector('.arroy_func').innerHTML = `Це приклад работі ${mogo} стрілочної функції `;
  };
  arroyFunc('моєї');

  const arroyVid = (fed) => {
    const re = fed * 45;
    return re;
  };
  document.querySelector('.arroy_vid').textContent = arroyVid;
  document.querySelector('.arroy_vidp').textContent = arroyVid(3);
  document.querySelector('.arroy_vidp').style.cssText = 'padding:20px; color:#eee';

  const checkArrowFunArgum = (z, er) => {
    const re = 'Новой стрелочной функции c указанием аргументов: ';
    return re + z + er;
  };
  document.querySelector('.arroy_pis').innerHTML = checkArrowFunArgum(11, 14);
  /**
   *
   * Методы - вспомагательные функции
   * Свойства - вспомагательные значения
   *
   */

  const str = 'Довжина строки, яка повинна бути виміряною';
  document.querySelector('.str_length').textContent = `Довжина стрічки - ${str.length} знаків`;

  for (let i = 0; i < str.length; i += 1) {
    document.querySelector('.str_length1').textContent = str[i];
  }

  for (let i = 0; i < str.length; i += 1) {
    if (typeof str === 'string') {
      document.querySelector('.str_length2').textContent = str[i];
    }
  }
  const arr = ['t', 'est t', 'asks'];
  document.querySelector('.str_length3').textContent = arr.length;

  const ob = {
    one: 't',
    two: 'est t',
    three: 'asks',
  };

  document.querySelector('.str_length4').innerHTML = ob.length;
  console.log(ob.length);

  // Пошук підстроки

  const fruit = 'Some fruit';
  console.log(fruit.indexOf('t'));

  const logg = 'Hello world';

  console.log('slice');
  console.log(logg.slice(6, 11));
  console.log(logg.slice(5));
  console.log(logg.slice(-7, -1));
  console.log('substring');
  console.log(logg.substring(6, 11));

  console.log('substr медод');
  console.log(logg.substr(6, 5));
  console.log('Методы чисел');

  const num = 23.4;
  console.log(Math.round(num));

  const tnum = '325.4px';
  console.log(parseInt(tnum));
  console.log(parseFloat(tnum));

  console.log('Callback функции  ');
  console.log('      ');

  function learnJS(lang, done) {
    console.log(`Я учу ${lang}`);
    done();
  }

  function done() {
    console.log('Я прошел этот урок');
  }

  learnJS('javascript', done);

  console.info('Это конец файла');


  
});
