import React from "react";

export default function Footer() {
  return (
    <footer className="px-4 text-center text-gray-700 dark:text-white/70 text-xl">
      <small className="pb-10 block">
        &copy; {new Date().getFullYear()}{" "}
        <a
          href="https://julievoixoff.com"
          className="hover:underline transition duration-300"
        >
          Julie Voix Off
        </a>{" "}
        | Tous droits réservés | Design by{" "}
        <a
          href="https://studio-126.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="hover:underline transition duration-300">
            Studio 126
          </span>
        </a>
      </small>
    </footer>
  );
}
