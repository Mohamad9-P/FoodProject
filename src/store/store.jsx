import { configureStore } from "@reduxjs/toolkit";
import { cartData } from "./Carts-Slice";
import { handelingModal } from "./Modal-Slice";



export  const store=configureStore({
    reducer:{Carts:cartData.reducer,Modal:handelingModal.reducer}
})

