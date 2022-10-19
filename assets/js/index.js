const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);


// list các dự án
let projects = [
     {
          id: 1,
          title: 'BIG C Tân Hiệp 1',
          images: [
               'http://hungtri.com/upload/images/2.3-so-do-to-chuc-financial-partners.jpg',
               'http://hungtri.com/upload/images/2019-04-origin-55c2bac2ff413f021072892df4d40873-500x0.jpg',
               'http://hungtri.com/upload/images/unnamed-6-.jpg ',
               'http://hungtri.com/upload/images/anh1-nhamaytanifood-zytl-1-.jpg'
          ],
          info: {
               client: 'BigC',
               time: '08-2020',
               address: 'Tân Hiệp - TPHCM',
               system: 'Mitsubitshi',
               wattage: '3kw-1.100kw',
          },
          detail: {
               detail1: ['Nhà máy đông lạnh', 'chi tiết nhà máy đông lạnh'],
               detail2: ['Cấu tạo - Nguyên Lý kho lạnh', 'Cấu tạo - Nguyên Lý kho lạnh'],
               detail3: ['Đặc kiểm kỹ thuật', 'chi tiết Đặc kiểm kỹ thuật'],
          },
          des: 'cong nghiep lanh',
          top: true,
          style: 1,
     },
     {
          id: 2,
          title: 'BIG C Tân Hiệp 2',
          images: [
               'http://hungtri.com/upload/images/2.3-so-do-to-chuc-financial-partners.jpg',
               'http://hungtri.com/upload/images/2019-04-origin-55c2bac2ff413f021072892df4d40873-500x0.jpg',
               'http://hungtri.com/upload/images/unnamed-6-.jpg ',
               'http://hungtri.com/upload/images/anh1-nhamaytanifood-zytl-1-.jpg'
          ],
          info: {
               client: 'BigC',
               time: '08-2020',
               address: 'Tân Hiệp - TPHCM',
               system: 'Mitsubitshi',
               wattage: '3kw-1.100kw',
          },
          detail: {
               detail1: ['Nhà máy đông lạnh', 'chi tiết nhà máy đông lạnh'],
               detail2: ['Cấu tạo - Nguyên Lý kho lạnh', 'Cấu tạo - Nguyên Lý kho lạnh'],
               detail3: ['Đặc kiểm kỹ thuật', 'chi tiết Đặc kiểm kỹ thuật'],
          },
          des: 'dieu hoa',
          top: true,
          style: 2,
     },
     {
          id: 3,
          title: 'BIG C Tân Hiệp 3',
          images: [
               'http://hungtri.com/upload/images/2.3-so-do-to-chuc-financial-partners.jpg',
               'http://hungtri.com/upload/images/2019-04-origin-55c2bac2ff413f021072892df4d40873-500x0.jpg',
               'http://hungtri.com/upload/images/unnamed-6-.jpg ',
               'http://hungtri.com/upload/images/anh1-nhamaytanifood-zytl-1-.jpg'
          ],
          info: {
               client: 'BigC',
               time: '08-2020',
               address: 'Tân Hiệp - TPHCM',
               system: 'Mitsubitshi',
               wattage: '3kw-1.100kw',
          },
          detail: {
               detail1: ['Nhà máy đông lạnh', 'chi tiết nhà máy đông lạnh'],
               detail2: ['Cấu tạo - Nguyên Lý kho lạnh', 'Cấu tạo - Nguyên Lý kho lạnh'],
               detail3: ['Đặc kiểm kỹ thuật', 'chi tiết Đặc kiểm kỹ thuật'],
          },
          des: 'cong nghiep lanh',
          top: true,
          style: 1,
     },
     {
          id: 4,
          title: 'BIG C Tân Hiệp 4',
          images: [
               'http://hungtri.com/upload/images/2.3-so-do-to-chuc-financial-partners.jpg',
               'http://hungtri.com/upload/images/2019-04-origin-55c2bac2ff413f021072892df4d40873-500x0.jpg',
               'http://hungtri.com/upload/images/unnamed-6-.jpg ',
               'http://hungtri.com/upload/images/anh1-nhamaytanifood-zytl-1-.jpg'
          ],
          info: {
               client: 'BigC',
               time: '08-2020',
               address: 'Tân Hiệp - TPHCM',
               system: 'Mitsubitshi',
               wattage: '3kw-1.100kw',
          },
          detail: {
               detail1: ['Nhà máy đông lạnh', 'chi tiết nhà máy đông lạnh'],
               detail2: ['Cấu tạo - Nguyên Lý kho lạnh', 'Cấu tạo - Nguyên Lý kho lạnh'],
               detail3: ['Đặc kiểm kỹ thuật', 'chi tiết Đặc kiểm kỹ thuật'],
          },
          des: 'dieu hoa',
          top: true,
          style: 2,
     },
     {
          id: 5,
          title: 'BIG C Tân Hiệp 5',
          images: [
               'http://hungtri.com/upload/images/2.3-so-do-to-chuc-financial-partners.jpg',
               'http://hungtri.com/upload/images/2019-04-origin-55c2bac2ff413f021072892df4d40873-500x0.jpg',
               'http://hungtri.com/upload/images/unnamed-6-.jpg ',
               'http://hungtri.com/upload/images/anh1-nhamaytanifood-zytl-1-.jpg'
          ],
          info: {
               client: 'BigC',
               time: '08-2020',
               address: 'Tân Hiệp - TPHCM',
               system: 'Mitsubitshi',
               wattage: '3kw-1.100kw',
          },
          detail: {
               detail1: ['Nhà máy đông lạnh', 'chi tiết nhà máy đông lạnh'],
               detail2: ['Cấu tạo - Nguyên Lý kho lạnh', 'Cấu tạo - Nguyên Lý kho lạnh'],
               detail3: ['Đặc kiểm kỹ thuật', 'chi tiết Đặc kiểm kỹ thuật'],
          },
          des: 'dieu hoa',
          top: false,
          style: 2,
     },
     {
          id: 6,
          title: 'BIG C Tân Hiệp 6',
          images: [
               'http://hungtri.com/upload/images/2.3-so-do-to-chuc-financial-partners.jpg',
               'http://hungtri.com/upload/images/2019-04-origin-55c2bac2ff413f021072892df4d40873-500x0.jpg',
               'http://hungtri.com/upload/images/unnamed-6-.jpg ',
               'http://hungtri.com/upload/images/anh1-nhamaytanifood-zytl-1-.jpg'
          ],
          info: {
               client: 'BigC',
               time: '08-2020',
               address: 'Tân Hiệp - TPHCM',
               system: 'Mitsubitshi',
               wattage: '3kw-1.100kw',
          },
          detail: {
               detail1: ['Nhà máy đông lạnh', 'chi tiết nhà máy đông lạnh'],
               detail2: ['Cấu tạo - Nguyên Lý kho lạnh', 'Cấu tạo - Nguyên Lý kho lạnh'],
               detail3: ['Đặc kiểm kỹ thuật', 'chi tiết Đặc kiểm kỹ thuật'],
          },
          des: 'cong nghiep lanh',
          top: false,
          style: 1,
     },
     {
          id: 7,
          title: 'BIG C Tân Hiệp 7',
          images: [
               'http://hungtri.com/upload/images/2.3-so-do-to-chuc-financial-partners.jpg',
               'http://hungtri.com/upload/images/2019-04-origin-55c2bac2ff413f021072892df4d40873-500x0.jpg',
               'http://hungtri.com/upload/images/unnamed-6-.jpg ',
               'http://hungtri.com/upload/images/anh1-nhamaytanifood-zytl-1-.jpg'
          ],
          info: {
               client: 'BigC',
               time: '08-2020',
               address: 'Tân Hiệp - TPHCM',
               system: 'Mitsubitshi',
               wattage: '3kw-1.100kw',
          },
          detail: {
               detail1: ['Nhà máy đông lạnh', 'chi tiết nhà máy đông lạnh'],
               detail2: ['Cấu tạo - Nguyên Lý kho lạnh', 'Cấu tạo - Nguyên Lý kho lạnh'],
               detail3: ['Đặc kiểm kỹ thuật', 'chi tiết Đặc kiểm kỹ thuật'],
          },
          des: 'cong nghiep lanh',
          top: false,
          style: 1,
     },
     {
          id: 8,
          title: 'BIG C Tân Hiệp 8',
          images: [
               'http://hungtri.com/upload/images/2.3-so-do-to-chuc-financial-partners.jpg',
               'http://hungtri.com/upload/images/2019-04-origin-55c2bac2ff413f021072892df4d40873-500x0.jpg',
               'http://hungtri.com/upload/images/unnamed-6-.jpg ',
               'http://hungtri.com/upload/images/anh1-nhamaytanifood-zytl-1-.jpg'
          ],
          info: {
               client: 'BigC',
               time: '08-2020',
               address: 'Tân Hiệp - TPHCM',
               system: 'Mitsubitshi',
               wattage: '3kw-1.100kw',
          },
          detail: {
               detail1: ['Nhà máy đông lạnh', 'chi tiết nhà máy đông lạnh'],
               detail2: ['Cấu tạo - Nguyên Lý kho lạnh', 'Cấu tạo - Nguyên Lý kho lạnh'],
               detail3: ['Đặc kiểm kỹ thuật', 'chi tiết Đặc kiểm kỹ thuật'],
          },
          des: 'dieu hoa',
          top: false,
          style: 2,
     },
     {
          id: 9,
          title: 'BIG C Tân Hiệp 9',
          images: [
               'http://hungtri.com/upload/images/2.3-so-do-to-chuc-financial-partners.jpg',
               'http://hungtri.com/upload/images/2019-04-origin-55c2bac2ff413f021072892df4d40873-500x0.jpg',
               'http://hungtri.com/upload/images/unnamed-6-.jpg ',
               'http://hungtri.com/upload/images/anh1-nhamaytanifood-zytl-1-.jpg'
          ],
          info: {
               client: 'BigC',
               time: '08-2020',
               address: 'Tân Hiệp - TPHCM',
               system: 'Mitsubitshi',
               wattage: '3kw-1.100kw',
          },
          detail: {
               detail1: ['Nhà máy đông lạnh', 'chi tiết nhà máy đông lạnh'],
               detail2: ['Cấu tạo - Nguyên Lý kho lạnh', 'Cấu tạo - Nguyên Lý kho lạnh'],
               detail3: ['Đặc kiểm kỹ thuật', 'chi tiết Đặc kiểm kỹ thuật'],
          },
          des: 'cong nghiep lanh',
          top: false,
          style: 1,
     }

]
handlerMenuMobile();
handlerRenderProjects(projects);
// xử lý nút menu bp mobile
function handlerMenuMobile() {
     let elNav = $('#navbar')
     let elMenu = $('.menu-mobile')

     elMenu.onclick = () => {
          console.log('a');
          let a = elNav.classList.toggle('show')

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
}

function handlerRenderProjects(projects) {
     let topProjects = [];
     let elProject = $('#projects .loop');
     let elTitle = $$('#projects .title-main')
     if (elTitle.length > 0) {
          choicePr()

          elTitle.forEach((et) => {
               et.addEventListener('click', () => {
                    let a = $('#projects .activeProject');
                    a.classList.remove('activeProject');
                    et.classList.toggle('activeProject');
                    choicePr()
               })
          })
     } else {
          projects.forEach((pr) => {
               if (pr.top) {
                    topProjects.push(pr);
                    render(topProjects)

               }
          });
          handlerBtnDetailProject()

     }
     function choicePr() {
          let active = $('#projects .activeProject');
          if (active.id == 1) {
               topProjects = projects.filter((pr) => pr.style == 1);
          } else if (active.id == 2) {
               topProjects = projects.filter((pr) => pr.style == 2);
          } else {
               topProjects = projects
          }
          render(topProjects)
          handlerBtnDetailProject()

     }
     function render(topProjects) {
          let htmls = topProjects.map((project) => {
               let img = project.images[3]
               return ` <div class="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12  project">
     <img src="${img}" alt="">
     <div class="project-title">${project.title}</div>
     <div class="project-des"> ${project.des} </div>
     <a id="${project.id}" class="project-btn">Chi tiết
          <span><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25"
                    fill="currentColor" class="bi bi-arrow-right-short"
                    viewBox="0 0 16 16">
                    <path fill-rule="evenodd"
                         d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
               </svg></span>
     </a>

</div>`
          }).join('')
          elProject.innerHTML = htmls;
     }

}
function handlerBtnDetailProject() {
     let listBtnDetail = $$('.project-btn');
     listBtnDetail.forEach((btn) => {
          btn.addEventListener('click', () => {
               handlerRenderDetailProject(btn.id)
          })
     })
}
function handlerRenderDetailProject(id) {
     if (id) {
          let project = projects.find((pr) => pr.id == id)
          if (project) {
               console.log(project);

               $('#detailProject .title p').innerHTML = project.title;
               // __________________________________________
               $('#detailProject .img-group').innerHTML = project.images.map((img) => {
                    return ` <img class="col-sm-6 pb-5"
                    src="${img}"
                    class="d-block w-100 " alt="...">`
               }).join('');
               // __________________________________________
               $('#detailProject .info').innerHTML = `
               <div class="title-main title-xl p-0 ">Thông tin dự án</div>
               <p>Khách hàng : <span>${project.info.client}</span> </p>
               <p>Thời gian : <span> ${project.info.time}</span> </p>
               <p>Địa điểm : <span>${project.info.address}</span> </p>
               <p>Hệ thống : <span>${project.info.system}</span> </p>
               <p>Công suất : <span> ${project.info.wattage}</span> </p>
               <div class="des-main"> BKTECH cung cấp các dịch vụ : Thiết kế , thi công , lắp đặt bảo trì
                    với chuyên môn , kỹ
                    thuật cao chuyên về kho lạnh .</div>
               `               // __________________________________________


          }
     }
}
