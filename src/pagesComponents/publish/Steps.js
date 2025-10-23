import Container from '../../components/Container'
// import './Steps.css'
import terafortIcon from '/public/resources/icons/terafortfooterIcon.svg'
import Image from 'next/image'
import styles from './Publish.module.scss'
export default function Steps() {
  return (
    <Container containerCls={styles.stepsInnerContainer} id='process'>
      <section className='s-InfoCircles22 t-DarkGradient o-Margin o-Margin--NoMarginTop o-Margin--NoMarginBottom'>
        <Container containerCls={'fortextContainer'}>
          <div className='l-ContentColumn'>
            <div className='row'>
              <div className='columns xsmall-24 medium-13 large-8'>
                <h2 className='t-SectionHeader'>
                  <strong>Process</strong>
                  <Image src={terafortIcon} alt='terafort-logo' />
                </h2>
              </div>
              <div className='columns xsmall-24 large-15 large-offset-1 s-InfoCircles22__Text'>
                <div className='t-ParagraphBig'></div>
              </div>
            </div>
          </div>
        </Container>
        <div className='s-InfoCircles22__Chart'>
          <div className='l-ContentColumn row'>
            <ul
              id='chartContainer'
              className='columns xsmall-24 s-InfoCircles22__ChartContainer'
            >
              <li className='s-InfoCircles22__ChartItem'>
                <h3 className='s-InfoCircles22__ChartTitle t-DarkGradient t-DarkGradient--Mobile45 u-BoxShadow'>
                  <span className='s-InfoCircles22__ChartTitleText'>
                    Submit your Game
                  </span>
                </h3>
              </li>
              <li className='s-InfoCircles22__ChartItem'>
                <h3 className='s-InfoCircles22__ChartTitle t-DarkGradient t-DarkGradient--Mobile45 u-BoxShadow'>
                  <span className='s-InfoCircles22__ChartTitleText'>
                    Review
                  </span>
                </h3>
                <div className='s-InfoCircles22__ChartLabel'>
                  <p>Publishing Team will review your project</p>
                </div>
              </li>
              <li className='s-InfoCircles22__ChartItem'>
                <h3 className='s-InfoCircles22__ChartTitle t-DarkGradient t-DarkGradient--Mobile45 u-BoxShadow'>
                  <span className='s-InfoCircles22__ChartTitleText'>
                    Selection & Onboarding
                  </span>
                </h3>
                <div className='s-InfoCircles22__ChartLabel'>
                  <p>
                    Covering all the Legal side (Agreements, Copyrights etc)
                  </p>
                </div>
              </li>
              <li className='s-InfoCircles22__ChartItem'>
                <h3 className='s-InfoCircles22__ChartTitle t-DarkGradient t-DarkGradient--Mobile45 u-BoxShadow'>
                  <span className='s-InfoCircles22__ChartTitleText'>
                    Team Allocation
                  </span>
                </h3>
                <div className='s-InfoCircles22__ChartLabel'>
                  <p>
                    Terafort will allocate a dedicated team along with a
                    Customer Success manager
                  </p>
                </div>
              </li>
              <li className='s-InfoCircles22__ChartItem'>
                <h3 className='s-InfoCircles22__ChartTitle t-DarkGradient t-DarkGradient--Mobile45 u-BoxShadow'>
                  <span className='s-InfoCircles22__ChartTitleText'>
                    Growth
                  </span>
                </h3>
                <div className='s-InfoCircles22__ChartLabel'>
                  <p>
                    Launching, Creatives Production, Product Roadmaps, UA
                    Campaigns, Monetization
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </Container>
  )
}
