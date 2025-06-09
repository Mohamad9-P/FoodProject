// import { useCallback, useContext, useEffect, useState } from "react";
// import Modal from "../UI/Modal";
// import { FoodContext } from "../../Context/CartContext";
// import Buttons from "../UI/Buttons";
// import Timer from "./Timer";

// const Comparison=[["paper","rock"],["rock","Scissors"],["Scissors","paper"]]

// const RPS=["paper","rock","Scissors"]
// export default function Game(){
//     const {openModal,handelCloseModal}=useContext(FoodContext)
//     const [gameClick,setGameClick]=useState({
//         Players:[],
//         Result:[]
//     })
//     const  [startGame, setstartGame] = useState(false);
//     function handelgameStart(){
//         setstartGame(itme=>!itme)
//     }
//     const HandelButtonGame=useCallback(
//         function HandelButtonGame(click){
//             const random=Math.floor(Math.random() * 3)
//             setGameClick(item=>{
//                 let update={...item,Players:[click,RPS[random]]}
                
//                 const find=Comparison.find(prev=>prev[0]===update.Players[0] && prev[1]===update.Players[1])
//                 console.log(find)
//                 if(find){
//                     return update={...update,Result:[...update.Result,"Win"]}
//                 }
//                 if(update.Players[0]===update.Players[1]){
//                     return update={...update,Result:[...update.Result,"Draw"]}
//                 }
//                 else if(!find){
//                     return update={...update,Result:[...update.Result,"Lost"]}
//                 }
//                 return update   
//             }) 
//         }
//     ,[])
    
//     return(
//         <>
//         {openModal==="game" && <Modal>
//                 {!startGame && <div className="welcomgame">
//                     <h2>Welcome!</h2>
//                     <button onClick={handelgameStart}>Start</button>
//                     <p>You can play 3 times a day and win free food.</p>
//                     </div>
//                 }
//                 {
//                     startGame &&
//                     <div className="all-game">
//                         <p>You have 3 chances.</p>
//                             <div className="circle">
//                                 <ul>
//                                     <li className={gameClick.Result[0]}><span></span></li>
//                                     <li className={gameClick.Result[1]}><span></span></li>
//                                     <li className={gameClick.Result[2]}><span></span></li>
//                                 </ul>
//                                 {(gameClick.Result.length<3 && gameClick.Result.length >0)&& <Timer timer={3000} setGameClick={setGameClick} key={gameClick.Result}/>}
//                                 {
//                                     gameClick.Result.length >2 && 
//                                     <div className="LostOrWin">{gameClick.Result.filter(prev=>prev==="Win").length ===3 ?
//                                          <span><img src="../public/win.png"/><h3>Win</h3></span> :
//                                          <span><img src="../public/lost.png"/><h3>Lost</h3></span>}
//                                     </div>
//                                 }
//                             </div>
                            
//                             {gameClick.Result.length < 3 &&<><div className="box-game">
//                                 <div className="player-box">
//                                     {gameClick.Players.length>0 && <img src={`../public/${gameClick.Players[0]}.png`}/>}
//                                 </div>
//                                 <div className="time-box">

//                                 </div>
//                                 <div className="bot-box">
//                                     {gameClick.Players.length>0 && <img src={`../public/${gameClick.Players[1]}.png`}/>}
//                                 </div>
//                             </div>
//                         <div className="buttons-game">
//                             <button disabled={gameClick.Players.length>0} onClick={()=>HandelButtonGame("rock")}><img src="../public/rock.png"/></button>
//                             <button disabled={gameClick.Players.length>0} onClick={()=>HandelButtonGame("Scissors")}><img src="../public/Scissors.png" /></button>
//                             <button disabled={gameClick.Players.length>0} onClick={()=>HandelButtonGame("paper")}><img src="paper.png"/></button>

//                         </div></>}
//                     </div>
//                 }
//                 <Buttons type="button" className="close" onClick={()=>handelCloseModal(false)} >Close</Buttons>     

//         </Modal>}
//         </>
//     )
// }