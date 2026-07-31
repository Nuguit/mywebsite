import React from "react";
import { Link } from "react-router-dom";
import useBreadcrumbs from "../../lib/useBreadcrumbs";

const Breadcrumbs = ({ current }) => {
  const { crumbs } = useBreadcrumbs(current);

  if (crumbs.length < 2) return null;

  return (
    <nav
      aria-label="breadcrumb"
      style={{
        padding: "14px 20px 0",
        maxWidth: "1100px",
        margin: "0 auto",
        width: "100%",
        boxSizing: "border-box",
      }}
    >
      <ol
        style={{
          listStyle: "none",
          display: "flex",
          flexWrap: "wrap",
          gap: "6px",
          margin: 0,
          padding: 0,
          fontFamily: "'Space Mono', monospace",
          fontSize: "0.68rem",
          letterSpacing: "1px",
          color: "#8892b0",
        }}
      >
        {crumbs.map((c, i) => (
          <li key={c.path} style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            {i > 0 && <span style={{ color: "rgba(255,255,255,0.15)" }} aria-hidden="true">/</span>}
            {i === crumbs.length - 1 ? (
              <span aria-current="page" style={{ color: "#00e5a0" }}>{c.name}</span>
            ) : (
              <Link to={c.path} style={{ color: "#8892b0", textDecoration: "none" }}>{c.name}</Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
