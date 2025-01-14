import React, { useState } from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

// copy of cv
import CV from "../assets/cv.pdf";

export default function Nav() {
  const [copied, setCopied] = useState(false);
  const email = "dosreistha@gmail.com";

  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(email)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
      })
      .catch((error) => {
        console.error("Error copying email: ", error);
      });
  };

  return (
    <nav className="w-full pt-5 bg-soft-gray">
      <div className="container flex justify-between items-center mx-auto">
        <div className="flex items-center gap-3 text-xs">
          <div className="flex items-center">
            {/* Large Screen: Show Email and Copy Button */}
            <div className="hidden lg:flex items-center rounded-full border-2 border-neutral-light p-0.5">
              <span className="px-3">{email}</span>
              <button
                onClick={copyToClipboard}
                className={`px-4 py-2 rounded-full focus:outline-none transition-all hover-underline
                ${copied ? "bg-neutral-light text-black" : "bg-off-white"}`}
              >
                {copied ? "Copied!" : "Copy"}
              </button>
            </div>
            {/* Smaller Screen: Show Single Button */}
            <button
              onClick={() => (window.location.href = `mailto:${email}`)}
              className="lg:hidden px-6 py-2 rounded-full border-2 border-neutral-light bg-black text-white hover-underline"
            >
              Email
            </button>
          </div>
          <a
            className="px-6 py-2 rounded-full border-2 border-neutral-light bg-off-white hover-underline"
            href={CV}
            target="_blank"
            rel="noopener noreferrer"
          >
            CV
          </a>
        </div>

        <div className="flex items-center gap-3 text-sm">
          {/* Large Screen: Show Text-Links */}
          <div className="hidden lg:flex gap-3">
            <a
              href="https://www.linkedin.com/in/thalitadosreis/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover-underline"
            >
              LinkedIn
            </a>
            /
            <a
              href="https://github.com/ThalitadosReis"
              target="_blank"
              rel="noopener noreferrer"
              className="hover-underline"
            >
              GitHub
            </a>
          </div>

          {/* Small Screen: Show Icons */}
          <div className="flex lg:hidden gap-3">
            <a
              href="https://www.linkedin.com/in/thalitadosreis/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-off-white"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href="https://github.com/ThalitadosReis"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-off-white"
            >
              <FaGithub size={20} />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
