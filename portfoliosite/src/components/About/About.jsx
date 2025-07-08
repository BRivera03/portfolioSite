import React from "react";
import styles from "./About.module.css";
import { getImageUrl } from '../../utils';
import { FaReact } from "react-icons/fa";
import { FaFigma } from "react-icons/fa";

export const About = () => {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>About</h2>

    <div className={styles.content}>
              <img src={getImageUrl("skills.png")} alt="Description of image" className={styles.aboutImage} />

        
        <ul className={styles.skillList}>
            <li className={styles.skill}> <     FaReact className={styles.skillIcon} />
            <div className={styles.skillText}>
               <h3>Front-End Developer</h3>
               <p>
                   with a passion for creating interactive and user-friendly web applications.
                   Skilled in HTML, CSS, JavaScript, and React. Always eager to learn new technologies and improve my skills.
               </p>
               </div>
            </li>

            <li className={styles.skill}> <FaFigma className={styles.skillIcon} />
            <div className={styles.skillText}>
               <h3>UI Designer</h3>
               <p>
                   with a knack for creating visually appealing and user-centric designs.
                   Proficient in Figma, Photoshop, and Procreate. Committed to staying updated with the latest design trends and best practices.
               </p>
               </div>
            </li>

        </ul>
    </div>
  </section>
  );
};
    