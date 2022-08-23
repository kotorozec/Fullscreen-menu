const navigation = document.querySelector('.navigation-full-page');
document.querySelector('.toggle').onclick = function () {
this.classList.toggle('active');
navigation.classList.toggle('active');
}