import { ConfigProvider, Switch } from 'antd';
import { useState } from "react";

export default function FilterOption ({props}) {
    
    const { icon, text, status, onChangeFilter } = props;

    const [checked, setChecked] = useState(status);

    const handleChange = (checked) => {
        setChecked(checked);
        // onChangeFilter(event);
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
        <ConfigProvider
        theme={{
            components: {
                Switch: {
                    colorPrimary: "#FCDC9D",
                    colorPrimaryHover: "#FCDC9D",
                    handleBg: "#FFA800",
                    handleShadow: "0",
                    handleSize: 28,
                    trackHeight: 19,
                    trackMinWidth: 72,
                    trackPadding: -4,
                }
            },
        }}
        >
            <Switch 
            className="filter__option-switch"
            checked={checked} 
            onChange={handleChange}
            />    
        </ConfigProvider>
    </div>
    )
}