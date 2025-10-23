import Container from '../../../../components/Container'
import styles from './Life.module.scss'
import Grid from './Grid'
// Vision section
export const LifeAtTerafort = () => {
  return (
    <Container fwcCls={styles.innerContainer} id='lifeatterafort'>
      <div className={styles.lifeSec}>
        <h2>Life At TeraFort</h2>
        <Grid />
      </div>
    </Container>
  )
}
