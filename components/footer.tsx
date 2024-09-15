import React from "react";

export default function Footer() {
  return (
    <footer className=" px-4 text-center text-gray-500">
      <small className="pb-10 block ">
        &copy; {new Date().getFullYear()} Julie Voix-off | Tous droits réservés.
      </small>
    </footer>
  );
}
