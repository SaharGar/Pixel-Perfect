

export function AboutListItem({ item }) {

    return (
        <div className="about">
            <p className="desc">{item.desc}</p>
            <h3>{item.name}</h3>
            <p className="roll">{item.roll}</p>
            <div className="img-container">
                <img src={item.img} alt=""/>
            </div>
        </div>
    )
}