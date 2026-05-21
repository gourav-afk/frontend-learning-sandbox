import './App.css'
import {useState} from 'react'

function App() {
    const [text, setText] = useState('N/A')
    const setNewText = event => {
        setText(event.target.value);
    }

    const [checkbox, setCheckbox] = useState(false)
    const setNewCheckbox = event => {
        event.target.checked ? setCheckbox(true) : setCheckbox(false)
    }

    const [radio, setRadio] = useState('N/A');
    const setNewRadio = event => {
        setRadio(event.target.value);
    }

    const [select, setSelect] = useState('N/A');
    const setNewSelect = event => {
        setSelect(event.target.value);
    }

    return (
        <div className="app-container">
           <form className="pull-data">
               <h1>Form Example</h1>

               <div className="text-field-area">
                   <label htmlFor="text-field" className="text-area-label">Text:</label>
                   <input type="text" id="text-field" placeholder={text} onInput={setNewText} name="text-field"/>
               </div>

               <div className="checkbox-area">
                   <input type="checkbox" id="checkbox-field" onChange={setNewCheckbox} name="checkbox"/>
                   <label htmlFor="checkbox-field">Checkbox</label>
               </div>

               <div className="radio-area">
                   <p>Radio:</p>

                   <div className="radio-first">
                       <input onChange={setNewRadio} type="radio" id="radio-field-one" name="radio-field" value="Option 1" />
                       <label htmlFor="radio-field-one">Option 1</label>
                   </div>

                   <div className="radio-second">
                       <input onChange={setNewRadio} type="radio" id="radio-field-two" name="radio-field" value="Option 2" />
                       <label htmlFor="radio-field-two">Option 2</label>
                   </div>
               </div>



               <div className="select-area">
                   <label htmlFor="select">Select:</label>
                   <select name="select" id="select" onChange={setNewSelect}>
                       <option value="N/A" disabled selected>--Choose an option--</option>
                       <option value="Option 1">Option 1</option>
                       <option value="Option 2">Option 2</option>
                       <option value="Option 3">Option 3</option>
                   </select>
               </div>

               <div className="push-data">
                   <h2>Form Data</h2>
                   <p>Text: <span>{text}</span></p>
                   <p>Checkbox: <span> {checkbox === true ? "Checked" : "Unchecked"} </span></p>
                   <p>Radio: <span> {radio} </span></p>
                   <p>Select: <span> {select} </span></p>
               </div>

               <button type="submit">Submit</button>
           </form>
        </div>
    )
}

export default App
