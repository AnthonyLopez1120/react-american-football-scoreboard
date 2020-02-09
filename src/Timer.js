import React, {useState} from "react";

const Timer = () =>{
    const [gameTimeSeconds, setGameTimeSeconds] =  useState(10);
    const [gameTimeMins, setGameTimeMins] = useState(15);

    const counter =()=>{

        const minCounter =()=>{
    
            setTimeout(()=>{
                    if(gameTimeSeconds === 0 ){
                        setGameTimeMins(gameTimeMins -1 )
                    }
                }, 1000) 
        } 
        setTimeout(()=>{
                if(gameTimeSeconds === 0 ){
                    setGameTimeSeconds(59)
                }else{
                    setGameTimeSeconds(gameTimeSeconds -1)
                }
            }, 1000) 
            return minCounter();
    } 


    return(
        <div>
            <button onClick = {counter()} >gametime {gameTimeMins}:{gameTimeSeconds}</button>
            
            
            {/* <button onClick = {clearTimeout(counter)}>stop time</button> */}
        </div>
    )
}
console.log()

export default Timer
