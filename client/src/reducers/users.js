
const usersReducer = (states= [],action)=>{
    switch (action.type) {
        case 'FETCH_USERS':
            return action.payload;
        case 'UPADATE_CURRENT_USER':
            return states.map((state)=> state._id === action.payload._id ? action.payload : state)
        default:
            return states;
    }
}

export default usersReducer;