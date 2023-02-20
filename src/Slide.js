import React, { useState } from 'react';
import 'boxicons';
import SlideData from './SlideData';

function slide() {
  const [getIndex, setIndex] = useState(0);
  const imageStyle = {
    backgroundImage: `url(${SlideData[getIndex].url})`,
    border: 'solid 3px green',
    width: '100%',
    height: '100%',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
  };
  const prev = {
    position: 'absolute',
    top: '80%',
    left: '0px',
    cursor: 'pointer',
  };
  const next = {
    position: 'absolute',
    top: '79%',
    right: '0px',
    cursor: 'pointer',
  };

  function Previmg() {
    const Previmg = getIndex === 0 ? SlideData.length - 1 : getIndex - 1;
    setIndex(Previmg);
  }

  function Nextimg() {
    const Nextimg = getIndex === SlideData.length - 1 ? 0 : getIndex + 1;
    setIndex(Nextimg);
  }

  return (
    <div style={{ height: '100%', position: 'relative', textAlign: 'center' }}>
      <h1 style={{ color: 'red' }}>{SlideData[getIndex].name}</h1>
      <p style={{ color: 'green', fontSize: '1.5rem' }}>
        {SlideData[getIndex].artist}
      </p>
      <div style={imageStyle} />
      <p style={{ color: 'green' }}>{SlideData[getIndex].description}</p>

      <div onClick={Previmg} style={prev}>
        <box-icon size="lg" name="left-arrow" color="#e83004"></box-icon>
      </div>
      <div onClick={Nextimg} style={next}>
        <box-icon name="right-arrow" size="lg" color="#e83004"></box-icon>
      </div>
    </div>
  );
}
export default slide;
