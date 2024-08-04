import React from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

function Contact(){
  return (
      <div className="text-center flex flex-col gap-5 max-[426px]:mt-44 h-auto my-20" id="contact">
        <div className="text-5xl mb-5 max-[500px]:text-3xl max-[500px]:mb-5">Contact Me ☎️</div>
        <p className="text-gray-400 text-base">
          DISCUSS A PROJECT OR JUST WANT TO SAY HI? MY INBOX IS OPEN FOR ALL.
        </p>
        <a href="tel:+917302504451" className="text-gray-400 text-2xl hover:text-white">+91 7302504451</a>
        <a href="mailto:jalajpandey123@gmail.com" className="text-gray-400 text-2xl hover:text-white">jalajpandey123@gmail.com</a>
        <div className="flex justify-center gap-5 mt-10">
          <a href="https://github.com/jalaj-pandey/" target="_blank" className="text-4xl cursor-pointer " rel="noreferrer" >
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/jalaj-pandey/" target="_blank" className="text-4xl cursor-pointer " rel="noreferrer" >
            <FaLinkedin />
          </a>
          <a href="https://www.instagram.com/thejalajpandey/" target="_blank" className="text-4xl cursor-pointer " rel="noreferrer" >
            <FaInstagram />
          </a>
        </div>
      </div>
  )
}

export default Contact;