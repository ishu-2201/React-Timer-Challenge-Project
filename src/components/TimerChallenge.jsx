import { useRef, useState } from "react"
import ResultModal from "./ResultModal";
export default function TimerChallenge({title,targetTime}){
    const timer=useRef();
    const dialog=useRef();
    const [timeRemaining,setTimeRemaining]=useState(targetTime*1000);
    let timerIsActive=timeRemaining>0 && timeRemaining<targetTime*1000;
    if(timeRemaining<=0)
    {   clearInterval(timer.current);
        dialog.current.open();
    }
    function handleStart(){
        timer.current= setInterval(() => {
            setTimeRemaining((prevTimeRemaining)=>{
                return prevTimeRemaining-10;
            })
         }, 10);
    }
    function handleStop(){
        clearInterval(timer.current);
        dialog.current.open();
    }
    function resetTime(){
        setTimeRemaining(targetTime*1000);
    }
    return (
    <>
  <ResultModal timeRemaining={timeRemaining} targetTime={targetTime} onReset={resetTime} ref={dialog}/>
    <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
            {targetTime} second{targetTime>1? 's':''}
        </p>
        <p>
            <button onClick={timerIsActive? handleStop:handleStart}>
                {timerIsActive?'Stop Challenge':'Start Challenge'}
                </button>
        </p>
        <p className={timerIsActive?'active':undefined}>
           {timerIsActive?'Timer is running...':'Timer Inactive'} 
        </p>
    </section>
    </>
    )
}