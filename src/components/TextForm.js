import React,{useState} from 'react'

export default function TextForm(props){
    const handleUpClick = () => {
        let newText = text.toUpperCase()
        setText(newText)
    }

    const handleLoClick = () => {
      let newText = text.toLowerCase()
      setText(newText)
  }

  const deleteOnClick = () => {
    let newText =""
    setText(newText)
}
    const handleOnChange = (event) => {
        setText(event.target.value)

    }
    const [text,setText] = useState('')

  return (
    <div className='container'>
        <h1>{props.heading}</h1>
        <div className='mb-3'>
        <label htmlFor="myBox" className="form-label">Example Textarea</label>
        <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        <button className='btn btn-primary my-2' onClick={handleUpClick}>Convert to Uppercase</button>
        <button className='btn btn-primary mx-2' onClick={handleLoClick}>Convert to Lowercase</button>
        <button className='btn btn-primary mx-2' onClick={deleteOnClick}>Clear Text</button>

        </div>
        <div className='container my-3'>
          <h1>Your Text Summary</h1>
          <p>{text.split(" ").length} Words and {text.length} Characters </p>
          <p>{0.008 * text.split(" ").length} Minutes read</p>
        </div>
    </div>
  )
}
