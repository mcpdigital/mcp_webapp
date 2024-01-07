import React from "react";
const navlink =
  "hover:text-sky-400  hover:backdrop-brightness-75 rounded-sm md:rounded-lg min-h[25px] max-h-[25px] sm:min-h[25px] lg:min-h-[50px] md:min-h-[50px] sm:max-h-[25px] md:p-4 p-1 sm:p-1";

const navbar = () => {
  return (
    <div className="z-10 left-0  top-0 text-slate-200 rounded-lg max-h-[25px] min-h-[25px] sm:min-h[25px] lg:min-h-[50px]  md:min-h-[50px] sm:max-h-[25px] flex flex-wrap gap-1 align-middle font-mono text-sm bg-gradient-to-b from-[#000000]  to-slate-900 hover:from-[#06066a] hover:to-[#0a0720] ">
      <a
        className={navlink}
        href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        NextJS
      </a>
      <a
        className={navlink}
        href="https://tailwindcss.com/docs/line-height#fixed-line-heights"
        target="_blank"
        rel="noopener noreferrer"
      >
        Tailwind
      </a>
      <a
        className={navlink}
        href="https://www.hyperui.dev/components/marketing/banners#component-2"
        target="_blank"
        rel="noopener noreferrer"
      >
        HyperUI
      </a>
      <a
        className={navlink}
        href="https://freefrontend.com/tailwind-code-examples/"
        target="_blank"
        rel="noopener noreferrer"
      >
        FreeFrontEnd
      </a>
      <a
        className={navlink}
        href="https://ui.shadcn.com/docs"
        target="_blank"
        rel="noopener noreferrer"
      >
        Shadcn/UI
      </a>
      <a
        className=" hover:text-sky-400 hover:backdrop-brightness-75 rounded-sm md:rounded-lg min-h[25px] max-h-[25px] sm:min-h[25px] lg:min-h-[50px]  md:min-h-[50px] sm:max-h-[25px] md:p-4 p-1 sm:p-1"
        href="https://us-east-2.console.aws.amazon.com/amplify/home?region=us-east-2#/"
        target="_blank"
        rel="noopener noreferrer"
      >
        AWS Amplify
      </a>
    </div>
  );
};

export default navbar;
