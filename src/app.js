import { getElement, addEvent, showHideMessage, createElement, resetInput, keyPress } from './helpers';

const listArray = [];
const ENTER = 13;

const btnEl = getElement('.btn-add');
const inputEl = getElement('.input-text');

const keypressIsEnter = event => keyPress(event) === ENTER ? addItem() : null;

const listItem = list => listArray.map(item => {
  let element = createElement("li");
  element.innerHTML = item;
  list.appendChild(element);
});

const showList = () => {
  const list = getElement('.list');
  list.innerHTML = ''; 
  listItem(list);
};

export const addItem = () => {
  const invalidInput = inputEl.value === '';
  
  if(invalidInput) {
    return showHideMessage('.message', 'block');
  }
  
  showHideMessage('.message', 'none');
  listArray.push(inputEl.value);
  showList(); 
  resetInput(inputEl);
};

addEvent(inputEl, 'keypress', keypressIsEnter);
addEvent(btnEl, 'click', addItem);
