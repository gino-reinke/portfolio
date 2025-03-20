import React from 'react'
import { getImageUrl } from '../../utils'
import styles from './About.module.css'

export const About = () => {
  return (
    <section className={styles.container} id="about">
        <h2 className={styles.title}>About</h2>
        <div className={styles.content}>
            <ul className={styles.aboutItems}> 
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("cursorIcon.png")} alt="Cursor Icon" />
                    <div className={styles.aboutItemText}>
                        <h3>Frontend Developer</h3>
                        <p>Experienced with building responsive, optimized websites, and cross-platform applications</p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/serverIcon.png")} alt="Server Icon" />
                    <div className={styles.aboutItemText}>
                        <h3>Backend Developer</h3>
                        <p>Experienced with building backend systems and integrating APIs</p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/uiIcon.webp")} alt="UI Icon" />
                    <div className={styles.aboutItemText}>
                        <h3>UI Designer</h3>
                        <p>Experienced with designing landing pages and design systems</p>
                        <a href="https://www.figma.com/@ginoreinke" target="_blank" rel="noopener noreferrer">View my Figma profile</a>
                    </div>
                </li>
            </ul>
        </div>
    </section>
  )
}
