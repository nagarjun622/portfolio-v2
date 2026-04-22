import React from "react";
import { motion } from "framer-motion";

function Projects() {
  return (
    <div id="projects">
      

      {/* TITLE WITH LINE */}
      <h2 className="project-title">Recent Projects</h2>

     <h1 className="big-heading">
     Things I’ve built while <span>learning out loud.</span>
     </h1>

     <p className="section-desc">
      A small but growing collection of my experiments.
      Each project taught me something concrete - about the data, the tools, or my own assumptions.
     </p>


      {/* PROJECT 1 */}
      <motion.div className="project-card" whileHover={{ scale: 1.03 }}>
        
        <p className="project-meta">DATA ANALYSIS • 2025</p>

        {/* LINE INSIDE CARD */}
        <div className="project-line"></div>

        <h3>Tesla – GameStop Stock Analysis</h3>

        <p>
          Comparative time-series exploration of Tesla and GameStop stock data.
          Pulled real-time data using yfinance and analyzed trends, volatility,
          and correlations.
        </p>

        <div className="tags">
          <span>Python</span>
          <span>Pandas</span>
          <span>yfinance</span>
          <span>Matplotlib</span>
        </div>

        <a
          href="https://github.com/nagarjun622/tesla-gamestop-analysis"
          target="_blank"
          rel="noreferrer"
          className="github-link"
        >
          View on GitHub →
        </a>
      </motion.div>

      {/* PROJECT 2 */}
      <motion.div className="project-card" whileHover={{ scale: 1.03 }}>
        
        <p className="project-meta">MACHINE LEARNING • 2025</p>

        {/* LINE INSIDE CARD */}
        <div className="project-line"></div>

        <h3>SpaceX Capstone — End-to-End Data Science</h3>

        <p>
          Built an end-to-end data science pipeline to predict Falcon 9 landing success.
          Performed data cleaning, visualization, and classification using machine learning.
        </p>

        <div className="tags">
          <span>Python</span>
          <span>SQL</span>
          <span>Scikit-learn</span>
          <span>Folium</span>
          <span>Plotly</span>
        </div>

        <a
          href="https://github.com/nagarjun622/SpaceX-capstone-project"
          target="_blank"
          rel="noreferrer"
          className="github-link"
        >
          View on GitHub →
        </a>
      </motion.div>

    </div>
  );
}

export default Projects;