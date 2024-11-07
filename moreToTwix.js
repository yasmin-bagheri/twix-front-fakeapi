const moreToTwix= async () => {
    let html = "";
    let moreToTwixData = await fetch("http://localhost:3004/moreToTwix");
    let moreToTwixResult = await moreToTwixData.json();
    moreToTwixResult.forEach((elem) => {
      html += `<img class="${elem.class}"  src=${elem.src} alt=${elem.alt}>`;
    });
    document.querySelector("#mydynamic4").innerHTML=html
  };
  export default moreToTwix;