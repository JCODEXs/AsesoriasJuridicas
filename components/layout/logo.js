import Image from 'next/image';
import classes from './logo.module.css';

function Logo() {
  return <div className={classes.logo}>

        <Image
          src='/images/site/icono2.png'
          alt='Pensiones Colombianos'
          width={107}
          height={95}
        /> 
     
  </div>;
}

export default Logo;