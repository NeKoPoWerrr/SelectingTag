import React, { useState } from "react"
import { Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import CloseIcon from '@material-ui/icons/Close';

const SelectedTag = (data) =>{
  const { prop, setSelectedTag, selectedTag} = data
  const tagHandler = (prop) => {
    setSelectedTag(selectedTag.filter((el)=>{
      return el !== prop
    }))
  }

  return(
    <>    
    <Button variant="contained" color="primary" onClick={()=>tagHandler(prop)}>
      {prop}
      <CloseIcon />
    </Button>
    </>
  )
}

export default SelectedTag