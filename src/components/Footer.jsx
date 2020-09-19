import React from "react";

function Footer() {
  const time=new Date().getFullYear();
  return (<footer><p>copyright@ {time}</p></footer>);
}

export default Footer;
