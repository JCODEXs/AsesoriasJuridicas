import Image from 'next/image';
import classes from './logo.module.css';

function Logo() {
  return <div className={classes.logo}>

        <Image
          src='/images/site/icono.png'
          alt='Pensiones Colombianos'
          width={80}
          height={80}
        /> 
     
  </div>;
}

export default Logo;