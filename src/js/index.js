require('../css/index.css');


const initApp = () => {
  document.body.innerHTML = `
  <div id="fee"><span>1000</span>~<span>2000</span></div>
  `;

  document.body.classList.remove('loading');
}

setTimeout(initApp, 0);