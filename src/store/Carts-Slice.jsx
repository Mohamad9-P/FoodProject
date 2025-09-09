import { createSlice } from "@reduxjs/toolkit"

export const cartData=createSlice({
    name:"Data",
    initialState:{CartMeals:[],CartOrders:[],Search:""},
    reducers:{
        addCart(state,action){
            let cart=[...state.CartMeals]
            const cartindex=cart.findIndex(prev=>prev.id===action.payload.id)
            if(cartindex!==-1){
                const update={
                    ...action.payload,
                    Selected:cart[cartindex].Selected+1,
                }
                cart[cartindex]=update
            }else if(cartindex===-1){
                cart.push({
                    ...action.payload,
                    Selected:1
                })
            }
            state.CartMeals=cart
        },
        removeCart(state,action){
            let carts=[...state.CartMeals]
           const index=state.CartMeals.findIndex(prev=>prev.id===action.payload.id) 

            if(action.payload.Selected!==1){
                carts[index]={...action.payload,Selected:action.payload.Selected - 1}
            }else if(action.payload.Selected===1){
                carts=state.CartMeals.filter(prev=>prev.id!==action.payload.id)
            }

            state.CartMeals=carts;
        },
        addOrders(state,action){
            state.CartOrders=[...state.CartOrders,action.payload]
            state.CartMeals=[]
            
        },
        handelSearch(state,action){
            state.Search=action.payload
        }

    }

})
export const CartAction=cartData.actions