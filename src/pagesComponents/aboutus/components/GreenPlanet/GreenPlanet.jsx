//importing dependencies
import Container from '../../../../components/Container'
import { Cards } from './Cards'
// style sheet
import Classes from './GreenPlanet.module.scss'
// Solution section
export const GreenPlanet = () => {
  return (
    <Container fwcCls={Classes.fwcontainer}>
      <div className={Classes.solution}>
        <h2 className={Classes.expert}>Environment</h2>
        <p className={Classes.area}>
          Striving for a green planet through net zero
        </p>
        <Cards />
      </div>
    </Container>
  )
}
