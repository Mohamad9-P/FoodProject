

export default function Buttons({children,...props}){
    return(
        <>
        <div  className="buttons">
            <button {...props}>{children}</button>
        </div>
            
        </>
    )
}