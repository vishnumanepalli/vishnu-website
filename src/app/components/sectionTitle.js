// components/SectionTitle.js
"use client";

import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { handleSmoothScroll } from "../utils/utils";

export default function SectionTitle({ title, id }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <h2
      className="section-title heading-section"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <a
        href={`/#${id}`}
        className="href-link"
        onClick={handleSmoothScroll(id)}
      >
        {title}
        {isHovered && (
          <FontAwesomeIcon
            icon={faLink}
            width="0.9em"
            height="0.9em"
            className={`link-icon ${isHovered ? "hovered" : ""}`}
          />
        )}
      </a>
    </h2>
  );
}
