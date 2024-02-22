import { forwardRef, useImperativeHandle, useRef } from "react"

const ResultModal= forwardRef(function ResultModal({timeRemaining,targetTime,onReset},ref){
    const dialog=useRef();
    useImperativeHandle(ref,()=>{
        return {
        open() {
            dialog.current.showModal();
        }
    }
    })
    let formattedTimeRemaining=(timeRemaining/1000).toFixed(2);
    let result;
    if(timeRemaining<=0)
    result="lost";
else
    result="won";
    return (
     <dialog className="result-modal" ref={dialog}>
        <h2>You {result}</h2>
        <p>
            The target time was <strong>{targetTime}</strong> seconds.
        </p>
        <p>
            You stopped the timer with <strong>{formattedTimeRemaining} seconds left</strong>
        </p>
        <form method="dialog" onSubmit={onReset}>
            <button>Close</button>
        </form>
    </dialog>
    )
})
export default ResultModal;