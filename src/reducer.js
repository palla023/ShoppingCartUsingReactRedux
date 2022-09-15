const initial =[]          //Intialize state variable 

export default function reducer(state = initial,action){
    const {type,payload} = action;               //Destructuring the action     
    switch(type){
        case "ADD":
            return [...state,payload]; //when you are adding new product, previous values not going to miss,for that we are 
                                        //using destructuring and next we are gonna add our new value(payload)
        case "REMOVE":
            return state.filter(product => product.name !== payload.name); //except that payload name remaining all the names(Products) would be there or reassigned to store
        default:
            return state;
    }
}