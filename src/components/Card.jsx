import React from "react"
import starImg from "/images/star.png"

export default function Card({ item }) {
    const { coverImg, stats, location, title, price, openSpots } = item
    const {rating, reviewCount} = stats

    let badgeText
    if (openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (location === "Online") {
        badgeText = "ONLINE"
    }
    
    const image = "/images/" + coverImg

    return (
        <div className="card">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img src={image} className="card--image" alt="Main Card Image" />
            <div className="card--stats">
                <img src={starImg} className="card--star" alt="Star Icon" />
                <span>{rating}</span>
                <span className="gray">({reviewCount}) • </span>
                <span className="gray">{location}</span>
            </div>
            <h2>{title}</h2>
            <p><span className="bold">From ${price}</span> / person</p>
        </div>
    )
}

// export default function Card(props) {
//     return (
//         <div className="card">
//             <img src={`../images/${props.img}`} className="card--image" />
//             <div className="card--stats">
//                 <img src="../images/star.png" className="card--star" />
//                 <span>{props.rating}</span>
//                 <span className="gray">({props.reviewCount}) • </span>
//                 <span className="gray">{props.location}</span>
//             </div>
//             <p>{props.title}</p>
//             <p><span className="bold">From ${props.price}</span> / person</p>
//         </div>
//     )
// }