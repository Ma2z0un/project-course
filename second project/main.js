let navbar_home=document.getElementById("navbar-home");
let navbar_navbar=document.getElementById("navbar");
let navbar_features=document.getElementById("navbar-features");
let navbar_pricing=document.getElementById("navbar-pricing");

let welcome_text=document.getElementById("welcome_text");
let about_text=document.getElementById("about_text");
let arabic=document.getElementById("ar");
let english=document.getElementById("eng");

arabic.onclick = ()=>{
    setLanugage("arabic");
    localStorage.setItem("Lang","arabic");
};

english.onclick = ()=>{
    setLanugage("english");
    localStorage.setItem("Lang","english");
};

function setLanugage(param_language){
    if(param_language === "arabic"){
        document.body.style.direction= "rtl";
        navbar_navbar.innerHTML = "شريط المهام ";
        navbar_home.innerHTML = "الصفحة الرئيسية ";
        navbar_features.innerHTML = "الميزات ";
        navbar_pricing.innerHTML = "السعر ";
        welcome_text.innerHTML = "اهلا وسهلا ";
        about_text.innerHTML = "نبذة عنا ";
    }
    else if(param_language ==="english"){
        document.body.style.direction= "ltr";
        navbar_navbar.innerHTML = "Navbar";
        navbar_home.innerHTML = "Home";
        navbar_features.innerHTML = "Features ";
        navbar_pricing.innerHTML = "Pricing ";
        welcome_text.innerHTML = "welcome";
        about_text.innerHTML = "about us";
    
    }
}