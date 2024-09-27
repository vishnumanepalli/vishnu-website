export default function Companies() {
  return (
    <section id="companies" className="mb-8">
      <a
        href="/#companies"
        className="href-link"
        onClick={handleSmoothScroll("comapnies")}
      >
        Companies Worked For
        {isHovered && (
          <FontAwesomeIcon
            icon={faLink}
            width="0.9em"
            height="0.9em"
            className={`about-link-icon ${isHovered ? "hovered" : ""}`}
          />
        )}
      </a>
      <p>Mention the companies you have worked for.</p>
    </section>
  );
}
