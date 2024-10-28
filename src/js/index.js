require('../css/index.css');

var step = 0;
var size = 0;

const setClass = () => {
  document.body.className = `step${step} size${size}`;
  switch (step) {
    case 1:
      switch (size) {
        case 1:
          return setFee(160);
        case 2:
          return setFee(455);
        case 3:
          return setFee(750, 1900);
      }
    default:
      setFee(160, 2000);
  }
}

const setFee = (fee1, fee2) => {
  const fee = document.querySelectorAll('#fee span');
  const range = document.querySelector('#fee i');
  fee[0].style.setProperty('--num1', fee1);
  range.innerHTML = fee2 ? '~' : '';
  fee[1].style.setProperty('--num2', fee2);
  fee[1].className = fee2 ? '' : 'hide';
}

const initApp = () => {
  document.body.innerHTML = `
  <div id="fee"><span></span><i></i><span></span></div>
  <div id="size">
    <span></span>
    <span></span>
    <span></span>
  </div>
  `;
  document.querySelectorAll('#size span').forEach((span, i) => {
    span.addEventListener('click', () => {
      if (step === 1) {
        size = 0;
        step = 0;
      } else {
        size = i + 1;
        step = 1;
      }
      setClass();
    });
  });
  setClass();
}

setTimeout(initApp, 0);