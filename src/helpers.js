export const getElement = selector => document.querySelector(selector);
export const createElement = element => document.createElement(element);

export const addEvent = (element, listener, action) => element.addEventListener(listener,  event =>  action(event));

export const showHideMessage = (selector, style) => getElement(selector).style.display = style;

export const resetInput = element => element.value = '';

export const keyPress = event =>  event.keyCode || event.which;