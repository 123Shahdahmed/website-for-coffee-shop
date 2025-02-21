let search=document.getElementById('search-btn');
let shopping=document.getElementById('cart-btn');
let bar=document.getElementById('menu-btn');
let navbar= document.querySelector('.navarb');
let Searchform =document.querySelector('.search-form');
let cartitem =document.querySelector('.cart-items-container');
// console.log(search,shopping , bar , navbar)
bar.onclick = () =>{
    navbar.classList.toggle('active');
    // navbar.classList.remove('active');
    Searchform.classList.remove('active');
    cartitem.classList.remove('active');
} 
search.onclick = () =>{
    Searchform.classList.toggle('active');
    navbar.classList.remove('active');
    // Searchform.classList.remove('active');
    cartitem.classList.remove('active');
} 
shopping.onclick =() =>{
    cartitem.classList.toggle('active');
    navbar.classList.remove('active');
    Searchform.classList.remove('active');
    // cartitem.classList.remove('active');
}
window.onscroll= () =>{
    navbar.classList.remove('active');
    Searchform.classList.remove('active');
    cartitem.classList.remove('active');
    
}
