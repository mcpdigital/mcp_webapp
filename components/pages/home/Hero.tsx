import React from "react";
const hero = () => {
  return (
    <div>
      <div className="bg-gray-900 text-white mx-auto">
        <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:items-center">
          <div className="mx-auto max-w-xl text-center">
            <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
              My Future Portfolio...
              <span className="min-h-[4rem] mt-1 sm:block">
                {" "}
                Enjoy the Demo.{" "}
              </span>
            </h1>

            <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
              Adding new components everyday
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                className="block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
                href="/GithubUsers"
              >
                Github Users <br /> Component
              </a>

              <a
                className="block w-full rounded border border-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
                href="/gh-user-page"
              >
                Github Users <br />
                Page
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default hero;
