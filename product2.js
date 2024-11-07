const product2= async () => {
    let html = "";
    let product2Data = await fetch("http://localhost:3004/product2");
    let product2Result = await product2Data.json();
    product2Result.forEach((elem) => {
      html += `
      <div class="box-one col-lg-8 col-12  d-flex flex-column justify-content-center align-items-center h-lg-100">
      <h6>${elem.titlesmall}</h6>
      <a href="${elem.linktitlelarge}" class="text d-flex justify-content-center align-content-center text-center">${elem.titlelarge}</a>
      <div class="inside mt-lg-5 mt-2">
          <div class="pos w-100 h-100">
              <a href="${elem.linkbtn1}" class="btn"><span class="t  d-flex justify-content-center align-content-center">${elem.titlebtn1}</span></a></div>
      </div>
  </div>
  <div class="box-two h-75 col-lg-3 col-xxl-2 col-5  mt-lg-0 d-flex flex-column justify-content-start align-items-center">
      <a href="#" class="w-100 d-flex flex-column justify-content-start align-items-center " >
          <div class="up h-100 d-flex flex-column justify-content-center align-items-center gap-3">
              <span class="small text-center">${elem.text1}</span>
              <img src="${elem.src}" alt="${elem.alt}" class="col-8">
              <span class="big text-center">${elem.text2}</span>
          </div>
          <div class="down h-25 w-100 d-flex justify-content-center align-content-center gap-2 ">
              <div class="pos d-flex justify-content-center "><a href="${elem.linkbtn2}" class="btn w-100 h-100 d-flex"><span class="t">${elem.titlebtn2}</span></a></div>
              <div class="pos d-flex justify-content-center "><a href="${elem.linkbtn3}" class="btn w-100 h-100 d-flex"><span class="t">${elem.titlebtn3}</span></a></div>
          </div>
      </a>
  </div>

      `;
    });
    document.querySelector("#mydynamic7").innerHTML=html
  };
  export default product2;