import React from "react";

const FormHeader = () => {
  return (
    <div
      className="py-4 sticky top-0
    md:py-0
    px-4
    text-lg text-gray-700
    bg-white"
    >
      <div className="flex justify-between">
        <div className="flex space-x-7">
          <img
            src="/logo-round.svg"
            alt="logo"
            width="50"
            className="hover:blue-300"
          />
        </div>
        <div className="hidden md:flex items-center space-x-3">
          <p className="font-bold">share your story</p>
          <button className="bg-blue-900 hover:bg-blue-800 text-white font-bold px-4">
            Support
          </button>
        </div>
      </div>
    </div>
  );
};

export default FormHeader;
