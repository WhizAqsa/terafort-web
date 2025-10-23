'use client'
import style from './container.module.scss'
export default function Container({ children, fwcCls, containerCls, id }) {
  return (
    <div className={`flexRowAndCenter ${style.fwContainer} ${fwcCls}`} id={id}>
      <div className={`${style.container} ${containerCls}`}>{children}</div>
    </div>
  )
}
3
