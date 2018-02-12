let frames = document.querySelectorAll('.box');
const svgns = "http://www.w3.org/2000/svg";

const createSVGs = () => {
  for(let i=0; i< frames.length; i++) {

    let widthV = frames[i].offsetWidth;
    let heightV = frames[i].offsetHeight;
    let circumference = widthV + widthV + heightV + heightV;

    let fig = document.createElementNS(svgns, 'svg');
    let rh = document.createElementNS(svgns, 'rect');

    let stringStyle = 'stroke-dasharray:' + circumference+'; stroke-dashoffset:' + circumference+ ';';
    let stringHover = 'stroke-dasharray:' + circumference+'; stroke-dashoffset:' +0+ ';';

    rh.setAttribute('width', widthV);
    rh.setAttribute('height', heightV);
    rh.setAttribute('class', 'box__box');
    rh.setAttribute('style', stringStyle);
    rh.addEventListener('mouseover', () => {
        rh.setAttribute('style', stringHover);
    });
    rh.addEventListener('mouseout', () => {
        rh.setAttribute('style', stringStyle);
    });

    fig.setAttribute('class', 'box__frame');
    fig.setAttribute('width', widthV);
    fig.setAttribute('height', heightV);

    fig.appendChild(rh);

    frames[i].appendChild(fig);
  }
}
const exterminateSVGs = () => {
  let allSVGs = document.querySelectorAll('.box__frame');
  while(allSVGs[0]) {
    allSVGs[0].parentNode.removeChild(allSVGs[0]);
    allSVGs = document.querySelectorAll('.box_frame');
  }
}

createSVGs();

window.addEventListener('resize', () => {
  exterminateSVGs();
  createSVGs();
})

//
// <!-- <svg width="100%" height="100%" version="1.1">
//  <rect x="10" y="10" width="200" height="200" stroke="black" fill="transparent" stroke-width="5"/>
// </sVg>
//
// <svg width="300" height="200" class="box__frame">
//   <rect width="300" height="200" class="box__box">
// </svg>
//
//
// stroke-dasharray: 1000px;
// stroke-dashoffset: 1000px;
// -->
