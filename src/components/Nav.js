import React,{useState,useEffect} from 'react'
import './Nav.css';

function Nav() {
    const [show,setShow] = useState(false)

    useEffect(()=>{
        window.addEventListener("scroll",()=>{
            if(window.scrollY>500){
                setShow(true)
            }
            else{
                setShow(false)
            }
        })
    },[])

console.log(show);
  return (
    <div className={`nav ${show && 'nav_black'}`}>
        <img 
        style={{width:'150px'}}
        src='https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png'
        alt='Netflix logo'
        />
    </div>
  )
}

export default Nav