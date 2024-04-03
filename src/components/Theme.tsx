import { DarkMode } from '@mui/icons-material'
import React from 'react'

const Theme = () => {
  return (
    <button style={{
      position: 'fixed',
      marginTop: "10px",
      marginLeft: "1450px",
      cursor: "pointer"
    }}>
      <DarkMode/>  
    </button>
  )
}

export default Theme
