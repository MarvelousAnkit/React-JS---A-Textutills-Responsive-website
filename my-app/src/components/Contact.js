import React from 'react'




function Contact(props) {
  
  
  let mystyle = {
    color : props.mode === "dark" ? "white" : "black",
    backgroundColor : props.mode==="dark" ? "black" : "white"
  }
    
  return (
    <form action="#" method="POST"> {`{% csrf_token %}`}

    

    
       <input type="text" name="name" id="" />  <br />
       Email <input type="text" name="email" id="" /> <br />
       <input type="submit" value="submit"/>
    </form>
  )
}

export default Contact
