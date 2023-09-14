import { AppBar, Toolbar, styled, Typography } from '@mui/material'
import React from 'react'

const Navbar = () => {

// Styling for our custom toolbar
const StyledToolBar=styled(Toolbar)({
  display:"flex",
  justifyContent:"space-between"
})


  return (
      <AppBar position="sticky" >
        <StyledToolBar>
          <Typography variant="h6" >
          Navbar
          </Typography>
        </StyledToolBar>
      </AppBar>
  )
}

export default Navbar
