import React from 'react';
import './HumidityDisplay.css';

const HumidityDisplay = ({ humidity }) => {
    return (
        <div className="humidity-widget">
            <div className="humidity-label">Humidity</div>
            <div className="humidity-bar">
                <div
                    className="humidity-fill"
                    style={{ height: `${Math.min(humidity, 100)}%` }}
                ></div>
            </div>
            <div className="humidity-value">{humidity}%</div>
        </div>
    );
}

export default HumidityDisplay;
