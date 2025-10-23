'use client'
import { useEffect, useRef } from 'react'
// import { gsap } from 'gsap'
// import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin'
import { cards } from './helper'
import Classes from './GreenPlanet.module.scss'
import { useIntersection } from 'react-use'
// import { ReactComponent as CardSvg } from '../../../public/resources/icons/card.svg'
// import CardSvg from '../../../public/resources/icons/card.svg'
// import { ReactSVG } from 'react-svg'
import Image from 'next/image'
// card component

export const Cards = () => {
  let svgRef = useRef(null)
  let listRef = useRef(null)
  // gsap.registerPlugin(MorphSVG)

  // let observer = useRef(null)
  // defining intersection
  // gsap.registerPlugin(DrawSVGPlugin)
  // const intersection = useIntersection(svgRef, {
  //   root: null,
  //   rootMargin: '0px',
  //   threshold: 0.5,
  // })

  // const fadeIn = (element) => {
  //   gsap.to(element, {
  //     opacity: 1,
  //     y: -20,
  //     duration: 1,
  //     ease: 'power3.easeIn',
  //   })
  // }
  // const fadeOut = (element) => {
  //   gsap.to(element, {
  //     opacity: 0,
  //     y: 0,
  //     duration: 1,
  //     ease: 'power3.easeIn',
  //   })
  // }
  // intersection &&
  //   intersection.intersectionRatio > 0.5 &&
  //   fadeIn(listRef.current)

  return (
    <div className={Classes.cards} ref={svgRef}>
      <ul ref={listRef}>
        {cards.map((i) => (
          <li
            key={i.id}
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
            }}
          >
            <div className={Classes.cardInner}>
              <Image
                src={i.svg}
                alt='icon'
                className={Classes.greenCardImage}
              />

              <p>{i.heading}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
