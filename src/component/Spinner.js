import React from 'react'
import loading from './Spinner.png'
let Spinner = ()=> {
    return (
      <div className='spinner'>
      <img src={loading} alt='spinner'/>
      </div>
    )
}
export default Spinner;