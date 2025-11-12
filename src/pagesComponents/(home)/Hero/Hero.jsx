'use client'
import styles from './Hero.module.scss'
import { useEffect, useState } from 'react'
import slider from './Slider.module.css'
import { heroImages } from './helper'
import Link from 'next/link'
import { motion } from 'framer-motion'

export const Hero = () => {
  const [slideIndex, setSlideIndex] = useState(0)
  const [prevIndex, setPrevIndex] = useState(0)
  const [play, setPlay] = useState(true)
  const imagesLength = heroImages.length - 1
  const nextSlide = () => {
    if (imagesLength > slideIndex) {
      setPrevIndex(slideIndex)
      setSlideIndex(slideIndex + 1)
    } else {
      setPrevIndex(slideIndex)
      setSlideIndex(0)
    }
  }

  const prevSlide = () => {
    if (slideIndex <= imagesLength && slideIndex !== 0) {
      setPrevIndex(slideIndex)
      setSlideIndex(slideIndex - 1)
    }
  }
  const handlePlay = () => {
    setPlay(!play)
  }

  useEffect(() => {
    const autoSlider = setInterval(() => {
      if (play) {
        if (imagesLength > slideIndex) {
          setPrevIndex(slideIndex)
          setSlideIndex(slideIndex + 1)
        } else {
          setPrevIndex(slideIndex)
          setSlideIndex(0)
        }
      }
    }, 5000)
    return () => clearInterval(autoSlider)
  }, [slideIndex, play, imagesLength])

  return (
    <div className={slider.containerSlider}>
      {heroImages.map((obj, index) => (
        <div
          key={obj.id}
          className={slideIndex === index ? slider.activeAnim : slider.slide}
          style={{
            position: 'absolute',
            backgroundImage: `url(${slideIndex === index
              ? heroImages[slideIndex].coverImage.src
              : heroImages[prevIndex].coverImage.src
              })`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            width: '100%',
            height: '100%',
          }}
        >
          <div className={styles.innerLayer}></div>
        </div>
      ))}
      <div className={styles.innerContainer}>
        <motion.div
          className={styles.textDiv}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <h1>{heroImages[slideIndex].heading}</h1>
          <p>{heroImages[slideIndex].text}</p>
          <Link
            href={heroImages[slideIndex].buttonLink}
            className={styles.linkButton}
          >
            {heroImages[slideIndex].buttonText}
          </Link>
        </motion.div>

        <div className={styles.controller}>
          <p>
            <span style={{ fontSize: '1.2rem' }}>{slideIndex + 1}</span>/
            <span>{heroImages.length}</span>
          </p>
          <div className={styles.heroImagesLength}>
            {heroImages.map((i, index) => (
              <div
                key={index}
                className={
                  slideIndex == index
                    ? styles.imageActiveIndex
                    : styles.imageIndex
                }
                style={{
                  width: 100 / heroImages.length + '%',
                  cursor: 'pointer',
                }}
              ></div>
            ))}
          </div>
          <div className={styles.controllerButtons}>
            <button onClick={prevSlide}>
              <i
                className='fa-sharp fa-solid fa-chevron-left'
                style={{ fontSize: 14 }}
              ></i>
              {'Prev'}
            </button>
            <button onClick={handlePlay}>
              {play ? (
                <i className='fa-solid fa-pause'></i>
              ) : (
                <i className='fa-solid fa-play'></i>
              )}
            </button>
            <button onClick={nextSlide}>
              <span>Next</span>
              <i
                className='fa-solid fa-chevron-right'
                style={{ fontSize: 14 }}
              ></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}