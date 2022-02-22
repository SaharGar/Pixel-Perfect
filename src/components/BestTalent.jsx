
import leftSvg from '../assets/imgs/bg-pattern-home-1.svg'
import rightSvg from '../assets/imgs/bg-pattern-home-2.svg'

export function BestTalent() {

    return (
        <section className="content flex align-center space-between">
            <img src={leftSvg} alt="" className='left' />
            <img src={rightSvg} alt="" className='right' />
            <div className="headline">
                <h1>Find the best <span>talent</span></h1>
            </div>
            <div className="info">
                <p>Finding the right people and building high performing teams can be hard. Most companies aren't tapping into the abundance of global talent. We're about to change that.</p>
            </div>
        </section>
    )
}