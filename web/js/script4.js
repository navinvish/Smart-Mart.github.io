searchform = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick=()=>{
    searchform.classlist.toggel('active');
}

let loginForm = document.querySelector('.login-form-container');

document.querySelector('#login-btn').onclick = () =>{
    loginForm.classList.toggle('active');
    searchForm.classList.remove('active');
    cart.classList.remove('active');    
    navbar.classList.remove('active');
}

window.onscroll = () =>{
    searchform.classList.remove('active');

    if(window.scrollY > 80){
        document.querySelector9('.header .header-2').classList.add('active');
    }else{
        document.querySelector('.header .header-2').classList.remove('active');
    }
}
window.onload = ()=> {
    if(window.scrollY > 80){
    document.querySelector9('.header .header-2').classList.add('active');
 }else{
    document.querySelector9('.header .header-2').classList.remove('active');
 }
 fadeout();
}

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}


document.querySelectorAll('.featured-image-1').forEach(image_1 =>{
    image_1.addEventListener('click',()=>{
    var src=image_1.getAttribute('src');
    document.querySelector('.big-image-1').src = src;
});
});
let suggestions = ["Smart Watch", "Maxima ", "Vibez", "Glosmart", "Titan Smart Pro", "Amazfit ", "Titan Smart 2 ", "S-Fit", "M I | T55", "Rolex", "Budget Smartwatch","Redux", "Relish", "RUSTET", "Shocknshop","Fossil","SWADESI STUFF", "RPS FASHION","VILLS LAURRENS","TIMEWEAR", "BRANDS RELATED TO YOUR SEARCH", "V2A","Matrix", "Fossil", "Noise ", "Relish", ];
// getting all required elements
const searchheader = document.querySelector(".search-input");
const inputBox = searchheader.querySelector("input");
const suggBox = searchheader.querySelector(".autocom-box");
const icon = searchheader.querySelector(".icon");
let linkTag = searchheader.querySelector("a");
let webLink;

// if user press any key and release
inputBox.onkeyup = (e)=>{
    let userData = e.target.value; //user enetered data
    let emptyArray = [];
    if(userData){
        icon.onclick = ()=>{
            webLink = "https://www.google.com/search?q=" + userData;
            linkTag.setAttribute("href", webLink);
            console.log(webLink);
            linkTag.click();
        }
        emptyArray = suggestions.filter((data)=>{
            //filtering array value and user characters to lowercase and return only those words which are start with user enetered chars
            return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase()); 
        });
        emptyArray = emptyArray.map((data)=>{
            // passing return data inside li tag
            return data = '<li>'+ data +'</li>';
        });
        searchheader.classList.add("active"); //show autocomplete box
        showSuggestions(emptyArray);
        let allList = suggBox.querySelectorAll("li");
        for (let i = 0; i < allList.length; i++) {
            //adding onclick attribute in all li tag
            allList[i].setAttribute("onclick", "select(this)");
        }
    }else{
      searchheader.classList.remove("active"); //hide autocomplete box
    }
}

function select(element){
    let selectData = element.textContent;
    inputBox.value = selectData;
    icon.onclick = ()=>{
        webLink = "https://www.google.com/search?q=" + selectData;
        linkTag.setAttribute("href", webLink);
        linkTag.click();
    }
    searchheader.classList.remove("active");
}

function showSuggestions(list){
    let listData;
    if(!list.length){
        userValue = inputBox.value;
        listData = '<li>'+ userValue +'</li>';
    }else{
        listData = list.join('');
    }
    suggBox.innerHTML = listData;
}


