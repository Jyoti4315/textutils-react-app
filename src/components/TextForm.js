import React, { useRef,useState} from 'react'



export default function TextForm(props) {
    const [copySuccess, setCopySuccess] = useState('');
    const textAreaRef = useRef(null);

    function copyToClipboard(e) {
      textAreaRef.current.select();
      document.execCommand('copy');
      // This is just personal preference.
      // I prefer to not show the whole text area selected.
      e.target.focus();
      setCopySuccess('');
      props.showAlert("Copied to clipboard!", "success");
         };
    
    const handleExtraSpaces = () =>{
          let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra space removed!", "success");
        }

    const handleUpClick = ()=>{
      //console.log("Uppercase was clicked: " +  text);
      let newText = text.toUpperCase();
      setText(newText)
      props.showAlert("Converted to uppercase!", "success");
    }
    const handleLoClick = ()=>{
      let newText = text.toLowerCase();
      setText(newText)
      props.showAlert("Converted to lowercase!", "success");
    }
    const handleClearClick = ()=>{
      let newText = "";
      setText(newText)
      props.showAlert("Text Cleared!", "success");
    }
    const handleOnChange = (event)=>{
      console.log("on changed");
      setText(event.target.value)
    }
    const [text, setText] = useState(''); 
    // text is a veriable and its default state is mentioned in userState
    //text = "new text"; //wrong way to change the state
    //setText("new txt"); // right way to change the state
  return (
    <>
    <div className='container' style={{  color : props.mode ==='dark'?'white':'black' }}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control"  value={text} ref={textAreaRef} onChange={handleOnChange} style={{ backgroundColor: props.mode ==='dark'?'grey':'white', color : props.mode ==='dark'?'white':'black' }} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
        <button className="btn btn-primary mx-2" onClick={copyToClipboard}>Copy</button> 
        <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Space</button> 
          {copySuccess}
        
    </div>
    <div className="container my-2" style={{  color : props.mode ==='dark'?'white':'black' }}>
        <h2>Your Text Summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes Read</p>
        <h1>Preview</h1>
        <p>{text.length>0?text:"Enter something in the textbox above to preview it."}</p>
    </div>
    </>
  )
}
