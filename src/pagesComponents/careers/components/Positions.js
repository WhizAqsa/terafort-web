import Container from "../../../components/Container";
import styles from "../careers.module.scss";
import Link from "next/link";
// import { useEffect, useState } from 'react'
export const Positions = ({ positions }) => {
  console.log("Positions component received:", positions);
  console.log("Positions array length:", positions?.length);

  return (
    <Container id={"positions"}>
      <div className={styles.positionContainer}>
        <h2>Open Positions</h2>
        {positions && positions.length > 0 ? (
          <ul>
            {positions.map((position, idx) => (
              <li key={position?.Id || position?.id || idx}>
                <h3>{position?.title || position?.name || 'Position Title'}</h3>
                <p>{position?.description || position?.desc || 'Position description not available'}</p>

                <Link href={`apply/${position?.Id || position?.id || idx}`} style={{ columnGap: "1rem" }}>
                  <span>APPLY</span>
                  <i
                    className="fas fa-caret-right"
                    style={{ fontSize: 20, color: "var(--primaryClr)" }}
                  ></i>
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <div style={{ textAlign: 'center', padding: '2rem' }}>
            <p>No open positions available at the moment.</p>
          </div>
        )}
      </div>
    </Container>
  );
};
