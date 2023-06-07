function menuMobile(value){
    document.querySelector('.menu-mobile').style.width = `${value}%`;
}
function searchMobile(value){
    document.querySelector('.search-mobile').style.width = `${value}%`;
}
window.addEventListener('scroll', function() {
    let header = document.querySelector('.container-header');
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  
    scrollTop > 0 ? header.classList.add('header-scrolled') : header.classList.remove('header-scrolled');
});
