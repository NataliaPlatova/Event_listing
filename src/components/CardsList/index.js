import React from "react";
import s from "./CardsList.module.scss";
import Events from "../../events"
import Card from "../Card";


class CardsList extends React.Component {
    render() {
        const { chosenMonth, chosenCity } = this.props;

        let eventList = [];
        let filteredEvents = [];

        for (let i=0; i<16; i++) {
            eventList.push(Events[i]);
        }

        if(chosenCity!=="All"&&chosenMonth!=="All") {
            for (let i=0; i<16; i++) {
                const eventMonth = eventList[i].date.slice(3,5);
                if(eventList[i].city===chosenCity&&eventMonth===chosenMonth) {
                    filteredEvents.push(eventList[i]);
                }
            }
            return (
                <div className={s.container}>
                    {
                        filteredEvents.map((event) =>
                            <Card event={event} key={event.id}/>)
                    }
                </div>
            );
        } else if(chosenCity!=="All"||chosenMonth!=="All") {
            for (let i=0; i<16; i++) {
                const eventMonth = eventList[i].date.slice(3,5);
                if(eventList[i].city===chosenCity||eventMonth===chosenMonth) {
                    filteredEvents.push(eventList[i]);
                }
            }
            return (
                <div className={s.container}>
                    {
                        filteredEvents.map((event) =>
                            <Card event={event} key={event.id}/>)
                    }
                </div>
            );
        }else {
            return (
                <div className={s.container}>
                    {
                        eventList.map((event) =>
                            <Card event={event} key={event.id}/>)
                    }
                </div>
            );
        }
    }
}

export default CardsList;
