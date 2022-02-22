
import leftSvg from '../assets/imgs/bg-pattern-home-6.svg'

export function Ready() {

    return (
        <section className="content flex space-between align-center">
            <img src={leftSvg} alt="" className='left'/>
            <h2>Ready to get started?</h2>
            <button>Contact us</button>
        </section>
    )
}