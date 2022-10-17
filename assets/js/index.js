// const $ = document.querySelector.bind(document);
// const $$ = document.querySelectorAll.bind(document);

// const imgProducts = [
//      'https://kmmfilm.vn/wp-content/uploads/2020/07/T-424x225.png',
//      'https://kmmfilm.vn/wp-content/uploads/2020/07/T-424x225.png',
//      'https://kmmfilm.vn/wp-content/uploads/2020/07/T-424x225.png'
// ]

// runText()
// handleProducts()
// function runText() {
//      let textRun = $('#text-run p')
//      console.log(textRun);
// }
// function handleProducts() {
//      let div = $('#products .row')
//      // console.log(img);

//    let htmls=imgProducts.map((item) => {
//       return    `<div class="col ">
//                 <div class="project">
//                     <img src="${item}" alt="">
//                 </div>
//             </div>`
//      }).join('')
//      console.log(htmls);
//      div.innerHTML = htmls

// }

const duAn = document.querySelector("#du-an");
const congNghiep = document.querySelector("#cong-nghiep");
const dieuHoa = document.querySelector("#dieu-hoa");

const rowDuAn = document.querySelector(".row-du-an");
const rowCongNghiep = document.querySelector(".row-cong-nghiep");
const rowDieuHoa = document.querySelector(".row-dieu-hoa");

function handleTitle(type){
     if(type === "duAn"){
          duAn.style.color = "#ecec82";
          dieuHoa.style.color = "#243f99";
          congNghiep.style.color = "#243f99";

          rowDuAn.style.display="flex";
          rowDieuHoa.style.display="none";
          rowCongNghiep.style.display="none";

     }else  if(type === "congNghiep"){
          duAn.style.color = "#243f99";
          dieuHoa.style.color = "#243f99";
          congNghiep.style.color = "#ecec82";

          rowDuAn.style.display="none";
          rowDieuHoa.style.display="none";
          rowCongNghiep.style.display="block";
     }else  if(type === "dieuHoa"){
          duAn.style.color = "#243f99";
          dieuHoa.style.color = "#ecec82";
          congNghiep.style.color = "#243f99";

          rowDuAn.style.display="none";
          rowDieuHoa.style.display="block";
          rowCongNghiep.style.display="none";

     }



}
