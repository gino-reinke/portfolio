import React from 'react'
import styles from './Hero.module.css'
import { getImageUrl } from '../../../utils'

export const Hero = () => {
  return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi, I'm Gino</h1>
            <p className={styles.description}>Computer Science 
                B.S. Expected May 2025
                Wayne State University</p>
            <a href="mailto:gino@wayne.edu" className={styles.contactBtn}>Contact Me</a>
        </div>
        <img src={getImageUrl("hero/portfolio_portrait_01.png")} alt="Personal Portrait" className={styles.heroImg}/>
            <div className={styles.topBlur} />
            <div className={styles.bottomBlur} />
    </section>
  )
}
