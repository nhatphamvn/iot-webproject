import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import './HumidityDisplay.css';

// Đăng ký các thành phần của Chart.js
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const HumidityDisplay = ({ humidity }) => {
    const [humidityData, setHumidityData] = useState([]);
    const maxDataPoints = 6; // Giới hạn số điểm hiển thị trên biểu đồ

    // Cập nhật dữ liệu mỗi khi giá trị độ ẩm thay đổi
    useEffect(() => {
        if (humidity !== undefined && humidity !== null) {
            setHumidityData((prev) => [...prev.slice(-maxDataPoints + 1), humidity]); // Giữ tối đa 6 điểm dữ liệu
        }
    }, [humidity]);

    // Tạo dữ liệu biểu đồ
    const chartData = {
        labels: humidityData.map((_, index) => `T${index + 1}`), // Gắn nhãn từng điểm
        datasets: [
            {
                label: 'Humidity (%)',
                data: humidityData,
                borderColor: 'rgb(75, 192, 192)', // Màu đường
                backgroundColor: 'rgba(75, 192, 192, 0.2)', // Nền mờ dưới đường
                tension: 0.3,
                fill: true,
            },
        ],
    };

    // Tùy chọn biểu đồ với cập nhật phạm vi trục Y
    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: true,
                position: 'top',
            },
        },
        scales: {
            y: {
                suggestedMin: Math.min(...humidityData) - 1, // Tự động giảm dưới giá trị nhỏ nhất
                suggestedMax: Math.max(...humidityData) + 1, // Tự động tăng trên giá trị lớn nhất
                ticks: {
                    stepSize: 0.1, // Bước nhỏ hơn để hiển thị sự khác biệt
                },
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
            <Line data={chartData} options={options} />
        </div>
    );
};

export default HumidityDisplay;
