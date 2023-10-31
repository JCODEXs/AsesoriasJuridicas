import { Fragment } from "react";

import MainNavigation from "./main-navigation";
import Image from "next/image";

function Layout(props) {
  return (
    <Fragment>
      <MainNavigation />
      <main>{props.children}</main>

      <a
     style={{
      position: 'fixed',
      bottom: '1.2rem',
      right: '1.7rem',
      zIndex: 100
    }}
     target="_blank"
     rel="noopener noreferrer"
        width="50px"
        aria-label="Chat on WhatsApp"
        href="https://wa.me/573167591399"
      >
        {" "}
        <Image
          alt="Chat on WhatsApp"
          src="/images/site/linechat.png"
          width={60}
          height={60}
        />{" "}
      </a>
    </Fragment>
  );
}

export default Layout;
