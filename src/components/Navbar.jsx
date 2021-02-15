import React from 'react'
import {AppBar, Toolbar, Typography, Button} from '@material-ui/core'

const Navbar = () => {
    return (
        <div>
            <AppBar position="static">
  <Toolbar>
    <Typography variant="h6">
      Marca Random
    </Typography>
    <Button color="teal">Ingreso</Button>
    <Button color="teal">Productos</Button>
    <Button color="teal">Nosotros</Button>
  </Toolbar>
</AppBar>
        </div>
    )
}

export default Navbar