import {useState} from 'react';
import Navbar from './Navbar';

export default function About(){
const [mystyle, setMyStyle] = useState({
color : 'black',
backgroundColor: 'white'
})

const [btntext, setBtnText] = useState("Enable Dark mode")

const toggleStyle =()=>{
if(mystyle.color === 'black'){
setMyStyle({color: 'white', backgroundColor: 'black'})
setBtnText("Enable Light mode")
}
else{
setMyStyle({color: 'black', backgroundColor: 'white'})
setBtnText("Enable Dark mode")
}

}

return(
<>
    <div className="container">
        <div class="form-check form-switch">
            <input class="form-check-input" onClick={toggleStyle} type="checkbox" role="switch"
                id="switchCheckChecked" />
            <label class="form-check-label" for="switchCheckChecked">{btntext}</label>
        </div>
    </div>
    <div className="accordion accordion-flush" style={mystyle} id="accordionFlushExample">
        <h2 className='my-2 mx-2'>About Us</h2>
        <div className="accordion-item" style={mystyle}>
            <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" style={mystyle} data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                    Accordion Item #1
                </button>
            </h2>
            <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate
                    the
                    <code>.accordion-flush</code> class. This is the first item’s accordion body.</div>
            </div>
        </div>
        <div className="accordion-item" style={mystyle}>
            <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" style={mystyle} data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                    Accordion Item #2
                </button>
            </h2>
            <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate
                    the
                    <code>.accordion-flush</code> class. This is the second item’s accordion body. Let’s imagine this
                    being filled with some actual content.</div>
            </div>
        </div>
        <div className="accordion-item" style={mystyle}>
            <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" style={mystyle} data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                    Accordion Item #3
                </button>
            </h2>
            <div id="flush-collapseThree" className="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample">
                <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate
                    the
                    <code>.accordion-flush</code> class. This is the third item’s accordion body. Nothing more exciting
                    happening here in terms of content, but just filling up the space to make it look, at least at first
                    glance, a bit more representative of how this would look in a real-world application.</div>
            </div>
        </div>
    </div>
</>
)
}