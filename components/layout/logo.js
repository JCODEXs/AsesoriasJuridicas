import Image from 'next/image';
import classes from './logo.module.css';

function Logo() {
  return <div className={classes.logo}>

        <Image
          src='/images/site/icono.png'
          alt='Pensiones Colombianos'
          width={90}
          height={90}
        /> 
     
  </div>;
}

export default Logo;