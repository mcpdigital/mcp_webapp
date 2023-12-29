import React from "react";
import Image from "next/image";
const footer = () => {
  return (
    <div>
      <footer className="bg-slate-950">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <div className="flex justify-center text-teal-600 sm:justify-start">
              <a href="https://www.mcpdigital.com">
                <Image
                  src="/MCPLogo2016.png"
                  alt="Logo"
                  className="mt-2"
                  style={{ width: "200px" }}
                  width="200"
                  height="150"
                />
              </a>
            </div>

            <p className="mt-4 text-center text-sm text-gray-500 lg:mt-0 lg:text-right">
              Copyright &copy; 2023. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
      <section className="flex  justify-around text-red-700 bg-slate-500 px-10 py-5">
        <p className="">Primeiro</p>
        <p className="">Segundo</p>
        <span className="">Primeiro</span>
        <span className="">Segundo</span>
      </section>
    </div>
  );
};

export default footer;
