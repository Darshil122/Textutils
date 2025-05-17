import React, {useState} from 'react';

export default function TextForm(props){
const handleUpClick = ()=>{
    console.log("Uppercase was clicked");
    setText(text.toUpperCase());
}

const handleLpClick = ()=>{
    console.log("Lowercase was clicked");
    setText(text.toLowerCase());
}

const handleCopyClick = ()=>{
    console.log("Copy was clicked");
    navigator.clipboard.writeText(text);
}

const handleClearClick = ()=>{
    console.log("Clear was clicked");
    setText("")
}
const handleOnChange = (event)=>{
    console.log("On change was clicked");
    setText(event.target.value);
}

const [text, setText] = useState('');
return(
<>
    <div className='container'>
        <h1>{props.heading}</h1>
        <div className='mb-3'>
            <textarea className='form-control' value={text} onChange={handleOnChange} id="mybox"
                style={{backgroundColor: props.mode==='dark'?'#c8e3f9':'white'}} rows="8"></textarea>
        </div>
        <button type='submit' className='btn btn-primary mx-2' onClick={handleUpClick}>Convert to Uppercase</button>
        <button type='submit' className='btn btn-info' onClick={handleLpClick}>Convert to Lowercase</button>
        <button type='submit' className='btn btn-secondary mx-2' onClick={handleCopyClick}>Copy Text</button>
        <button type='submit' className='btn btn-danger mx-1' onClick={handleClearClick}>Clear Text</button>
    </div>
    <div className="container">
        <h1>Your text summary</h1>
        <p>{text.trim().split(/\s+/).filter((e) => e !== "").length} word and {text.length} character</p>
        <p>{0.008 * text.split(" ").length} Minutes Read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"enter something in the text box above"}</p>
    </div>
</>
)
}