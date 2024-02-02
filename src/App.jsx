import React, { useState } from 'react';
import buildingLogo from "/building-icon.svg"
import './App.css';

function App({ pic, title, address, description, project_type, year, ownership_type, psf_min, psf_max, subprice_label, availabilities_label }) {
  const nf = new Intl.NumberFormat();
  const [showDesc, setShowDesc] = useState(false);
  const [isHidden, setIsHidden] = useState(true);

  const toggleVisibility = () => {
    setIsHidden((prevState) => !prevState);
  };

  const anonymizePhoneNumber = (text) => {
    const regex = /(\d{4})\s?(\d{4})/g;
    return text.replace(regex, (match, firstFour, lastFour) => {
      return `${firstFour} XXXX`;
    });
  };

  return (
    <div className="w-full flex justify-center ">
      <div className='w-full h-screen text-blue-950 gap-2'>
        <div className='relative w-full h-3/4'>
          <img className="w-full h-full object-cover block" src={pic} alt="Main" />
          <div className='overlay'>
            <button className='w-8 h-8 border-b-8 border-l-8 border-white rotate-45 absolute top-1/2 left-6'></button>
            <button className='w-8 h-8 border-b-8 border-r-8 border-white -rotate-45 absolute top-1/2 right-6'></button>
          </div>
        </div>
        <div className='title justify-between w-full h-auto gap-2 px-4'>
          <div className=" flex flex-col">
            <div className='w-full items-center flex flex-row'>
              <img src={buildingLogo} className='pr-2 text-center' />
              <div className='w-full flex flex-col'>
                <div className='flex flex-col'>
                  <span className="text-xl font-bold">{title}</span>
                  <span className='text-sm opacity-70'>{address}</span>
                </div>
              </div>
            </div>
            <div className='w-full flex flex-col'>
              <span>{project_type} · {year} · {ownership_type}</span>
              <span>{availabilities_label}</span>
            </div>
          </div>
          <div className='price items-center'>
            <span className="text-base font-bold">${nf.format(psf_min)} - ${nf.format(psf_max)} psf</span>
            <span className='text-sm opacity-70'>{subprice_label}</span>
          </div>
        </div>
        <br />
        <div className="w-full text-orange-500 font-bold px-4 text-right cursor-pointer" onClick={() => setShowDesc(!showDesc)}>
          {showDesc ? 'Hide description' : 'See description'}
        </div>
        {showDesc && (
          <div className='text-center px-4 text-blue-950 text-balance cursor-pointer' onClick={toggleVisibility}>
            {isHidden ? anonymizePhoneNumber(description) : description}
          </div>
        )}
        
        
      </div>
    </div>
  );
}

export default App;
