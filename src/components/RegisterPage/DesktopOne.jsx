import React, { useEffect, useState } from 'react';
import mak from '../img/pro.avif';
import { Link } from 'react-router-dom';
import DesktopTwo from './DesktopTwo';
import { useTranslation } from 'react-i18next';
// import { Route } from 'react-router-dom';
// import DesktopTwo from './DesktopTwo';



function DesktopOne({ onClose }) {

  // const [showImage, setShowImage] = useState(true);

  // const handleAdvertisementClose = () => {
  //   setShowImage(false);
  // };

  const { t, i18n } = useTranslation();
  const [placeholderText, setPlaceholderText] = useState("");
  

  useEffect(() => {
    setPlaceholderText(t("google"));
  }, [t, i18n.language]);


  const backgroundStyle = {
    backgroundImage: `url(${mak})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '100%',
    height: '60vh',
  };

  const textContainerStyle = {
    position: 'absolute',
    top: '50%',
    left: '4rem',
    transform: 'translateY(-50%)',
    textAlign: 'left',
  };

  const closeButtonStyle = {
    position: 'absolute',
    top: '3.5rem',
    right: '3.5rem',
    width: '33.2px',
    height: '35px',
    borderRadius: '50%',
    backgroundColor: 'transparent',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    border: '3px solid white',
  };

  const closeSymbolStyle = {
    fontSize: '2.2rem',
    color: 'white',
    lineHeight: '1.7',
  };

  const handleClick = () => {
    // onClose();
    console.log('Advertisement closed!');
  };

  return (
    <div>



    <div className="relative text-white text-xl" style={backgroundStyle}>
      <Link to="/desktop">
      
       {/* <a href="advertisement URL"> */}
       <div style={closeButtonStyle} onClick={handleClick}>
          <span style={closeSymbolStyle}>Х</span>
        </div>
      {/* </a> */}
      
      </Link>
     
      <div style={textContainerStyle}>
        <p>{t("macbook")}</p>
        <p>{t("macbook_2")}</p>
      </div>

      {/* <Route path="/desktop">
          <DesktopOne onClose={handleAdvertisementClose} />
        </Route>
        <Route path="/desktoptwo" element={<DesktopTwo />} /> */}
    </div>


    <DesktopTwo/>
    </div>
  );
}

export default DesktopOne;
