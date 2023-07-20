// const allLangs = ["ru", "kg"];
// let currentLang = "ru";
// const langButtons =document.querySelectorAll("[data-btn]")
// const currentPathName = window.location.pathname;
// let currentText ={};

// const homeTexts ={ 
//     "home_page-1": {
//         ru: "Войти",
//         kg: "Кируу"
//     },
//     "home_page-2" : {
//         ru: "Зарегестрироваться",
//         kg: "Каттоо",
//     },
//     "home_page-3" : {
//         ru: "или",
//         kg: "же",
//     }, "home_page-4" : {
//         ru: "Войти через Google",
//         kg: "Google аркылуу кируу",
//     }, "home_page-5" : {
//         ru: "Зарегестрироваться",
//         kg: "Катто",
//     },
// }

// function checkPagePathName(){
//     switch(currentPathName){
//         case "/src/components/RegisterPage/MainPage.jsx" : currentText = homeTexts
//             break;

//             default:
//                 currentText = homeTexts;
//                 break;
//     }
// }

// checkPagePathName();

// function changelang(){
//     for(const key in currentText){
//         const elem =document.querySelector(`[data-lang=${key}]`);
//         if(elem) {
//             elem.textContent= currentText[key][currentLang]
//         }
//     }
// }
// changelang();

// langButtons.forEach((btn=>{
//     btn.addEventListener("click", (event) => {
//         currentLang = event.target.dataset.btn;
//         btn.classList.add("header__btn_active")
//         changelang();
//     })

// }))