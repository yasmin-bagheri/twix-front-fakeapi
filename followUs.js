const followUs= async () => {
    let html = "";
    let followUsData = await fetch("http://localhost:3004/followUs");
    let followUsResult = await followUsData.json();
    followUsResult.forEach((elem) => {
      html += `
      <span class="t d-flex mb-2">${elem.title}</span>

      `;
    });
    document.querySelector("#mydynamic-followUs").innerHTML=html
  };
  export default followUs;