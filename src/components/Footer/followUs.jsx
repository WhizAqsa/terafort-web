import Classes from './Footer.module.scss'
import Link from 'next/link'
import { followUsIcons } from './helper'
//
export const FollowUs = () => {
  const { followUs, rightsCls, followusLink } = Classes
  return (
    <div className={followUs}>
      <div className={rightsCls}>
        <p>© 2023 Terafort All Rights Reserved.</p>
        <p>Last updated on January 05, 2023</p>
      </div>
      <div className={followusLink}>
        <h6>Follow us</h6>
        {followUsIcons.map((i) => (
          <a key={i.link} href={i.link} target='_blank' rel='noreferrer'>
            <i className={i.icon}></i>
          </a>
        ))}
      </div>
    </div>
  )
}
