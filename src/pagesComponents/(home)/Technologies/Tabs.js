'use client'
import styles from './Technologies.module.scss'
import React, { useState, useEffect } from 'react'
import Tab from './Tab'
//
const Tabs = ({ children }) => {
  const [activeTab, setActiveTab] = useState('Publishing Platform')
  const onClickTabItem = (label) => {
    setActiveTab(label)
  }
  return (
    <div className={styles.tabs}>
      <ul className={styles.tablist}>
        {children.map((child) => {
          const { label } = child.props
          return (
            <Tab
              activeTab={activeTab}
              key={label}
              label={label}
              onClick={onClickTabItem}
            />
          )
        })}
      </ul>
      <div className={styles.outlet}>
        {children.map((child) => {
          if (child.props.label !== activeTab) return undefined
          return child.props.children
        })}
      </div>
    </div>
  )
}

export default Tabs
