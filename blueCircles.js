const blueCircles= async () => {
    let html = "";
    let blueCirclesData = await fetch("http://localhost:3004/blueCircles");
    let blueCirclesResult = await blueCirclesData.json();
    blueCirclesResult.forEach((elem) => {
      html += `
      <div class="left  h-50 h-md-100 col-md-6 col-12 d-flex justify-content-center align-content-center p-3 ">
      <img  class="col-10 align-self-center" src="${elem.src}" alt="${elem.alt}"></div>
  <div class="right col-md-6 col-12 h-auto h-md-100 d-flex flex-column  justify-content-center align-items-start">
      <span class="col-12 " >${elem.title1}</span>
      <a  class="display-1 p-1 col-12 d-flex  " href="${elem.link1}">${elem.title2}</a>
      <a class="btn d-flex  "  href="${elem.linkbtn}"><span>${elem.titlebtn}</span></a></div>
      `;
    });
    document.querySelector("#mydynamic5").innerHTML=html
  };
  export default blueCircles;