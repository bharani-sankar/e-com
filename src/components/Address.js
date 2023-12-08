import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateUserAddress } from '../actions/userActions';

const AddressComponent = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const [editMode, setEditMode] = useState(false);
  const [editedAddress, setEditedAddress] = useState(user.address);

  const handleEdit = () => {
    setEditMode(true);
  };

  const handleSave = () => {
    const updatedAddress = editedAddress;
    dispatch(updateUserAddress(updatedAddress));
    
    setEditMode(false);
  };
  return (
    <div>
      <h2>Your Address</h2>
      {editMode ? (
        <div>
          <textarea
            rows="4"
            cols="50"
            value={editedAddress}
            onChange={(e) => setEditedAddress(e.target.value)}
          />
          <button onClick={handleSave}>Save</button>
        </div>
      ) : (
        <div>
          <p>{user.address}</p>
          <button onClick={handleEdit}>Edit</button>
        </div>
      )}
    </div>
  );
};

export default AddressComponent;
