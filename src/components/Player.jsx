import { useState,useRef } from "react";
export default function Player() {
  const [name,setName]=useState("");
  const inputName=useRef();
  function handleClick(){
    setName(inputName.current.value);
  }
  return (
    <section id="player">
      <h2>Welcome {name?name:"Unknown Entity"}</h2>
      <p>
        <input type="text" ref={inputName}/>
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>  
  );
}
