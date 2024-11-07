const products= async () => {
    let html = "";
    let productsData = await fetch("http://localhost:3004/products");
    let productsResult = await productsData.json();
    productsResult.forEach((elem) => {
      html += `
      <div class="box col-md-3 col-10 mb-5 mb-md-0 d-flex flex-column justify-content-center align-items-center " >
      <div class="smallbox col-12 d-flex w-100  flex-column justify-content-start align-items-center">
      <a class="pic d-flex w-100 " href="${elem.linkimg}"><img class="col-12 w-100 h-100" src="${elem.src}" alt="${elem.alt}"></a>
      <a class="mid-text d-flex mt-5" href="${elem.linktitle}">${elem.title}</a>
      <div class="pos"><a class="btn d-flex mt-3" href="${elem.linkbtn}"><span>${elem.titlebtn}</span></a></div>
  </div>
  </div>
      `;
    });
    document.querySelector("#mydynamic6").innerHTML=html
  };
  export default products;