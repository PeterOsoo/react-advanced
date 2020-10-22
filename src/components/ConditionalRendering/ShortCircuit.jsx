import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
    const [text, setText] = useState('');
    const [isError, setIsError] = useState(false);
    // const firstValue = text || 'hello world';
    // const secondValue = text && 'hello world';
    
    return (
        <>
        <div className="conditionals">

      {/* <h1>{firstValue}</h1>
      <h1>value : {secondValue}</h1> */}
      {/* {if(){console.log('hello world')}} */}

      <h3>3. Short Circuit</h3>
      <p>use of and ,  or  </p>

      <h3>{text || 'john doe'}</h3>
      <h3>{text && 'john doe'}</h3>
      <h3>{!text && 'john doe'}</h3>
     
     </div>
     <div className="conditionals">

     <h3>4. Toggle button to turn error on and off using short Circuit Operator</h3>

      <button className='btn' onClick={() => setIsError(!isError)}>
        toggle error
      </button>

      {isError && <h3>Something went wrong..</h3>}


       {/* ternary operator */}
      {isError ? (
        <p>there is an error...</p>
        ) : (
          <div>
          <p>there is no error</p>
        </div>
      )}
    
      </div>
    </>
  );
};

export default ShortCircuit;