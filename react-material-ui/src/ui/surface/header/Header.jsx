import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import { Home } from '@mui/icons-material'

export default function Header (){
    return (
        <AppBar >
        <Toolbar>
          <IconButton size='Large' color='inherit' sx={{ mr: 2}}>
            <Home/>
          </IconButton>
          <Typography>HOME</Typography>
        </Toolbar>
      </AppBar>
    );
}