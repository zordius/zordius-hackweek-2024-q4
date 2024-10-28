require('../css/index.css');

var step = 0;
var size = 0;
var place = 0;

const setClass = () => {
  document.body.className = `step${step} size${size} place${place}`;
  switch (step) {
    case 1:
    case 2:
      switch (size) {
        case 1:
          return setFeeWeight(160, 0, 1);
        case 2:
          return setFeeWeight(455, 0, 2);
        case 3:
          return setFeeWeight(750, 1900, 25);
      }
    default:
      setFeeWeight(160, 2000);
  }
}

const setFeeWeight = (fee1, fee2, maxWeight) => {
  const fee = document.querySelectorAll('#fee span');
  const range = document.querySelector('#fee i');
  fee[0].style.setProperty('--num1', fee1);
  range.innerHTML = fee2 ? '~' : '';
  fee[1].style.setProperty('--num2', fee2);
  fee[1].className = fee2 ? '' : 'hide';
  document.querySelector('#hint1 span').innerHTML = maxWeight;
}

const initApp = () => {
  document.body.innerHTML = `
  <div id="fee"><span></span><i></i><span></span></div>
  <div id="size">
    <span></span>
    <span></span>
    <span></span>
  </div>
  <div id="place">
    <span></span>
    <span></span>
    <span></span>
    <span></span>
  </div>
  <div id="hint1">重さが<span></span>KG以下であることを確認してください。</div>
  `;
  document.querySelectorAll('#size span').forEach((span, i) => {
    span.addEventListener('click', () => {
      if (step !== 0) {
        size = 0;
        step = 0;
      } else {
        size = i + 1;
        step = 1;
      }
      setClass();
    });
  });
  document.querySelector('#hint1').addEventListener('click', () => {
    step = 2;
    setClass();
  });
  document.querySelectorAll('#place span').forEach((span, i) => {
    span.addEventListener('click', () => {
      if (step !== 2) {
        place = 0;
        step = 2;
      } else {
        place = i + 1;
        step = 3;
      }
      setClass();
    });
  });
  setClass();
}

setTimeout(initApp, 0);