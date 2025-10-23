import styles from './Technologies.module.scss'
const Tab = ({ label, activeTab, onClick }) => {
  const updateLabel = () => {
    onClick(label)
  }
  let className = styles.listItem
  if (activeTab === label) {
    className += ` ${styles.tabListActive}`
  }
  return (
    <li className={className} onClick={updateLabel}>
      {label}
    </li>
  )
}

export default Tab
