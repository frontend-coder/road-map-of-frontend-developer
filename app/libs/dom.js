document.addEventListener('DOMContentLoaded', () => {
  'use strict ';

  console.log('В цьому файлі відбуваеться работа с DOM');

  const listTamk = document.querySelectorAll('.list_tamk li');

  listTamk.forEach((item) => {
    console.log(item);
  });
  /** Ищет ближайшего предка указанного  в closest */

  const listTamkUnder = document.querySelector('.list_tamk-under');
  const parentLTU = listTamkUnder.closest('.list_tamk');
  const parentLTUP = listTamkUnder.closest('.list_tamk-over');
  console.log(parentLTU);
  console.log(parentLTUP);
  // parentLTUP.style.cssText = 'color:#f0f0f9; margin:10px 0;';
  /** проверка matches
   *
   * нічого не шукає, тільки перевіряє умову и віддає true ore false
   *
   *
   */

  const elems = document.querySelectorAll('.list_tamk-under');
  /*eslint-disable */
  for (let elem of elems) {
    /* eslint-enable */
    if (elem.matches('[class$="lesson__item-list_red"]')) {
      console.log('1.Червоний');
    } else if (elem.matches('[class$="lesson__item-list_blue"]')) {
      console.log('2.Синій');
    } else {
      console.log('3.Якщо нічого не отримали');
    }
  }
  console.log(elems);
  const blockListDecr = document.querySelector('.block_list-decr');
  const bLDElement = blockListDecr.nextElementSibling;
  const bLElement = blockListDecr.nextSibling;
  console.log(bLDElement);
  console.log(' ');
  console.log(bLElement.textContent);

  // зміна контенту

  const innerHtml = document.querySelector('.inner__html').innerHTML;
  document.querySelector('.inner__html--out').innerHTML = innerHtml;

  // const innerHtmlNew = document.querySelector('.inner__html').innerHTML;
  // alert(innerHtmlNew.data);
  // innerHtml.data = 'ghbdtf';
  // 1 document.querySelector('.inner__html').innerHTML = innerHtml;

  let outerHtml = document.querySelector('.outer_html').outerHTML;
  document.querySelector('.outer_html-out').outerHTML = outerHtml;
  outerHtml += `<p>але змінюю його</p>`;
  document.querySelector('.outer_html-out1').outerHTML = outerHtml;
  const getBlockDeskr = document.querySelector('.block_deskr1');
  const getElHTML = getBlockDeskr.nextSibling;
  document.querySelector('.outer_html-out2').innerContent = getElHTML;
  console.log(getElHTML);
  console.log(getElHTML.data);
  /* створити та вставити новий елемент на строрінку в код */
  const doChange = document.querySelector('.do_change');
  const doChangeNewElement = document.createElement('div');
  doChangeNewElement.innerHTML = `Це текст для нового вузла!!`;
  doChange.before(doChangeNewElement);
  doChange.after(doChangeNewElement);

  const doPrependElement = document.createElement('span');
  doPrependElement.innerHTML = `Вставляю в батьківський контейнер спереду`;
  doChange.prepend(doPrependElement);

  const doAppendElement = document.createElement('span');
  doAppendElement.textContent = 'Вствляю в батьківський контейнер позаду';
  doChange.append(doAppendElement);

  const doInsertajacentHtml = document.querySelector('.doInsertajacent__html');

  doInsertajacentHtml.style.cssText = 'margin:20px 30px; color:blue;';
  /**
   * beforebegin - вставити контент перед doInsertajacentHtml
   * afterbegin - вставити контент на початок doInsertajacentHtml
   * beforeend вставить контент в кінець doInsertajacentHtml
   * afterend вставити контент після doInsertajacentHtml
   *
   */
  const moeDisishen = 'мого';
  const sladElement = document.createElement('span');
  sladElement.innerHTML = `Утворюю єлемент и вставляю новий контего завдяки  ${moeDisishen} рішення`;
  doInsertajacentHtml.insertAdjacentHTML('beforeend', ` Дуже складне рішення додавання ${moeDisishen} рішення `);
  doInsertajacentHtml.insertAdjacentHTML('afterbegin', ` Дуже складне рішення додавання ${moeDisishen} рішення `);

  doInsertajacentHtml.insertAdjacentElement('afterbegin', sladElement);

  doInsertajacentHtml.insertAdjacentText('afterend', ' !Мій конкретний текст!  ');
  console.log('Конец документа который посвящен DOM');
  /** клонувння  */
  const clonenodeStart = document.querySelector('.clonenode_start');
  const cloneNodeFinish = clonenodeStart.cloneNode();
  const kudaBrosat = document.querySelector('.kuda_brosat');

  const cloneNodeFinishTwo = clonenodeStart.cloneNode(true);
  const kudaBrosatTwo = document.querySelector('.kuda_brosat2');
  kudaBrosat.append(cloneNodeFinish);
  kudaBrosatTwo.append(cloneNodeFinishTwo);
  const obgectDell = document.querySelector('.obgect_dell');
  obgectDell.remove();
  const aydi = document.querySelector('#aydi').className;
  const aydiDouble = document.querySelector('#aydi-double');
  document.querySelector('.nichego-sebe').innerHTML = aydi;
  aydiDouble.className = 'nugy';

  const rabotaAdd = document.querySelector('.rabota_add');
  rabotaAdd.classList.add('acive_perfetto');
  const rabotaRemove = document.querySelector('.rabota_remove');
  rabotaRemove.classList.remove('active');
  const rabotaToggle = document.querySelector('.rabota_toggle');
  rabotaToggle.classList.toggle('active-toggle');
  const workToggle = document.querySelector('.work_toggle');
  workToggle.classList.toggle('activated');
  const containsClass = document.querySelector('.contains_class');
  document.querySelector('.cont').innerHTML = containsClass.classList.contains('contains_class');
  document.querySelector('.cont1').innerHTML = containsClass.classList.contains('get_contains');
  document.querySelector('.cont2').innerHTML = containsClass.classList.contains('contains');

  const pereborList = document.querySelectorAll('.perebor_list');
  console.log(pereborList);
  /*eslint-disable */
  for (let pereborItem of pereborList) {
    /* eslint-enable */
    console.log(pereborItem.classList);
    if (pereborItem.classList.contains('glue')) {
      console.log('есть контакт');
    } else if (!pereborItem.classList.contains('glue')) {
      console.log('Ничего нет');
    }
  }

  const kljk = getComputedStyle(document.querySelector('.contains_class'));
  document.querySelector('.lkl').innerHTML = kljk.padding;

  /**
   * input_name.hasAtribute('name')
   * input_name.getAtribute('name')
   * input_name.setAtribute('name', 'value')
   * input_name.removeAtribute('name')
   *
   */
  const input_name = document.querySelector('.input_name');
  if (input_name.hasAttribute('nameе')) {
    document.querySelector('.you-name').innerHTML = 'атрибут существует';
  } else {
    document.querySelector('.you-name').innerHTML = 'атрибута нет уже';
  }
});
