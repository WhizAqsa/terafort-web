'use client'
// import { useEffect, useRef } from 'react'
// import { gsap } from 'gsap'
// import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin'
import { cards } from './helper'
import Classes from './Solution.module.scss'
// import { useIntersection } from 'react-use'
// import { ReactComponent as CardSvg } from '../../../public/resources/icons/card.svg'
// import CardSvg from '../../../public/resources/icons/card.svg'
import Image from 'next/image'
// card component

export const Cards = () => {
  // let svgRef = useRef(null)
  // let listRef = useRef(null)
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

  // useEffect(() => {
  //   intersection && intersection.intersectionRatio < 0.2
  //     ? console.log('hello world')
  //     : console.log('hey')
  // }, [intersection])
  //
  // useEffect(() => {
  //   observer.current = new IntersectionObserver(
  //     (entry) => {
  //       if (entry.isIntersecting) {
  //         console.log('hello')
  //         tl.to(svgRef.current, {
  //           duration: 2,
  //           x: 100,
  //           y: -50,
  //           rotaation: 360,
  //           ease: 'elastic.out(1,0.3)',
  //         }).play()
  //       } else {
  //         console.log('world')
  //       }
  //     },
  //     {
  //       threshold: 0.5,
  //     }
  // (([entry]) => {
  //   if (entry.isIntersecting) {
  //     tl.to(svgRef.current, {
  //       duration: 2,
  //       x: 100,
  //       y: -50,
  //       rotaation: 360,
  //       ease: 'elastic.out(1,0.3)',
  //     }).play()
  //   }
  // },
  // {
  //   threshold: 0.5,
  // })
  //   )
  //   observer.current.observe(svgRef.current)
  //   return () => observer.current.disconnect()
  // }, [])
  // useEffect(() => {
  //   gsap.registerPlugin(DrawSVGPlugin)
  // }, [])

  return (
    <div className={Classes.cards}>
      <ul>
        {cards.map((i) => (
          <li
            key={i.id}
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <div className='flexColumnCenter'>
              <span>
                <Image src={i.svg} alt='icon' />
              </span>
              <h4>{i.heading}</h4>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
