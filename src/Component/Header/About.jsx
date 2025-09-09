import { useDispatch, useSelector } from "react-redux"
import Modal from "../UI/Modal"
import { ModalAction } from "../../store/Modal-Slice"

export default function About(){
    const ModalStatus=useSelector(store=>store.Modal.modalStatus)
    const dispatch=useDispatch()
    return(
        <>
            {ModalStatus==="About" &&
            <Modal>
                <h2>About</h2>
                <h3>Number : 09197038720</h3>
                <h3>GitHub : <a href="https://github.com/Mohamad9-P">Mohamad9-P</a></h3>
                <div className="buttons">
                    <button onClick={()=>dispatch(ModalAction.closing())} className="close">Close</button>
                </div>
            </Modal>

            }
        </>
    )
}