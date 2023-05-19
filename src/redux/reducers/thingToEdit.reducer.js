const thingToEdit = (state=[], action) =>{
    switch (action.type){
        case 'THING_TO_EDIT':
            return action.payload;
        default:
            return state
    }
};
export default thingToEdit;