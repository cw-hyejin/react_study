import Link from 'next/link'
import { AppBar, Toolbar } from '@material-ui/core';
import Logo from './Logo';

const MainNavbar = (props) => (
  <AppBar
    elevation={0}
    {...props}
  >
    <Toolbar sx={{ height: 64 }}>
      <Link href="/">
        <Logo style={{margin:'10px'}} />
      </Link>
      <span> React Study Page </span>
    </Toolbar>
  </AppBar>
);

export default MainNavbar;
