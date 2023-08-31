import Image from 'next/image';

import classes from './hero.module.css';

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src='/images/site/edgar.png'
          alt='An image showing Max'
          width={300}
          height={300}
        />
      </div>
      <h1>Hola soy Edgar Tabares </h1>
      <h3>Nos encargamos de que tengas tranquilidad en tu retiro!</h3>
      <p>
      Somos un equipo de profesionales jurídicos especializados en el complejo mundo de las pensiones. Nuestra misión es brindarte asesoramiento experto y soluciones legales sólidas para garantizar que obtengas los beneficios de pensión que te corresponden.
      </p>
    </section>
  );
}

export default Hero;