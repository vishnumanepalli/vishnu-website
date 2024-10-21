// components/SectionTitle.js
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

export default function SectionTitle({ title, id }) {
  return (
    <h2 className="text-2xl font-bold relative group">
      <a
        href={`/#${id}`}
        className="text-blue-500 hover:text-blue-700 relative"
      >
        {title}
        <span className="ml-2"></span>
        <FontAwesomeIcon
          icon={faLink}
          width="0.9em"
          height="0.9em"
          className="ml-2 absolute left-full transform -translate-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        />
      </a>
    </h2>
  );
}
