'use client'
import { useState, useEffect, useCallback, useRef } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import style from './navbar.module.scss'
import { navLinks } from './helper.js'
import Logo from '/public/resources/icons/terafortLogo.svg'
import Image from 'next/image'
import { Drawer } from '../Drawer'

export default function NavBar() {
  let navbarRef = useRef(null)
  const pathName = usePathname()
  const [show, setShow] = useState()
  const [size, setSize] = useState({
    width: 0,
    height: 0,
  })

  const handleOpen = useCallback(() => setShow(true), [])
  const handleClose = useCallback(() => setShow(false), [])
  // handling resize
  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])
  return (
    <>
      <nav className={`${style.navbar}`} ref={navbarRef}>
        <div className={style.navContainer}>
          <Link href={'/'} className={style.logo} scroll={true}>
            {typeof window !== 'undefined' && window.innerWidth > 1024 ? (
              <Image src={Logo} width={146} height={32} alt='terafort-logo' />
            ) : (
              <Image src={Logo} width={87} height={20} alt='terafort-logo' />
            )}
          </Link>

          {typeof window !== 'undefined' && window.innerWidth > 1024 ? (
            <ul className={style.navLinks}>
              {navLinks.map((i) => (
                <li
                  key={i.id}
                  className={`${
                    pathName == i.LinkRoute && pathName !== '/publish'
                      ? 'active'
                      : undefined
                  }
                     
                    `}
                  style={{
                    paddingBottom: i.LinkRoute !== '/publish' && 10,
                  }}
                >
                  <Link
                    href={i.LinkRoute}
                    style={{ color: i.LinkRoute === '/publish' && '#000' }}
                    scroll={true}
                    className={`${
                      i.LinkRoute == '/publish' ? style.publish : undefined
                    }`}
                  >
                    {i.linkName}
                  </Link>
                </li>
              ))}
              {/* <NavBarDrawer
                anchor='right'
                open={navShow}
                leaveMouse={() => setNavShow(false)}
              >
                hello
              </NavBarDrawer> */}
            </ul>
          ) : (
            <button className={style.burgerMenu} onClick={handleOpen}>
              <i className='fa-solid fa-bars'></i>
            </button>
          )}
        </div>
        <Drawer anchor='right' open={show} onClose={handleClose}>
          {
            <div>
              <ul style={{ padding: '0 10px' }}>
                {navLinks.map((i) => (
                  <li
                    key={i.id}
                    style={{
                      padding: '10px 0 ',
                      margin: '10px 0',
                    }}
                    className={
                      i.LinkRoute == '/publish' ? style.publishing : undefined
                    }
                  >
                    <Link href={i.LinkRoute} onClick={() => setShow(false)}>
                      {i.linkName}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          }
        </Drawer>
      </nav>
    </>
  )
}
