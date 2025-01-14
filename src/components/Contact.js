import React from "react";
import { FiMail } from "react-icons/fi";
import { FaWhatsapp, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Contact() {
  const email = "dosreistha@gmail.com";
  const whatsappPhone = process.env.REACT_APP_WHATSAPP_PHONE;
  return (
    <div
      className="section bg-soft-gray rounded-t-[75px] md:rounded-t-[100px] lg:rounded-t-[200px] overflow-hidden"
      id="contact"
    >
      <div className="container mx-auto">
        <div className="container text-center">
          <h1 className="uppercase font-extrabold text-[35px] md:text-[60px] lg:text-[100px] leading-[0.8] my-10">
            Let's <span className="font-newyork">Connect</span>
          </h1>
          <div className="flex items-center justify-center gap-5 text-xs">
            <div className="flex items-center gap-3">
              <button
                onClick={() => (window.location.href = `mailto:${email}`)}
                className="flex items-center gap-2 px-6 py-3 border-2 border-neutral-light rounded-full bg-black text-white hover-underline"
              >
                <FiMail size={15} />
                Email
              </button>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() =>
                  (window.location.href = `https://wa.me/${whatsappPhone}`)
                }
                className="flex items-center gap-2 px-6 py-3 border-2 border-neutral-light rounded-full bg-off-white text-text-dark hover-underline"
              >
                <FaWhatsapp size={15} />
                WhatsApp
              </button>
            </div>
          </div>
        </div>
        <div className="mt-10 text-sm">
          <div className="flex-grow border-t-2 border-neutral-light"></div>
          <div className="flex justify-between items-center">
            <span>© 2024 Thalita dos Reis</span>
            <div className="flex items-center my-5 gap-3 text-sm">
              {/* Large Screen: Show Text-Links */}
              <div className="hidden lg:flex gap-3">
                <a
                  href="https://www.linkedin.com/in/thalitadosreis/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover-underline"
                  aria-label="LinkedIn profile"
                >
                  LinkedIn
                </a>
                /
                <a
                  href="https://github.com/ThalitadosReis"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover-underline"
                  aria-label="GitHub profile"
                >
                  GitHub
                </a>
              </div>

              {/* Small Screen: Show Icons */}
              <div className="flex lg:hidden gap-3">
                <a
                  href="https://www.linkedin.com/in/thalidadosreis/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-off-white"
                  aria-label="LinkedIn profile"
                >
                  <FaLinkedin size={20} alt="LinkedIn icon" />
                </a>
                <a
                  href="https://github.com/ThalitadosReis"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-off-white"
                  aria-label="GitHub profile"
                >
                  <FaGithub size={20} alt="GitHub icon" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
