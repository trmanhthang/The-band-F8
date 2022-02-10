 // Js Đóng/Mở Modal
 const buytickets = document.querySelectorAll('.js-buy-ticket')
 const modal = document.querySelector('.js-modal')
 const modalClose = document.querySelector('.js-close')
 const modalContainer = document.querySelector('.js-modal-container')
 
 function showbyticket () {
     modal.classList.add('open')
 }
 function Closeticket () {
     modal.classList.remove('open')
 }
 
 for (const buyticket of buytickets){
     buyticket.addEventListener('click', showbyticket)
 }

 modalClose.addEventListener('click', Closeticket)
 modal.addEventListener('click', Closeticket)
 modalContainer.addEventListener('click', function (event) {
     event.stopPropagation()
 })
 
 // phần menu mobile
 var header = document.getElementById('header');
 var mobileMenu = document.getElementById('mobile-menu');
 var headerHeight = header.clientHeight;
 
 // Đóng/Mở mobile menu
 mobileMenu.onclick = function() {
     var isClosed = header.clientHeight === headerHeight;
     if (isClosed) {
         header.style.height = 'auto';
     } else {
         header.style.height = null;
     }
 }
 
 // Tự đóng khi chọn menu
 var menuItems = document.querySelectorAll('#nav li a[href*="#"]');
 for (var i = 0; i < menuItems.length; i++) {
     var menuItem = menuItems[i];
     
     menuItem.onclick = function(event) {
         var isParentMenu = this.nextElementSibling && this.nextElementSibling.classList.contains('subnav');
         if (isParentMenu) {
             event.preventDefault();
         } else {
             header.style.height = null;
         }
     }
 }