function menuMobile(value){
    document.querySelector('.menu-mobile').style.width = `${value}%`;
}
function searchMobile(value){
    document.querySelector('.search-mobile').style.width = `${value}%`;
}
window.addEventListener('scroll', function() {
    var header = document.querySelector('.container-header');
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  
    if (scrollTop > 0) {
      header.classList.add('header-scrolled');
    } else {
      header.classList.remove('header-scrolled');
    }
  });
