import React from "react";
import FeatureCards from "../../ui/FeatureCards";

const FeaturesDiv = () => {
  return (
    <div className="mb-32 grid text-center lg:max-w-5xl lg:mb-0 lg:grid-cols-4">
      <FeatureCards
        href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
        h2="Docs"
        p="Find in-depth information about Next.js features and API."
      />
      <FeatureCards
        href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
        h2="Learn"
        p="Learn about Next.js in an interactive course with quizzes!"
      />

      <FeatureCards
        href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
        h2="Templates"
        p="Explore starter templates for Next.js."
      />

      <FeatureCards
        href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
        h2="Deploy"
        p="Instantly deploy your Next.js site to a shareable URL with Vercel."
      />
    </div>
  );
};

export default FeaturesDiv;
