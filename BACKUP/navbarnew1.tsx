import React from "react";
import LinkCard from "./LinkCard";

const navbar = () => {
  return (
    <div className="z-10 left-0 top-0 max-h-[25px] min-h-[25px] sm:min-h[25px] lg:min-h-[50px] md:min-h-[50px] sm:max-h-[25px] flex flex-wrap gap-1 align-middle font-mono text-sm bg-gradient-to-b from-[#000000] to-slate-900 hover:from-[#6445ff] hover:to-[#0a0720]">
      <LinkCard href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app">
        NextJS
      </LinkCard>
      <LinkCard href="https://tailwindcss.com/docs/line-height#fixed-line-heights">
        Tailwind
      </LinkCard>
      <LinkCard href="https://www.hyperui.dev/components/marketing/banners#component-2">
        HyperUI
      </LinkCard>
      <LinkCard href="https://freefrontend.com/tailwind-code-examples/">
        FreeFrontEnd
      </LinkCard>
      <LinkCard href="https://ui.shadcn.com/docs">Shadcn/UI</LinkCard>
      <LinkCard href="https://us-east-2.console.aws.amazon.com/amplify/home?region=us-east-2#/">
        AWS Amplify
      </LinkCard>
    </div>
  );
};

export default navbar;
