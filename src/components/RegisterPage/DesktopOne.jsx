import React from 'react';
import mak from "../img/pro.avif";


function DesktopOne() {
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
    border: '3px solid white', // Increased border thickness to 3px
  };

  const closeSymbolStyle = {
    fontSize: '2.2rem', // Increased font size for the cross symbol
    color: 'white', // Set the cross color to white
    lineHeight: '1.7', // Adjusted lineHeight to fully fit the cross inside the circle
  };

  const handleClick = () => {
    // Handle the click event here (e.g., close the advertisement)
    console.log('Advertisement closed!');
    // You can set a state or perform any other actions as needed to close the advertisement.
  };

  return (
    <div>
<div className='relative text-white text-xl' style={backgroundStyle}>
      <a href='advertisement URL'>
        <div style={closeButtonStyle} onClick={handleClick}>
          <span style={closeSymbolStyle}>Х</span>
        </div>
      </a>
      <div style={textContainerStyle}>
        <p>Купи Macbook своей мечты</p>
        <p>Приходи к нам в Istore.kg</p>
      </div>
    </div>

    <div className="mt-[8%] text-white text-xl" style={{ marginTop: "25px", display: "flex" }}>
  <div className="top-0" style={{ marginLeft: '4rem' }}>
    <h1 className="mx-auto text-6xl">
      maker
      <span className="bg-white text-black px-1">s</span>
    </h1>
  </div>

  <div className='flex text-center'>
  <button className='flex-1 mr-2  text-blue-500 px-4 py-2 rounded'>Курсы</button>
  <button className='flex-1 mx-2  text-blue-500 px-4 py-2 rounded'>Расписание</button>
  <button className='flex-1 ml-2  text-blue-500 px-4 py-2 rounded'>Поиск</button>
  <button className='mr-2 bg-white text-blue-500 px-4 py-2 rounded'>Войти</button>
  <button className='mr-2 bg-white text-blue-500 px-4 py-2 rounded'>Связаться</button>
</div>


</div>




   
    </div>
    
  );
}

export default DesktopOne;
