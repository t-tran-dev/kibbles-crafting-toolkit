import React from "react";
import { Link } from "react-router-dom";

export const Error: React.FC = () => {
  return (
    <div className="error-container">
      <h1>Oops! Something went wrong.</h1>
      <p>We can't seem to find the page you're looking for.</p>
      <Link to="/" className="error-link">
        Go back to Home
      </Link>
    </div>
  );
};
