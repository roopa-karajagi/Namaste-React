import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
    name:'cart',
    initialState:{
        items:[]
    },
    reducers:{
        addCartItem:(state, action) => {
                console.log("state Items" , state.items);
                let existingItem = state.items.find(item => item.id === action.payload.id);
                 console.log("exisiting Item" , existingItem);
                 if(existingItem){
                    existingItem.quantity += 1;
                 }else {
                    state.items = [...state.items , {...action.payload , quantity:1}]

                 }
        },
        removeItem:(state,action)=>{
            state.items = state.items.filter((item,index ) => {
                if(item.id === action.payload && item.quantity > 1){
                    return item.quantity = item.quantity - 1;
                }else {
                    return item.id !== action.payload
                }
                
            });

            //can  also do this
            
            // return {
            //     ...state,
            //     items:state.items.filter((item, index) => item.id !== action.payload)
            // }   
        },
        clearCart:(state)=>{
            state.items=[];
        }
    }
})

export const {addCartItem , removeItem , clearCart} = CartSlice.actions;
export default CartSlice.reducer;

//state --> is previous state
//action: current value of the state
//addCartItem reducers /reduces doesn't return anything , it will just take state and modify it.