const links= async () => {
    let html = "";
    let linksData = await fetch("http://localhost:3004/links");
    let linksResult = await linksData.json();
    linksResult.forEach((elem) => {
      html += `
      <a href="${elem.link}" class="t">${elem.text}</a>
      `;
    });
    document.querySelector("#mydynamic9").innerHTML=html
  };
  export default links;