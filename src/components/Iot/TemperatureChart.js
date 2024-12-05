import React from 'react';
import { Line } from 'react-chartjs-2';

const TemperatureChart = ({ temperatureData }) => {
    const data = {
        labels: Array.from({ length: temperatureData.length }, (_, i) => i + 1),
        datasets: [
            {
                label: 'Temperature (°C)',
                data: temperatureData,
                borderColor: '#FF6347',
                backgroundColor: 'rgba(255, 99, 71, 0.2)',
                tension: 0.4, // Smoothes the line
            },
        ],
    };

    const options = {
        scales: {
            x: { display: true, title: { display: true, text: 'Time' } },
            y: { display: true, title: { display: true, text: '°C' } },
        },
        responsive: true,
    };

    return (
        <div>
            <h3>Temperature Over Time</h3>
            <Line data={data} options={options} />
        </div>
    );
};

export default TemperatureChart;
