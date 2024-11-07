const footerLinks= async () => {
    let html = "";
    let footerLinksData = await fetch("http://localhost:3004/footerLinks");
    let footerLinksResult = await footerLinksData.json();
    footerLinksResult.forEach((elem) => {
      html += `
      <div class="box h-100 d-flex flex-column gap-2 flex-grow-1" >
      <a href="${elem.link1}">${elem.text1}</a>
      <a href="${elem.link2}">${elem.text2}</a>
      <a href="${elem.link3}">${elem.text3}</a>
      <a href="${elem.link4}">${elem.text4}</a>
  </div>
      `;
    });
    document.querySelector("#mydynamic11").innerHTML=html
  };
  export default footerLinks;