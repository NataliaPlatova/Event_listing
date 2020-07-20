import s from "./Filters.module.scss";
import React from "react";
import Select from "../Select";


class Filters extends React.Component {
    render() {
        const cityOptions = ["All", "Amsterdam", "Berlin", "Rome", "St.Petersburg"];
        const monthOptions = ["All", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        const { onFilterSelect } = this.props;
        return(
            <div className={s.filters}>
                <Select name="City" values={cityOptions} options={cityOptions} onSelect={onFilterSelect}/>
                <Select name="Month"
                        values={["All", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"]}
                        options={monthOptions}
                        onSelect={onFilterSelect}/>
            </div>
        );
    }
}

export default Filters;
