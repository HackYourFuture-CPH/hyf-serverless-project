import React from "react";
import {
  FaInstagram,
  FaYoutube,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";

const FormFooter = () => {
  return (
    <div className="flex p-6 justify-between items-center bg-blue-900">
      <div>
        <p className="text-sm text-white">
          Foreningen HackYourFuture | CVR: 38533193 | cph@hackyourfuture.dk
        </p>
      </div>
      <div className="flex justify-between">
        <div className="mr-3">
          <a
            href="https://www.instagram.com/hackyourfuture.dk/"
            target="_blank"
          >
            <FaInstagram color="white" size="1.3rem" />
          </a>
        </div>
        <div className="mr-3">
          <a
            href="https://www.youtube.com/channel/UCgWEvuTAyg7qbWcq0M8w4EQ"
            target="_blank"
          >
            <FaYoutube color="white" size="1.3rem" />
          </a>
        </div>
        <div className="mr-3">
          <a
            href="https://www.facebook.com/hackyourfuturecopenhagen/"
            target="_blank"
          >
            <FaFacebookF color="white" size="1.3rem" />
          </a>
        </div>
        <div className="mr-3">
          <a href="https://twitter.com/HackyourfutureC" target="_blank">
            <FaTwitter color="white" size="1.3rem" />
          </a>
        </div>
        <div className="mr-3">
          <a
            href="https://www.linkedin.com/school/hackyourfuture-denmark/"
            target="_blank"
          >
            <FaLinkedinIn color="white" size="1.3rem" />
          </a>
        </div>
        <div>
          <a href="https://github.com/hackyourfuture-cph" target="_blank">
            <FaGithub color="white" size="1.3rem" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default FormFooter;
