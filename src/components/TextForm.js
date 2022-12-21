import React, {useState} from 'react'

export default function TextForm(props) {
    const[myStyle,setMyStyle] = useState({
        color : 'black',
        backgroundColor: 'white'
      })
    const [text,setText] = useState('Enter The Text')
    const [btntext,setBtnText]=useState("Enable Dark Mode")
    const handleUpClick = ()=>{
        // console.log("UPPERCASE WAS CLICKED")
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handleLowClick = ()=>{
        // console.log("UPPERCASE WAS CLICKED")
        let newText = text.toLowerCase();
        setText(newText)
    }
    const toggleStyle = ()=>{
      if(myStyle.color=== 'black'){
        setMyStyle({
            color : 'white',
            backgroundColor: 'black'  
        })
        setBtnText("Enable Light Mode")
      }  
      if(myStyle.color=== 'white'){
        setMyStyle({
            color : 'black',
            backgroundColor: 'white'  
        })
        setBtnText("Enable Dark Mode")
      }  
    }
    const handleClearClick = ()=>{
        // console.log("UPPERCASE WAS CLICKED")
        let newText = '';
        setText(newText)
    }
    const removeGaps = ()=>{
        // console.log("UPPERCASE WAS CLICKED")
        let newText = text+text;
        setText(newText)
    }
      const HandOnChange = (event)=>{ 
        setText(event.target.value)
     }
    return (
        <>  
             <div className="container" style={myStyle}>
             <div class="mb-3">
                <label for="myBox" class="form-label"><h1>ENTER TEXT HERE...</h1></label>
                <textarea className="form-control" value={text} onChange={HandOnChange} id="myBox" rows="8">{text}</textarea>
            </div>
            <button className="btn btn-primary" onClick={handleUpClick}>Convert To Uppercase</button>
            <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert To Lowercase</button>
            <button className="btn btn-primary " onClick={handleClearClick}>Clear Text</button>
            <button className="btn btn-primary mx-2 " onClick={removeGaps}>Copy the text</button>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous"></link>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4" crossorigin="anonymous"></script>
            <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js" integrity="sha384-oBqDVmMz9ATKxIep9tiCxS/Z9fNfEXiDAYTujMAeBAsjFuCZSmKbSSUnQlmh/jp3" crossorigin="anonymous"></script>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.min.js" integrity="sha384-cuYeSxntonz0PPNlHhBs68uyIAVpIIOZZ5JqeqvYYIcEL727kskC66kF92t6Xl2V" crossorigin="anonymous"></script>
            </div>
            <div className="container my-3">
             <h1>Your Text Summary</h1>
             <p>{text.split(" ").length-1} words ans {text.length} characters</p>
             <div className="container my-3">
               <button onClick={toggleStyle} type="button" className="btn btn-primary">{btntext}</button>
        
             </div>
            </div>
        </>
    )
}
