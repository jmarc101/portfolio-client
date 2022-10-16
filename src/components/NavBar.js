import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const NavBar = () => {

    return (
        <AppBar position="static">
            <Toolbar>
                <Button color="inherit"><Link to="/jobs">Jobs</Link></Button>
                <Button color="inherit"><Link to="/jobs">Companies</Link></Button>
                <Button color="inherit"><Link to="/jobs">Projects</Link></Button>
                <Button color="inherit"><Link to="/jobs">Courses</Link></Button>
            </Toolbar>
        </AppBar>
    )
}

export default NavBar;