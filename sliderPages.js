const sliderpages= async () => {
    let html = "";
    let sliderData = await fetch("http://localhost:3004/sliderpages");
    let sliderResult = await sliderData.json();
    sliderResult.forEach((elem) => {
      html += `
      <div class="swiper-slide"><a href="${elem.imglink}"><img src="${elem.src}" alt="${elem.alt}"></a></div>
      `;
    });
    document.querySelector("#mydynamic8").innerHTML=html
  };
  export default sliderpages;