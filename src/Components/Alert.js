import React from 'react'

function Alert(props) {
    const capitalize=(type)=>{
       var ty=type.toLowerCase();
       return ty.charAt(0).toUpperCase()+ty.substring(1); 
    }
  return (
    props.alert&&<div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg}
        
    </div>
  );
}

export default Alert

