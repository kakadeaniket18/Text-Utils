import React, {useState} from 'react'

export default function TextForm(props) {

    const handleUpClick = ()=>{
        // console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to Uppercase","info")
    }
    const handleLoClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to Lowercase","info")
    }
    const handleClearClick = ()=>{
        let newText = '';
        setText(newText)
        props.showAlert("Text is Cleared","danger")
    }
    const handleCopyClick = ()=>{
        var text=document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text copied to Clipboard","success")
    }
    const handleExtraSpaces = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra Spaces are Removed","info")
    }

    const handleOnChange = (event)=>{
        setText(event.target.value)
    }
    const [text, setText] = useState("");
    return (
        
    <>
    <div style={{color:props.mode ==='dark'?'white':'black'}}>
        <h2>{props.heading}</h2>
        <div className="mb-3 my-2">
            <textarea className="form-control" value={text} style={{backgroundColor:props.mode ==='dark'?'rgb(60,60,60)':'white',color:props.mode ==='dark'?'white':'black'}} onChange={handleOnChange} id="myBox" rows="6"></textarea>
        </div>
        <button className="btn btn-info btn-sm mx-2" onClick={handleUpClick}><b>Convert to Uppercase</b></button>
        <button className="btn btn-info btn btn-sm mx-2" onClick={handleLoClick}><b>Convert to Lowercase</b></button>
        <button className="btn btn-info btn btn-sm mx-2" onClick={handleExtraSpaces}><b>Remove Extra Spaces</b></button>
        <button className="btn btn-success btn btn-sm mx-2" onClick={handleCopyClick}><b>Copy Text</b></button>
        <button className="btn btn-danger btn btn-sm mx-2" onClick={handleClearClick}><b>Clear Text</b></button>
    </div>
    <div className='my-2' style={{color:props.mode ==='dark'?'white':'black'}}>
        <h2>Your text Summary</h2>
        <p className='info'>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Words and {(text.replace(/\s/g,"")).length} Characters | {0.008 * text.split(" ").length } Minutes Read</p>
        <h2>Preview</h2>
        <p className='info'>{text.length>0?text:'Enter your text in above box to preview'}</p>
    </div>
    </>
    // {(text.split(" ")).length}text.split(" ").length(text.split(/\s+/).filter((element)=>{return element.length!==0)
  )
}
