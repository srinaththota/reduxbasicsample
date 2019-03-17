const intialState={
    email:'checking',
    password:''
}


const reducer = (state=intialState, action)=>{

    if(action.type === 'LOGIN'){
        return {

            ...state,
           email:action.val
        }
    }
    return state;
}

export default reducer;