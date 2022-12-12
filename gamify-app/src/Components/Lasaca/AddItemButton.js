import '../../App.css';
import * as React from 'react';
import AddItems from './AddItems.js'
import {IconButton} from "@mui/material";
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';

function AddItemButton(){
  const [showComponent, setShowComponent] = React.useState(false);

  const handleClick = () => {
    setShowComponent(true);
  }

  if (showComponent) {
    return (
      <>
        <AddItems/>
      </>
    );
  }

  return (
    <IconButton className="addButton" aria-label="add" size='small' onClick={handleClick} sx={{color:"white", marginTop:"15px", marginBottom:"250px"}}>
        <AddCircleRoundedIcon fontSize="large" />
      </IconButton>
  );
}

export default AddItemButton;