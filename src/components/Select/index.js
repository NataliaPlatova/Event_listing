import React from "react";
import "./Select.module.scss";

class Select extends React.Component {
    render() {
        const { options, name, onSelect, values } = this.props;
        return(
            <label>
                {`${name}:`}
                <select name={name} onChange={(e)=>{ onSelect(e.target.name, e.target.value)}}>
                    {
                        options.map((option, id) =>
                            <option value={values[id]} id={id} key={option}>{option}</option>
                        )
                    }
                </select>
            </label>
        );
    }
}

export default Select;
