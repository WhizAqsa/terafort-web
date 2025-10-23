"use client";
import styles from "./Contact.module.scss";
import { useState, useEffect } from "react";
import Tab from "./Tab";
//
const Tabs = ({ children }) => {
  const [activeTab, setActiveTab] = useState("LAHORE");
  const onClickTabItem = (label) => {
    setActiveTab(label);
  };
  useEffect(() => {
    const autoSlider = setInterval(() => {
      setActiveTab((prev) => (prev === "LAHORE" ? "ISLAMABAD" : "AUSTIN"));
    }, 3000);
    return () => clearInterval(autoSlider);
  }, [activeTab]);
  return (
    <div className={styles.tabs}>
      <ul className={styles.tablist}>
        {children.map((child) => {
          const { label } = child.props;
          return (
            <Tab
              activeTab={activeTab}
              key={label}
              label={label}
              onClick={onClickTabItem}
            />
          );
        })}
      </ul>
      <div className={styles.outlet}>
        {children.map((child) => {
          if (child.props.label !== activeTab) return undefined;
          return child.props.children;
        })}
      </div>
    </div>
  );
};

export default Tabs;
