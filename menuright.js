const menuRight = async () => {
    let html = "";
    let menuRightData = await fetch("http://localhost:3004/menuRight");
    let menuRightResult = await menuRightData.json();
    menuRightResult.forEach((elem) => {
        html += ` <li class="${elem.liClass}" ><a class="${elem.aClass}" href="${elem.link}"><i class="${elem.iconClass}"></i>${elem.title}</a></li>
        <div class="${elem.divClass}"></div>`
  
    });
    document.querySelector("#mydynamic3").innerHTML=html
  };
  export default menuRight;