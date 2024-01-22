import React, {useState}from 'react'

export default function TextForm(props) {

    const handleUpclick = ()=>{
       // console.log("Upcase button clicked")
        let newText = text.toUpperCase()
        settext(newText)
        props.showAlert("Converted to upper case!","success");
    }

    const handleonChange = (event)=>{
        console.log("On change")
        settext(event.target.value)
    }

    const handleLowclick = ()=>{
        // console.log("Upcase button clicked")
         let newText = text.toLowerCase()
         settext(newText)
         props.showAlert("Converted to lower case!","success");
    }

    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
    }

  const[text,settext] = useState('');
  return (
    <>
    <div className='container my-3' style = {{color:props.mode === 'light'? 'white':'grey'}}>
        
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value ={text} onChange = {handleonChange} style={{backgroundColor :props.mode === 'light'? 'white':'grey',color :props.mode === 'light'? 'grey':'white'}} id="mybox" rows="7"></textarea>
        </div>
        <button className="btn btn-primary mx-3 my-1" onClick = {handleUpclick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-3 my-1" onClick = {handleLowclick}>Convert to Lowercase</button>
        <button type="submit" onClick={speak} className="btn btn-warning mx-2 my-2">Speak</button>
    </div>

    <div className='container mb-6' >
        <h2>Your Text Summary</h2>
        <p>{text.split(/\s+/).filter((element) => {return element.length!==0}).length}words and {text.length}characters </p>
        <p>It will take {0.008 * text.split(" ").length} Minutes to read</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>

    </>
    
  )
}
