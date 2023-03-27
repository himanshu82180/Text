//import React, {useState} from 'react'
import Navbar from './Navbar';
export default function About(props) {
    // const [mystyle,setmyStyle]=useState({
    //     backgroundColor: ''white'',
    //     color: ''black''   
 
    //  })
     //const [mytext,setMytext]=useState("Enable dark mode");
    //  const Handler=()=>{
    //     if(mystyle.color==="'black'"){
    //         setmyStyle({
    //             color: ''white'',
    //             backgroundColor: ''black'',
    //             border: '1px solid 'white''
    //         });
    //         //setMytext('Enable normal mode');
    //     }
    //     else{
    //         setmyStyle({
    //             color: ''black'',
    //             backgroundColor: ''white''
    //         });
    //         //setMytext('Enable dark mode');
    //     }
    //  };

  return (
    <>
    <Navbar title="TextUtils" aboutText="About" mode={props.mode} toggleMode={props.toggleMode} />
    <div className="container my-3" style={{color:props.mode==="dark"?'white':'black',backgroundColor:props.mode==="dark"?'black':'white'}}>
    <h2 className='my-3'>About</h2>
        <div className="accordion" id="accordionExample" style={{color:props.mode==="dark"?'white':'black',backgroundColor:props.mode==="dark"?'black':'white'}}>
  <div className="accordion-item" style={{color:props.mode==="dark"?'white':'black',backgroundColor:props.mode==="dark"?'black':'white'}}>
    <h2 className="accordion-header" id="headingOne" style={{color:props.mode==="dark"?'white':'black',backgroundColor:props.mode==="dark"?'black':'white'}}>
      <button className="accordion-button" type="button" style={{color:props.mode==="dark"?'white':'black',backgroundColor:props.mode==="dark"?'black':'white'}} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Accordion Item #1
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={{color:props.mode==="dark"?'white':'black',backgroundColor:props.mode==="dark"?'black':'white'}}>
        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item" style={{color:props.mode==="dark"?'white':'black',backgroundColor:props.mode==="dark"?'black':'white'}}>
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" type="button" style={{color:props.mode==="dark"?'white':'black',backgroundColor:props.mode==="dark"?'black':'white'}} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Accordion Item #2
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={{color:props.mode==="dark"?'white':'black',backgroundColor:props.mode==="dark"?'black':'white'}}>
        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item" style={{color:props.mode==="dark"?'white':'black',backgroundColor:props.mode==="dark"?'black':'white'}}>
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" type="button" style={{color:props.mode==="dark"?'white':'black',backgroundColor:props.mode==="dark"?'black':'white'}} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Accordion Item #3
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={{color:props.mode==="dark"?'white':'black',backgroundColor:props.mode==="dark"?'black':'white'}}>
        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
</div>
    </div>
    {/* <button className="btn btn-primary" onClick={Handler}>{mytext}</button> */}
    </>
  );
}
