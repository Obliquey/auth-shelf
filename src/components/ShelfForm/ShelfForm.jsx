import { useState } from "react";
import { useDispatch } from "react-redux";

function ShelfForm () {
    const [thingInput, setThingInput] = useState('');
    const [imgInput, setImgInput] = useState('');
    const dispatch = useDispatch();
    // when user adds an item, we need a function to make a DISPATCH call with the item description and image as payload
    // After the user submits item, page should refresh, i.e. we need to make another dispatch call to fetch the items
 
    const handleClick = (event) => {
        event.preventDefault();
        dispatch({
            type: 'SAGA/ADD_THINGS',
            payload: {name: thingInput, image: imgInput}
        })
        setImgInput('')
        setThingInput('')
    }
    
    return (
    <form>
        <input 
        type="text"
        placeholder="Enter your thing"
        value={thingInput}
        onChange={event => setThingInput(event.target.value)}
        />
        <input 
        type="text"
        placeholder="Enter your image"
        value={imgInput}
        onChange={event => setImgInput(event.target.value)}
        />
        <button onClick={handleClick}>ADD</button>
    </form>
)
}

export default ShelfForm;