export const AddProduct = (value) => async dispatch =>{                        
        dispatch({
            type:"ADD",                                        //Action Dispatch    -> Action => based on Type And Payload
            payload: value          //what's the value(Product) you are entering(Adding) in checkbox, that also can be sent
        })                           // we are sending the product also
}
export const RemoveProduct = (value) => async dispatch =>{
    dispatch({
        type:"REMOVE",
        payload: {name:value}
    })
}
