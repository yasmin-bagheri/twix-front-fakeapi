const socialIcons= async () => {
    let html = "";
    let socialIconsData = await fetch("http://localhost:3004/socialicons");
    let socialIconsResult = await socialIconsData.json();
    socialIconsResult.forEach((elem) => {
      html += `
      <a href="${elem.link}"><i class="${elem.iconclass}"></i></a>
      `;
    });
    document.querySelector("#mydynamic10").innerHTML=html
  };
  export default socialIcons;