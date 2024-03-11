let toggleButton = document.getElementById('toggleburger');
let navigation = document.getElementById('nav');
let header = document.getElementById('header');

toggleButton.addEventListener('click', function(){
    navigation.classList.toggle('active');
})

toggleButton.addEventListener('click', function(){
    header.classList.toggle('head');
})



document.getElementById('buttonclick').addEventListener('click', function()
{
    alert('Thank you for getting in touch!')
})
const burgerBar = document.getElementById('toggleburger');

burgerBar.addEventListener('click', () => {
  burgerBar.classList.toggle('open');
});