// import { useEffect, useState } from "react"

// export default function Timer({setGameClick,timer}){
//     const [timeRemaning,settimeRemainig]=useState(timer)
//     useEffect(()=>{
//         const Timeout=setTimeout(()=>{
//             setGameClick(item=>{return{Players:[],Result:[...item.Result]}})
            
//         },timer)
//         return ()=>{
//             clearTimeout(Timeout)
//         }
//     },[])
//     useEffect(() => {
//         const intervalId = setInterval(() => {
//           settimeRemainig(prevCount =>{
//             if(prevCount<=0){
//                 clearInterval(intervalId)
//                 return 0;
//             }
//             return prevCount - 100;
//           });
//         }, 100);
//         return () => clearInterval(intervalId);
//       }, []);
//     //console.log(timeRemaning)
//     return (<>{timeRemaning>0&&<div className="progress"><progress max={timer} value={timeRemaning}/></div>}</>)
// }