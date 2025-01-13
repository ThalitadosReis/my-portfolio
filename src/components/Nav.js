import React, { useState } from "react";
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
    <nav className="w-full pt-5 bg-[#ecebea]">
      <div className="container mx-auto flex justify-between">
        <div className="w-full backdrop-blur-2xl rounded-full flex gap-3 items-center text-xs">
          <div className="flex items-center gap-3 border rounded-full border-gray-200 p-0.5">
            <span className="px-3 text-xs">{email}</span>
            <button
              onClick={copyToClipboard}
              className={`px-8 py-4 rounded-full focus:outline-none transition-all 
                ${copied ? "bg-black text-white" : "bg-white"}`}
            >
              {copied ? "Copied" : "Copy"}
            </button>
          </div>
          <a
            className="px-9 py-4 rounded-full focus:outline-none transition-all bg-white"
            href={CV}
            target="_blank"
            rel="noopener noreferrer"
          >
            CV
          </a>
        </div>
        <div className="flex gap-3 items-center text-sm">
          <a
            href="https://www.linkedin.com/in/thalitadosreis/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          /
          <a
            href="https://github.com/ThalitadosReis"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </div>
      </div>
    </nav>
  );
}
