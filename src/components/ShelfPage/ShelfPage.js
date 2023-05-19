import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import ShelfForm from '../ShelfForm/ShelfForm'

function ShelfPage() {
  const dispatch = useDispatch();

  const things = useSelector(store => store.things)
  console.log('things from store', things);

  useEffect(() => {
    fetchThings();
  }, [])
  
  // Need to useSelector for our items, so we can map them out on the DOM
  // call to our fetchThings Saga to grab our items from theDB
  const fetchThings = () => {
    dispatch({
      type: 'SAGA/FETCH_THINGS'
    })
  }

  const deleteItem = (id) => {
    dispatch({
      type: 'SAGA/DELETE_THINGS',
      payload: id
    })
  }

  return (
    <div className="container">
      <h2>Shelf</h2>
      <ShelfForm />
      <div>
        <ul>
          {things.map(thing => {
            return (
              <span key={thing.id}>
                <li>
                  {
                    thing.description
                  }
                </li>
                <img src={thing.image_url} />
                <button onClick={() => deleteItem(thing.id)}>❌</button>
              </span>
            )
          })}
        </ul>
      </div>
    </div>
  );
}

export default ShelfPage;
