import React from "react";

const Footer = () => {
  return (
    <section className="c-space pt-7 pb-3 b0rder-t border-black-300 flex justify-between items-center flex-wrap gap-5">
      <div className="text-white-500 flex gap-2">
        <p>Terms & Conditions</p>
        <p>|</p>
        <p>Privacy Policy</p>
      </div>
      <div className="flex gap-3">
        <a
          href="https://github.com/rishigovind-tech"
          target="_blank"
          rel="github"
          className="social-icon"
        >
          <img src="/assets/github.svg" alt="GitHub" className="w-1/2 h-1/2" />
        </a>

        <a
          href="https://www.linkedin.com/in/rishi-govind/"
          target="_blank"
          rel="linkedin"
          className="social-icon"
        >
          <img
            src="/assets/linkedin.svg"
            alt="LinkedIn"
            className="w-1/2 h-1/2"
          />
        </a>

        <a
          href="https://www.instagram.com/__rg_74__"
          target="_blank"
          rel="instagram"
          className="social-icon"
        >
          <img
            src="/assets/instagram.svg"
            alt="Instagram"
            className="w-1/2 h-1/2"
          />
        </a>
      </div>

      <p className="text-white-500">© 2025 Rishi Govind.All rights reserved.</p>
    </section>
  );
};

export default Footer;
