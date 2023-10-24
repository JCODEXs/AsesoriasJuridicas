import Link from 'next/link';

import Logo from './logo';
import classes from './main-navigation.module.css';
import FadeMenu from './menu';

function MainNavigation() {
  return (
    <header className={classes.header}>
      <Link href='/'>
        
          <Logo />
       
      </Link>
      <nav>
        <ul>
          {/* <li>
          <Link href='/contact'>Contacto</Link>
          </li> */}
          <li>
          <FadeMenu/>  {/* <Link href='/contact'>Contacto</Link> */}
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;