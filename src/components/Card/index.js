import React from "react";
import s from "./Card.module.scss";

class Card extends React.Component {
    render() {
        const { event } = this.props;
        return(
            <div className={s.wrapper}>
                <div className={s.card}
                     style={{backgroundImage: `url(${event.image})`,
                         backgroundSize: "cover",
                         backgroundRepeat: "no-repeat"}}
                >
                    <span>{event.date.slice(0,2)}</span>
                    <h2>{event.name}</h2>
                </div>
            </div>
        );
    }
}

export default Card;
