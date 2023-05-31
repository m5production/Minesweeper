/* eslint linebreak-style: ["error", "windows"] */

export default function makeElementNode(type, ...classNames) {
  const elem = document.createElement(type);
  elem.classList.add(...classNames);
  return elem;
}

export const FigColor = ['blue', 'purple', 'red', 'orange', 'green', 'yellow', 'white', 'violet'];
