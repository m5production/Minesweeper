/* eslint-disable no-param-reassign */
/* eslint linebreak-style: ["error", "windows"] */

export default function handleMinesNumberInput(numberOfMinesRange) {
  const display = document.getElementById('display-number-of-mines');

  numberOfMinesRange.oninput = () => {
    display.textContent = numberOfMinesRange.value;
  };
}
