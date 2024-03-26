import React, { useRef, useState, useEffect } from 'react';
import '../../stilos.css';

const DropDown = ({className,buttonStyle,title,options, position}) => {
  console.log(options)
  const ref = useRef(null);

  const [isDropDownOpen, setIsDropDownOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setIsDropDownOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [ref]);

  return (
    <div className={className} style={{display: 'flex'}}>
    <div ref={ref} style={{ position: 'relative', width: 'fit-content' }}>
      <div style={{ display: 'inline-block', width: 'fit-content' }}>
        <button onClick={() => { setIsDropDownOpen(!isDropDownOpen)}}>
          {title}
        </button>
      </div>
      {isDropDownOpen && (
      <div style={{ position: {position}, top: '100%', left: 0, width: '100%', zIndex: 999 }}>
          <div style={{ display: 'flex',flexDirection: 'column', width: '100%' }}>
            {options.map((option) => {return (<button className='button' onClick={option.onClick}>{option.text}</button>)})}
          </div>
        </div>
      )}
    </div>
    </div>
  );
};

export default DropDown;
