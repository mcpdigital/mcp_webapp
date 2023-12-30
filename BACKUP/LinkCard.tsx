// CODIGO MODIFICADO SOMENTE PARA PODER NAO TER QUE REPETIR OS className toda vez

import React from "react";
const navlink =
  "hover:text-sky-400 hover:backdrop-brightness-75 rounded-sm md:rounded-lg min-h[25px] max-h-[25px] sm:min-h[25px] lg:min-h-[50px] md:min-h-[50px] sm:max-h-[25px] md:p-4 p-1 sm:p-1";
const LinkCard = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  return (
    <a
      className={navlink}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
};

export default LinkCard;
