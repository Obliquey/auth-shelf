const things = (state=[], action) =>{
    switch (action.type){
        case 'SET_THINGS':
            return action.payload;
        default:
            return state
    }
};
export default things;