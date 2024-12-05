import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import './HumidityDisplay.css';

// Đăng ký các thành phần của Chart.js
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const HumidityDisplay = ({ humidity }) => {
    // Dữ liệu biểu đồ (có thể được cập nhật từ MQTT)
    const data = {
        labels: ['0', '1', '2', '3', '4', '5'], // Thời gian (hoặc chỉ số) trên trục x
        datasets: [
            {
                label: 'Humidity (%)',
                data: [...Array(6)].map(() => humidity), // Dữ liệu độ ẩm (đây là ví dụ với độ ẩm cố định)
                fill: false,
                borderColor: 'rgb(75, 192, 192)', // Màu đường
                tension: 0.1,
            },
        ],
    };

    // Các tùy chọn cấu hình cho biểu đồ
    const options = {
        responsive: true,
        scales: {
            y: {
                min: 0,
                max: 100,
                title: {
                    display: true,
                    text: 'Humidity (%)',
                },
            },
            x: {
                title: {
                    display: true,
                    text: 'Time',
                },
            },
        },
    };

    return (
        <div className="humidity-chart-container">
            <Line data={data} options={options} />
        </div>
    );
}

export default HumidityDisplay;
