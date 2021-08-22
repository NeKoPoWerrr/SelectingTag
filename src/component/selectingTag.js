import React, { useState } from "react"
import { Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import CloseIcon from '@material-ui/icons/Close';



const SelectingTag = (data) => {
  const { prop, setTag, tag, setSelectedTag, selectedTag} = data
  const tagHandler = (prop) => {
    setTag(tag.filter((el)=>{
        return el !== prop
    }))
    selectedTag.push(prop);
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

export default SelectingTag