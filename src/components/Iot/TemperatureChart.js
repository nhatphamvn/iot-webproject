import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import {
    Chart as ChartJS,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";

// Đăng ký các thành phần của Chart.js
ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Title, Tooltip, Legend);

const TemperatureDisplay = ({ temperature }) => {
    const [temperatureData, setTemperatureData] = useState([]);
    const maxDataPoints = 20; // Giới hạn số điểm hiển thị trên biểu đồ

    // Cập nhật dữ liệu nhiệt độ theo thời gian thực
    useEffect(() => {
        if (temperature !== undefined && temperature !== null) {
            setTemperatureData((prev) => [...prev.slice(-maxDataPoints + 1), temperature]); // Giữ tối đa 20 điểm dữ liệu
        }
    }, [temperature]);

    // Dữ liệu cho biểu đồ
    const chartData = {
        labels: temperatureData.map((_, index) => `T${index + 1}`), // Gắn nhãn từng điểm
        datasets: [
            {
                label: "Nhiệt độ (°C)",
                data: temperatureData,
                borderColor: "rgba(75,192,192,1)", // Màu đường
                backgroundColor: "rgba(75,192,192,0.2)", // Nền mờ dưới đường
                fill: true,
                tension: 0.4,
            },
        ],
    };

    // Tùy chọn cho biểu đồ với cập nhật phạm vi trục Y
    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: true,
                position: "top",
            },
        },
        scales: {
            y: {
                suggestedMin: Math.min(...temperatureData) - 1, // Tự động giảm dưới giá trị nhỏ nhất
                suggestedMax: Math.max(...temperatureData) + 1, // Tự động tăng trên giá trị lớn nhất
                ticks: {
                    stepSize: 0.1, // Bước nhỏ hơn để hiển thị sự khác biệt
                },
                title: {
                    display: true,
                    text: "Nhiệt độ (°C)",
                },
            },
            x: {
                title: {
                    display: true,
                    text: "Thời gian",
                },
            },
        },
    };

    return (
        <div className="temperature-chart-container">
            <Line data={chartData} options={options} />
        </div>
    );
};

export default TemperatureDisplay;
