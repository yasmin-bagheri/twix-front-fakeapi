
const menu = async () => {
  let html = "";
  let data = await fetch("http://localhost:3004/menu1");
  let result = await data.json();
  result.forEach((elem) => {
    html +=`
    <li class=" h-100" ><a class="d-flex w-100 h-100" href="${elem.menulink}">${elem.menutitle}<i class="${elem.iconclass}"></i></a>
      <ul>
    `
    elem.menu2.forEach((item)=>{
      html += `
      <li><a href="${item.link}">${item.title}</a></li>
      `; })

      html+=`
      </ul>
  </li>
      `
  });
  document.querySelector("#mydynamic1").innerHTML=html
};
export default menu;
