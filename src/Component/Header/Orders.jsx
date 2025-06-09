

export default function OrdersC({data}){
    //const {Orders}=useContext(FoodContext)
    
    
    return(
        <div>
            {data.length > 0 && data.map((item,index)=>{
                return(
                    <ul className="orderbord" key={index}>
                        {item.items.map(items=>{
                            return(
                               <div key={items.id} className="orderlist">
                                    <img src={`http://localhost:3000/${items.image}`}/>
                                    <li>{items.name}</li>
                                    <p>*  {items.Selected}</p>
                                    <h3>{items.price*items.Selected}$</h3>
                               </div>
                            )
                        })}
                    </ul>
                )
            })}
        </div>
    )
}