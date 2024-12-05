import React from 'react';
import { Line } from 'react-chartjs-2';

const HumidityChart = ({ humidityData }) => {
    const data = {
        labels: Array.from({ length: humidityData.length }, (_, i) => i + 1),
        datasets: [
            {
                label: 'Humidity (%)',
                data: humidityData,
                borderColor: '#4D79FF',
                backgroundColor: 'rgba(77, 121, 255, 0.2)',
                tension: 0.4, // Smoothes the line
            },
        ],
    };

    const options = {
        scales: {
            x: { display: true, title: { display: true, text: 'Time' } },
            y: { display: true, title: { display: true, text: '%' } },
        },
        responsive: true,
    };

    return (
        <div>
            <h3>Humidity Over Time</h3>
            <Line data={data} options={options} />
        </div>
    );
};

export default HumidityChart;
