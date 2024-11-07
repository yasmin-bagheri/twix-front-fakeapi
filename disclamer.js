const disclaimer= async () => {
    let html = "";
    let disclaimerData = await fetch("http://localhost:3004/disclaimer");
    let disclaimerResult = await disclaimerData.json();
    disclaimerResult.forEach((elem) => {
      html += `
        <h6>${elem.title}</h6>
        <p>${elem.paragraph}</p>
        <p>${elem.trademark}</p>
 
      `;
    });
    document.querySelector("#mydynamic12").innerHTML=html
  };
  export default disclaimer;