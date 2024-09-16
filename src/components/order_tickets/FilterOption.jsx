import { Switch } from "@mui/material";
import { useState } from "react";

export default function FilterOption ({props}) {
    
    const { icon, text, status, onChangeFilter } = props;

    const [checked, setChecked] = useState(status);

    const handleChange = (event) => {
        setChecked(event.target.checked);
        onChangeFilter(event);
    };

    return (
    <div className="filter__option-container">
        <div className="filter__option-info">
            <div className="filter__option-icon">
                {icon}
            </div>
            <span className="filter__option-text">
                {text}
            </span>
        </div>
        <Switch className="filter__option-switch" checked={checked} onChange={handleChange} inputProps={{ 'aria-label': 'controlled' }} color="warning" />
    </div>
    )
}