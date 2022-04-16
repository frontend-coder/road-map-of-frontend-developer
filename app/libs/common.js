document.addEventListener('DOMContentLoaded', () => {
  console.log('В цьому файлі працюю з базовими поняттями Javascript');
  console.log('скрипт работает');

  const headerContentWrapper = document.querySelector('.header_content-wrapper');
  const navContainer = document.querySelector('.nav__container').textContent;
  headerContentWrapper.style.justifyContent = 'center';
  headerContentWrapper.style.alignItems = 'center';
  headerContentWrapper.style.display = 'flex';

  console.log('Перебивка');

  // конецу

  // const getTitleHtwo = document.getElementsByClassName('.block_title');

  const getTitleHtwo = document.querySelectorAll('.block_title');
  const getBlockDeskr = document.querySelectorAll('.block_deskr');

  console.log(getTitleHtwo);

  for (let i = 0; i < getTitleHtwo.length; i += 1) {
    getTitleHtwo[i].style.marginTop = '20px';
    if (i % 2 === 1) {
      getTitleHtwo[i].style.textAlign = 'right';
    }
  }
  function theBlockDeskr() {
    for (let i = 0; i < getBlockDeskr.length; i += 1) {
      getBlockDeskr[i].style.marginTop = '10px';
      if (i % 2 !== 1) {
        getBlockDeskr[i].style.textAlign = 'right';
        getBlockDeskr[i].style.color = '#ffffff';
      } else {
        getBlockDeskr[i].style.color = '#ff7f50';
      }
    }
  }
  theBlockDeskr();

  const getFooter = document.querySelector('.footer-box');

  getFooter.style.color = '#ff7f50';
  getFooter.style.backgroundColor = '#000000';
  getFooter.style.paddingTop = '20px';
  getFooter.style.paddingBottom = '20px';
  getFooter.style.paddingLeft = '120px';
  getFooter.style.paddingRight = '120px';
  /** Це кінец  */

  const footerContain = document.querySelector('.footer-contain');
  const containerFluid = document.querySelector('.container-fluid');

  footerContain.innerHTML = `<p> Этот контент размещеный в футере </p>`;

  containerFluid.style.cssText = 'text-align: center';

  const taskTwo = document.getElementById('blovk_content--one');
  taskTwo.style.cssText = 'margin-top:40px; padding:20px; color: blue !important; background-color: yellow;width: 300px;text-align: center;';

  document.querySelector('.vivod-content').style.cssText = 'margin-bottom:40px; margin-top:30px;';
  document.querySelector('.vivod-content span:nth-child(1)').textContent = 'Перший абзац у блоці.';
  document.querySelector('.vivod-content span:nth-child(1)').innerHTML = 'Другий абзац у блоці.';

  // Просто отримати
  const takeOne = +document.getElementById('take__one').textContent;
  const takeOneOne = document.querySelector('.take__one');

  const takeTwoC = +document.querySelector('.take_two').innerText;
  document.querySelector('.take__two').textContent = takeTwoC;

  takeOneOne.style.cssText = 'margin:20px; display:inline-block';

  function takeCoun() {
    const takeResult = takeOne + takeTwoC;
    return takeResult;
  }
  document.querySelector('.take_result').textContent = takeCoun;
  document.querySelector('.take_result-anothe').textContent = takeCoun();
  document.querySelector('.take_oneVivod').textContent = takeOne;
  console.log(takeTwoC);

  const textButton = document.querySelector('.text_button');
  const textButtons = document.querySelector('.text_buttons');

  function getData() {
    const takeInput = +document.querySelector('.take_input').value;
    return takeInput;
  }

  function dataTwo() {
    const r = 2 + 4;
    return r;
  }

  textButton.addEventListener('click', () => {
    const takeInputV = +document.querySelector('.take_input').value;
    document.querySelector('.take_result-ones').textContent = takeInputV;

    const result = dataTwo() * takeInputV + getData();
    document.querySelector('.take_result-fun').textContent = result;
  });
  function dataPuto(e) {
    const r = (2 + 5) * e;
    return r;
  }

  textButtons.addEventListener('click', () => {
    const takeInputV = +document.querySelector('.take_input').value;
    document.querySelector('.take_result-ones').textContent = takeInputV;

    const result = dataPuto('.take_inputs') * takeInputV + getData();
    document.querySelector('.take_result-fun').textContent = result;
  });
  /**
   * Нижче ге працювати
   */
});
