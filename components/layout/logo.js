import Image from 'next/image';
import classes from './logo.module.css';

function Logo() {
  return <div className={classes.logo}>

        <Image
          src='/images/site/icono.png'
          alt='Pensiones Colombianos'
          width={100}
          height={100}
        /> 
     
  </div>;
}

export default Logo;