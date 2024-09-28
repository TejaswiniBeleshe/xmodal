import React,{useContext, useEffect, useState} from "react";
import { createPortal } from "react-dom";
import "./Model.css"

const Model = ({setState})=>{
    let date = new Date();
    let year = date.getFullYear();
    
    const [name,setName] = useState('');
    const [mail,setMail] = useState('')
    const [phoneNum,setPhoneNum] = useState('');
    const [dob,setDob] = useState('')
    
    useEffect(()=>{
        document.body.style.scroll = "none";
        return ()=>{                                   //side effects of previous render cleaned before running the side effect for current render
            document.body.style.scroll = "scroll";
        }
    },[])

    const handleSubmit = (e)=>{
        e.preventDefault()
        let uName = e.target.elements['username'].value;
        let uMail = e.target.elements['email'].value;
        let uPhone = e.target.elements['phone'].value;
        let uDob = e.target.elements['dob'].value;
        console.log(uName,uMail,uPhone,uDob);

        
        //validate the phone number
        const validatePhone = (num)=>{
            if(num.length !== 10){
                alert('Invalid phone number. Please enter a 10-digit phone number.')
                return;
            }
            return true;
        }
        const validateDob = (d)=>{
            let splitedD = d.split('-');
            if(parseInt(splitedD[0]) > year){
                alert('Invalid date of birth. Date of birth cannot be in the future.');
                return;
            }
            return true;

        } 

        if(validatePhone(uPhone) && validateDob(uDob)){
            setState(false)
        }
        // setState(false)

    }
    return createPortal(
        <>
        <div className="modalWrapper" onClick={()=>setState(false)} ></div>
            <div className={`modal-content d-flex flex-column`}>  
            <form onSubmit={(e)=>handleSubmit(e)}>     
              <h1>Fill Details</h1>
              <label htmlFor="username">Username:</label><br/>
              <input type="text" id="username" value={name} onChange={(e)=>setName(e.target.value)} required/><br/>
              <label htmlFor="email">Email Address:</label><br/>
              <input type="email" id="email" value={mail} onChange={(e)=>setMail(e.target.value)} required/><br/>
              <label htmlFor="phone">Phone Number</label><br/>
              <input type="number" id="phone" value={phoneNum} onChange={(e)=>setPhoneNum(e.target.value)}  required/><br/>
              <label htmlFor="dob">Date of Birth:</label><br/>
              <input type="date" id="dob" value={dob} onChange={(e)=>setDob(e.target.value)}/><br/>
              <button type="submit" className="submit-button">Submit</button>  
              </form>
            </div>
        </>,document.querySelector(".portal")
    )
}
export default Model;