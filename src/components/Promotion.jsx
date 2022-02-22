
import person from '../assets/imgs/icon-person.svg'
import cog from '../assets/imgs/icon-cog.svg'
import chart from '../assets/imgs/icon-chart.svg'
import rightSvg from '../assets/imgs/bg-pattern-home-3.svg'
import { PromotionListItem } from './PromotionListItem'




export function Promotion() {


    const promotionInfo = [ 
        {
            title: 'Experienced Individuals',
            desc: 'Our network is made up of highly experienced professionals who are passionate about what they do.',
            img: person
        },
        {
            title: 'Easy to Implement',
            desc: 'Our processes have been refined over years of implementation meaning our teams always deliver.',
            img: cog
        },
        {
            title: 'Enhanced Productivity',
            desc: 'Our customized platform with in-built analytics helps you manage your distributed teams.',
            img: chart
        },
    ]

    return (
        <section className="content flex align-center space-between">
            <img src={rightSvg} alt="" className='right'/>
            <div className="headline">
                <h1>Build &#38; manage distributed teams like no one else.</h1>
            </div>
            <div className="info">
                <ul>
                    {promotionInfo.map((item, idx) => {
                        return (
                            <li key={idx}><PromotionListItem item={item}/></li>
                        )
                    })}
                </ul>
            </div>
        </section>
    )
}