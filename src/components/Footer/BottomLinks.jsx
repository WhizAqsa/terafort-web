import Link from 'next/link'
import { bottomLinks } from './helper'
import Classes from './Footer.module.scss'

export const BottomLinks = () => {
  const { bottomLink } = Classes
  return (
    <div className={bottomLink}>
      {bottomLinks.map((i) => (
        <ul key={i.id}>
          <li>
            <h6>{i.heading}</h6>
          </li>
          {i.links.map((i) => (
            <li key={i.linkName}>
              <Link href={i.linkRoute}>{i.linkName}</Link>
            </li>
          ))}
        </ul>
      ))}
    </div>
  )
}
