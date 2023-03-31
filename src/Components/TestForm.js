
import React, {useState} from 'react'
import Navbar from './Navbar';
import Alert from './Alert';
export default function TestForm(props) {
    const clickHandle=()=>{
        let a=text.toUpperCase();
        setText(a);
        props.showAlert("Converted to Upper case successfully","success");
    }
    const clickHandleLower=()=>{
        let a=text.toLowerCase();
        setText(a);
        props.showAlert("Converted to Lower case successfully","success");
    }
    const clickHandleClear=()=>{
        let a='';
        setText(a);
        props.showAlert("Text cleared successfully","success");
    }
    const onchangeHandle=(event)=>{
        
        setText(event.target.value);
    }
    const clickHandleCopy=()=>{
        navigator.clipboard.writeText(text);
        props.showAlert("Text copied successfully successfully","success");
    }
    const clickRemovespace=()=>{
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Removed extra space successfully","success");
    }
    const [text,setText]=useState('');

    //setText("you have new value");
    //const [count,setCount]=useState(0);
  return (
    <>
    <Navbar title="TextUtils" aboutText="About" mode={props.mode} toggleMode={props.toggleMode} />
    <Alert alert={props.alert} />
    <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
    <h1>{props.title}</h1>
    <div className="mb-3">
    <textarea className="form-control "  id="exampleFormControlTextarea1" onChange={onchangeHandle} style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}} value={text} rows="8"></textarea>
    </div>
    <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={clickHandle} >ClickToUpperCase</button>
    <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={clickHandleLower} >ClickToLowerCase</button>
    <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={clickHandleClear} >Clear Text</button>
    <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={clickHandleCopy} >Copy Text</button>
    <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={clickRemovespace} >Remove extra space</button>
    </div>
    <div className="container" style={{backgroundColor:props.mode==='dark'?'#23224c':'white',color:props.mode==='dark'?'white':'black'}}>
    <h2>Your text summary</h2>
    <p>{text.split(/\s+/).filter((ele)=>{return ele.length!==0}).length} words and {text.length} Character</p>
    <p>{0.008*text.split(" ").filter((ele)=>{return ele.length!==0}).length} minutes to read</p>
    <h2>Preview</h2>
    <p>{text}</p>
    </div>
    </>
  );
}
