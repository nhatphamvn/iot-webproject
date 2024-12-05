import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import {
    Chart as ChartJS,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Title,
} from "chart.js";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Title);

const TemperatureDisplay = ({ temperature }) => {
    const [temperatureData, setTemperatureData] = useState([]);

    // Cập nhật dữ liệu nhiệt độ theo thời gian thực
    useEffect(() => {
        if (temperature !== "") {
            setTemperatureData((prev) => [...prev.slice(-19), temperature]); // Giữ tối đa 20 điểm dữ liệu
        }
    }, [temperature]);

    const chartData = {
        labels: temperatureData.map((_, index) => index + 1), // Gắn nhãn theo thứ tự điểm dữ liệu
        datasets: [
            {
                label: "Nhiệt độ (°C)",
                data: temperatureData,
                borderColor: "rgba(75,192,192,1)", // Màu đường biểu đồ
                backgroundColor: "rgba(75,192,192,0.2)", // Nền mờ dưới đường
                fill: true,
                tension: 0.4, // Làm mịn đường
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: true,
                position: "top",
            },
        },
        scales: {
            x: {
                display: true,
                title: {
                    display: true,
                    text: "Thời gian",
                },
            },
            y: {
                min: 0,
                max: 50,
                title: {
                    display: true,
                    text: "Nhiệt độ (°C)",
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
