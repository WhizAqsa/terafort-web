import classes from './TechPartners.module.scss'
import Partners from './Partners'
import Container from '../../../../components/Container'
export const TechPartners = () => {
  return (
    <Container fwcCls={classes.innerContainer} id='technologypartners'>
      <div className={classes.partnersContainer}>
        <h2>Technology Partners</h2>
        <Partners />
      </div>
    </Container>
  )
}
