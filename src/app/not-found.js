"use client";
import Image from "next/image";

export default function NotFoundPage() {
  return (
    <div
      className="box"
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        padding: "1rem",
        backgroundColor: "#f4f4f9",
      }}
    >
      <h1 style={{ fontSize: "3rem", color: "#ff6f61", marginBottom: "1rem" }}>
        404 - PAGE NOT FOUND
      </h1>
      <Image
        src="/images/page_not_found.webp"
        alt="Working on it"
        width={400}
        height={400}
        style={{ maxWidth: "300px", marginBottom: "2rem" }}
      />
      <button
        onClick={() => (window.location.href = "/")}
        style={{
          padding: "0.75rem 1.5rem",
          fontSize: "1rem",
          backgroundColor: "#ff6f61",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          transition: "background-color 0.3s ease",
        }}
        onMouseOver={(e) => (e.target.style.backgroundColor = "#e85a50")}
        onMouseOut={(e) => (e.target.style.backgroundColor = "#ff6f61")}
      >
        Go Back Home
      </button>
    </div>
  );
}
