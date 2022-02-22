

export function PromotionListItem({item}) {

    return (
        <section className="promotion-item flex align-center">
            <div className="img-container">
                <img src={item.img} alt=""/>
            </div>
            <div className="list-info flex column">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
            </div>
        </section>
    )
}