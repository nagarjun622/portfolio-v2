import React, { useRef } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import profileImg from "../assets/profile.jpg";

function Home() {
  const toolkitRef = useRef(null);
  const contactRef = useRef(null);
  const navigate = useNavigate();

  return (
    <div>

      {/* ================= HERO ================= */}
      <section className="hero">
        <div className="hero-box">

          <motion.div
            className="hero-text"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h1>Hello,</h1>
            <h1 style={{ color: "#ffa41c" }}>I'm Nagarjun Maharana</h1>

            <p>
              Computer Science student at <b>Mahindra University</b> with a strong interest
              in Data Science and Machine Learning. I enjoy working with real-world datasets,
              building models, and extracting meaningful insights.

              Currently exploring predictive modeling, data visualization, and real-world AI
              applications.
            </p>

            <button
              className="btn"
              onClick={() =>
                toolkitRef.current.scrollIntoView({ behavior: "smooth" })
              }
            >
              Scroll ↓
            </button>
          </motion.div>

          <motion.img
            src={profileImg}
            alt="profile"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
          />

        </div>
      </section>

      {/* ================= TOOLKIT ================= */}
      <section ref={toolkitRef} className="section">
        <div className="section-box">

          <h1>Toolkit</h1>

          <div className="tags">
            <span>Python</span>
            <span>Machine Learning</span>
            <span>Pandas</span>
            <span>NumPy</span>
            <span>SQL</span>
            <span>C Language</span>
            <span>Git & GitHub</span>
            <span>HTML</span>
            <span>CSS</span>
            <span>React</span>
            <span>Data Visualization</span>
            <span>EDA</span>
            <span>Matplotlib</span>
            <span>Scikit-learn</span>
          </div>

          <button
            className="btn"
            onClick={() =>
              contactRef.current.scrollIntoView({ behavior: "smooth" })
            }
          >
             Next ↓
          </button>

        </div>
      </section>

      {/* ================= CONTACT ================= */}
      <section ref={contactRef} className="section">
        <div className="section-box">

          <h1 className="contact-title">Contact</h1>

          <h1 className="big-heading">
            Let’s <span>talk.</span>
          </h1>

          <p className="section-desc">
            I'm open to internships, collaborations, and good conversations about data,
            models, and building things that matter.
            The fastest way to reach me is email — pick a channel below.
          </p>

          <p className="email-text">
             <b>Email:</b>{" "}
             <a
             href="mailto:nagarjunmaharana09@gmail.com" >
             nagarjunmaharana09@gmail.com
             </a>
          </p>

          <div className="contact-icons">
            <a href="https://github.com/nagarjun622" target="_blank" rel="noreferrer">
              <FaGithub />
            </a>

            <a href="https://www.linkedin.com/in/nagarjun-maharana-362218220/" target="_blank" rel="noreferrer">
              <FaLinkedin />
            </a>
          </div>

         <div className="contact-buttons">

         <a href="/Resume.pdf" download>
          <button className="btn">Download Resume</button>
         </a>

        <button
          className="btn"
          onClick={() => navigate("/projects")}
        >
        See my work ➜
        </button>

       </div>        
      </div>
      </section>

    </div>
  );
}

export default Home;