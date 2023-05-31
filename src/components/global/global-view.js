/* eslint linebreak-style: ["error", "windows"] */

import makeElementNode from '../shared';

function makeEndGameString(params) {
  if (!params) return 'Game over. Try again';
  return `Hooray! You found all mines in ${params.time} seconds and ${params.moves} moves!`;
}

export default function renderEndGameMsg(params) {
  const messageNode = makeElementNode('div', 'end-game-msg');
  messageNode.textContent = makeEndGameString(params);
  document.body.append(messageNode);

  const removeMessage = () => {
    messageNode.remove();
    document.removeEventListener('click', removeMessage);
  };

  setTimeout(() => {
    document.addEventListener('click', removeMessage);
  }, 1000);
}
