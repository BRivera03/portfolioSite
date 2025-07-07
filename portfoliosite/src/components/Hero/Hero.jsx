import React from 'react';
import styles from './Hero.module.css'; 
import { getImageUrl } from '../../utils';

export const Hero = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
             <h1 className={styles.title}>Hi, I'm Bryan</h1>   
             <p className={styles.description}>I'm a web developer specializing in front-end development. 
                <br></br>
                I create engaging user interfaces and seamless user experiences using React.js.
                <br></br>
                <br></br>
                Reach out if you'd like to learn more!
             </p>
             <a className={styles.contactBtn} href="mailto:bryanrivera2325@gmail.com">Contact Me</a>
            </div>
        <img src={getImageUrl("hero.jpg")} alt="Bryan" className={styles.heroImg}/>
        <div className={styles.topBlur}/>
        <div className={styles.bottomBlur}/>
        </section>
    )
}