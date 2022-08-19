
import React,{useState,useEffect} from 'react'
 
const Button = (e) => {
   const [color, setColor] = useState("blue")
    const changeColor = ()=>{
        console.log("color has changed")
        setColor("red")
    }

    useEffect(() => {
      set
        return () => {
          setColor("black") 
      }
    }, [])
    
  return (
    <div>
        <button style={{"backgroundColor":`${color}`}} onClick={changeColor}>this is button</button>
    </div>
  )
}

export default Button