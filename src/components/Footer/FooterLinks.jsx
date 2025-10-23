// import Link from 'next/link'
// import { usePathname } from 'next/navigation'
import { footerLinks } from './helper'
import { useRouter } from 'next/navigation'
import Classes from './Footer.module.scss'
// footerlinks component
export function FooterLinks() {
  // let pathName = usePathname()
  const { linkList, linksParent } = Classes
  let router = useRouter()
  // const handleClick = (link) => {
  //   console.log(link)
  //   const id = link.replace('#', '')
  //   console.log(id)
  //   const el = document.getElementById(id)
  //   console.log(el)
  //   const r = el?.getBoundingClientRect()
  //   let top = r.y
  //   window.scrollTo({
  //     top: top,
  //     behavior: 'smooth',
  //   })
  // }
  // const handleClick = () => {
  //   document.html.style.scrollBehavior = 'smooth'
  // }
  return (
    <div className={linksParent}>
      {footerLinks.map((i) => (
        <ul className={linkList} key={i.id}>
          <li style={{ marginBottom: '1rem' }}>
            <h6>{i.heading}</h6>
          </li>
          {i.links.map((it) => (
            <li key={it.linkName}>
              {/* {i.path === pathName  ( */}
              <a href={i.path + it.linkRoute}>{it.linkName}</a>
              {/* // ) : ( */}
              {/* //   <Link href={i.path + it.linkRoute} scroll={true}> */}
              {/* //     {it.linkName} */}
              {/* //   </Link> */}
              {/* // )} */}
            </li>
          ))}
        </ul>
      ))}
    </div>
  )
}
