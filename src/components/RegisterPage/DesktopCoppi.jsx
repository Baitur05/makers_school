import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

function DesktopCoppi() {
    const { t, i18n } = useTranslation();
    const [placeholderText, setPlaceholderText] = useState("");
    const [placeholderTextTwo, setPlaceholderTextTwo] = useState("");
   
  
    useEffect(() => {
      setPlaceholderText(t("desktopTwo-11"));
    }, [t, i18n.language]);

    useEffect(() => {
      setPlaceholderTextTwo(t("number"));
    }, [t, i18n.language]);
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

<div style={{marginTop: "20px"}}>
<Link to="/card">
    <button className='flex-1 text-2xl mr-2 font-semibold text-[#2B59C3] hover:text-white px-4 py-2 rounded' 
    style={{marginLeft: "50px"}}
    >{t("desktopTwo-1")}    {/* ! Курсы */}
    </button>
      </Link>

      <Link>
    <button className='flex-1 text-2xl   mx-2 font-semibold  text-[#2B59C3] hover:text-white px-4 py-2 rounded' 
    style={{marginLeft: "50px"}}
    >{t('desktopTwo-2')}</button>  {/* ! Расписание */}
      </Link>

      <Link>
    <button className='flex-1 text-2xl  ml-2 font-semibold text-[#2B59C3] hover:text-white px-4 py-2 rounded' 
    style={{marginLeft: "50px"}}
    >{t("desktopTwo-3")}</button>    {/* ! Поиск*/}
      </Link>
</div>
      
  
    <div>

        <Link>      
    <button className='bg-white text-2xl  hover:bg-[#2B59C3] font-semibold pt-1 pb-1.5 px-10 rounded-lg mb-4 mt-6 text-[#2B59C3] hover:text-white'
     style={{marginLeft: "50px"}}
     >{t("to_come_in")}</button>   {/* ! Войти*/}
        </Link>

        <Link>       
    <button className='bg-white text-2xl  hover:bg-[#2B59C3] font-semibold pt-1 pb-1.5 px-10 rounded-lg mb-4 mt-6 text-[#2B59C3] hover:text-white'
     style={{marginLeft: "50px"}}
     >{t("desktopTwo-4")}</button>    {/* ! Связаться */}
        </Link>
    </div>
  </div>
  
  </div>
  <br/>

  <div className="md:container md:mx-auto mx-auto h-px bg-gray-100"/>

   

</div>
  )
}

export default DesktopCoppi