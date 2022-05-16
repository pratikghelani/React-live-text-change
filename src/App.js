
import React, { useState } from 'react';

function App() {
  const textchange = (e) =>{
    setText(e.target.value);
}
const [text, setText] = useState('Enter text here');
  return (
    <>
    <div className="container mt-5">
      <form>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Enter the TEXT</label>
          <input type="text" name="text" onChange={(e) => textchange(e)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
        </div>
      </form>
      <p>{text}</p>
    </div>
    </>
  );
}
export default App;
