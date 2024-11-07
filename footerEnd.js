const footerEnd= async () => {
    let html = "";
    let footerEndData = await fetch("http://localhost:3004/footerEnd");
    let footerEndResult = await footerEndData.json();
    footerEndResult.forEach((elem) => {
      html += `

      <h2>${elem.title}</h2>
      <div class="pos">
          <a href="${elem.link}" class="btn d-flex justify-content-center align-content-center">
              <span class="t d-flex justify-content-center align-content-center" >${elem.btntitle}</span></a>
      </div>
 
      `;
    });
    document.querySelector("#mydynamic13").innerHTML=html
  };
  export default footerEnd;