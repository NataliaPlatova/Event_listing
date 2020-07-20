import React from "react";
import s from "./Events.module.scss";
import CardsList from "../CardsList";
import Filters from "../Filters";

class Events extends React.Component{
    state = {
      cityValue: "All",
      monthValue: "All",
    };

    onFilterChange = (name, value) => {
        if(name==="City") {
            this.setState({
                cityValue: value,
                monthValue: this.state.monthValue,
            })
        } else if(name==="Month") {
            this.setState({
                cityValue: this.state.cityValue,
                monthValue: value,
            })
        }
    };

    render() {
        const { cityValue, monthValue } = this.state;
        return(
            <section className={s.eventsBlock}>
                <div className={s.container}>
                    <h1 className={s.title}>Events Listing</h1>
                    <Filters onFilterSelect={this.onFilterChange}/>
                    <CardsList chosenMonth={monthValue} chosenCity={cityValue}/>
                </div>
            </section>
        );
    }
};

export default Events;
