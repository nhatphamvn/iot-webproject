import React from "react";
import "./TemperatureDisplay.css";

const TemperatureWidget = ({ temperature }) => {
    const maxTemperature = 50; // Ngưỡng nhiệt độ tối đa cho biểu đồ

    return (
        <div className="temperature-widget">
            <div className="temperature-circle">
                <div
                    className="temperature-fill"
                    style={{
                        background: `conic-gradient(#FF6347 ${Math.min(
                            (temperature / maxTemperature) * 100,
                            100
                        )}%, #ccc 0%)`,
                    }}
                ></div>
                <div className="temperature-value">{temperature}°C</div>
            </div>
            <div className="temperature-label">Temperature</div>
        </div>
    );
};

export default TemperatureWidget;
