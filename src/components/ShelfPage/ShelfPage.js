import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

function ShelfPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    fetchThings();
  }, [])
  
  const fetchThings = () => {
    dispatch({
      type: 'SAGA/FETCH_THINGS'
    })
  }

  return (
    <div className="container">
      <h2>Shelf</h2>
      <p>All of the available items can be seen here.</p>
    </div>
  );
}

export default ShelfPage;
