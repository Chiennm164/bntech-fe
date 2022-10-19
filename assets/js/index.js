const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

let elNav = $('#navbar')
let elMenu = $('.menu-mobile')

elMenu.onclick = () => {
     console.log('a');
   let a=  elNav.classList.toggle('show')

     if (a) {
          elMenu.innerHTML = `
        <span>
        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
         <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
       </svg>
     </span>
           `
     } else {
          elMenu.innerHTML = `
          <span>
          <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
               <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
             </svg>
     </span>
          `     }
}

const duAn = document.querySelector("#du-an");
const congNghiep = document.querySelector("#cong-nghiep");
const dieuHoa = document.querySelector("#dieu-hoa");

const rowDuAn = document.querySelector(".row-du-an");
const rowCongNghiep = document.querySelector(".row-cong-nghiep");
const rowDieuHoa = document.querySelector(".row-dieu-hoa");

function handleTitle(type) {
     if (type === "duAn") {
          duAn.style.color = "#ecec82";
          dieuHoa.style.color = "#243f99";
          congNghiep.style.color = "#243f99";

          rowDuAn.style.display = "flex";
          rowDieuHoa.style.display = "none";
          rowCongNghiep.style.display = "none";

     } else if (type === "congNghiep") {
          duAn.style.color = "#243f99";
          dieuHoa.style.color = "#243f99";
          congNghiep.style.color = "#ecec82";

          rowDuAn.style.display = "none";
          rowDieuHoa.style.display = "none";
          rowCongNghiep.style.display = "block";
     } else if (type === "dieuHoa") {
          duAn.style.color = "#243f99";
          dieuHoa.style.color = "#ecec82";
          congNghiep.style.color = "#243f99";

          rowDuAn.style.display = "none";
          rowDieuHoa.style.display = "block";
          rowCongNghiep.style.display = "none";

     }



}
