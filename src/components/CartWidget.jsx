import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { faCartPlus } from "@fortawesome/free-solid-svg-icons"


function ContadorCarrito() {
  const [contador, UseCount] = useState(0);
  return (
      <div className='cart'>
        <button onClick={() => UseCount(contador + 1)} className='BotonCart'>
          <div>
            < FontAwesomeIcon icon={faCartPlus} style={{ color: "#436850", height: "60px" }} />
            <div className='contador'>
              {contador}
            </div>
          </div>
        </button>
        <div>
    </div>
     </div>   
  );
}

export default ContadorCarrito;


