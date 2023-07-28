import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom'

function DesktopTwo() {

    

    const { t, i18n } = useTranslation();
    const [placeholderText, setPlaceholderText] = useState("");
    const [placeholderTextTwo, setPlaceholderTextTwo] = useState("");
   
  
    useEffect(() => {
      setPlaceholderText(t("desktopTwo-11"));
    }, [t, i18n.language]);

    useEffect(() => {
      setPlaceholderTextTwo(t("number"));
    }, [t, i18n.language]);
    
// const shadowLth = {
//  borderRadius: "44px",
//  boxShadow: "black",
//  opacity: "0.78",
//  borderRadius: "60px" 
// }
   
  return (

<div className=' md:container md:mx-auto'>

    <div className=" mt-[8%] text-white text-xl" style={{ marginTop: "25px", display: "flex" }}>
    <div className="top-0" style={{ marginLeft: '4rem' }}>
      <h1 className="mx-auto text-6xl">
        maker
        <span className="bg-white text-black px-1">s</span>
      </h1>
    </div>
  
    <div className='flex text-center ' >
    <button className='flex-1 text-2xl mr-2 font-semibold text-[#2B59C3] hover:text-white px-4 py-2 rounded' 
    style={{marginLeft: "50px"}}
    >{t("desktopTwo-1")}    {/* ! Курсы */}
    </button>
    <button className='flex-1 text-2xl   mx-2 font-semibold  text-[#2B59C3] hover:text-white px-4 py-2 rounded' 
    style={{marginLeft: "50px"}}
    >{t('desktopTwo-2')}</button>  {/* ! Расписание */}
    <button className='flex-1 text-2xl  ml-2 font-semibold text-[#2B59C3] hover:text-white px-4 py-2 rounded' 
    style={{marginLeft: "50px"}}
    >{t("desktopTwo-3")}</button>    {/* ! Поиск*/}
  
    <div  >
    <button className='bg-white text-2xl  hover:bg-[#2B59C3] font-semibold pt-1 pb-1.5 px-10 rounded-lg mb-4 mt-6 text-[#2B59C3] hover:text-white'
     style={{marginLeft: "50px"}}
     >{t("to_come_in")}</button>   {/* ! Войти*/}
    <button className='bg-white text-2xl  hover:bg-[#2B59C3] font-semibold pt-1 pb-1.5 px-10 rounded-lg mb-4 mt-6 text-[#2B59C3] hover:text-white'
     style={{marginLeft: "50px"}}
     >{t("desktopTwo-4")}</button>    {/* ! Связаться */}
    </div>
  </div>
  
  </div>
  <br/>

  <div className="md:container md:mx-auto mx-auto h-px bg-gray-100"/>

    <div class="md:container md:mx-auto mx-auto px-20 border-8 outline-8">
  

  <div class=" mx-auto mt-16 max-w-2xl shadow-2xl shadow-black border-8 ring-gray-900 rounded-3xl ring-1 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none drop-shadow-2xl bg-[#1B1C1F] " >
      <div class="p-8 sm:p-10 lg:flex-auto">   
        <div>

          <h1 class="text-4xl font-semibold font-sans antialiased text-40 tracking-wide leading-55 text-left w-634 h-165 top-58 left-33 text-indigo-600"> <br/> Самые полезные  IT курсы. <br/>
{t("desktopTwo-5")} <br/> {t("desktopTwo-6")}</h1>    {/* !  С нами ты легко устроишься*/}
          
        </div>

        <p className='text-white'>{t("desktopTwo-7")}<br/> {t("desktopTwo-8")} </p>
      
      </div>

    
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
     
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="mt-8 ">
        <div className="mb-4">
        <input
         type="email"
         className="bg-[#1B1C1F] shadow-2xl  shadow-black  ring-1 ring-blue-400 focus:ring focus:ring-blue-500  py-3 px-8 rounded-full mb-4 text-[#2B59C3] hover:text-white placeholder-[#2B59C3]  "
         placeholder={placeholderText}
/>

        </div>
        <div className="password__div">
          <input
            type="password"
            className="bg-[#1B1C1F] shadow-2xl  shadow-black ring-1 ring-blue-500 focus:ring focus:ring-blue-500  py-3 px-8 rounded-full mb-4 text-[#2B59C3] hover:text-white placeholder-[#2B59C3] "
            placeholder={placeholderTextTwo}
          />
         
        </div>

        

        <label className="ml-4  md:container md:mx-auto text-white shadow-2xl shadow-black text-sm">
  <input
    type="checkbox"
    className="mr-2 text-[#2B59C3] rounded shadow-2xl shadow-black"
  />
  {t("desktopTwo-9")} <br/> <p style={{marginLeft: "5.4%"}}>{t("desktopTwo-10")}</p> 
</label>



       
        <Link to="/appMainPage">
        <button
        style={{background: "blue", color: "white"}}
        type="button"
          className="bg-[#1d4ed8] shadow-2xl shadow-black px-20 w-64 h-12 rounded-md pt-1 pb-1.5  mb-4 mt-6 text-[#2B59C3] hover:text-white"
        >
          {t("send")}    {/* !  Отправить*/}
        </button>
        </Link>
      </form>
          
        </div>
      </div>

</div>


</div>
   
  )
}

export default DesktopTwo