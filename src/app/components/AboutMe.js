"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import Image from "next/image";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import "./AboutMe.css";

export default function AboutMe({ about, personalInfo }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section id="about" className="about-section">
      <h2
        className="about-title"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <a href="#about" className="about-link">
          About Me
          {isHovered && (
            <FontAwesomeIcon
              icon={faLink}
              width="0.9em"
              height="0.9em"
              className={`about-link-icon ${isHovered ? "hovered" : ""}`}
            />
          )}
        </a>
      </h2>
      <div className="about-content">
        <div className="about-image">
          <div className="image-wrapper">
            <Image
              src={about.image}
              alt="Profile Picture"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
        <div className="about-details">
          <p className="about-description">{about.description}</p>
          <div>
            <h3 className="interests-title">Interests & Skills</h3>
            <p>Interests: {about.interests}</p>
            <p>Skills: {about.skills}</p>
            <p>Languages: {about.languages}</p>
            <p>Hobbies: {about.hobbies}</p>
          </div>
        </div>
      </div>
      <div className="contact-info">
        <h3 className="contact-title">Contact Information</h3>
        <div className="grid-container">
          <div className="personal-info">
            <p>
              <strong>Full Name: </strong>
              {personalInfo.name}
            </p>
            <p>
              <strong>Email: </strong>
              {personalInfo.email}
            </p>
            <p>
              <strong>Phone: </strong>
              {personalInfo.phone}
            </p>
            <p>
              <strong>Residence: </strong>
              {about.residence}
            </p>
          </div>
          <div className="connect-info">
            <h4 className="connect-title">
              <strong>Connect with me:</strong>
            </h4>
            <div className="flex flex-wrap gap-4">
              <a href={personalInfo.github} className="social-link">
                GitHub
              </a>
              <a href={personalInfo.website} className="social-link">
                Website
              </a>
              <a href={personalInfo.linkedin} className="social-link">
                LinkedIn
              </a>
              <a href={about.resume_link} className="social-link">
                Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
