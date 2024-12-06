import { useEffect, useState } from 'react';
import mqtt from 'mqtt';
import TemperatureDisplay from './TemperatureDisplay';
import HumidityDisplay from './HumidityDisplay';
import TemperatureChart from './TemperatureChart';
import HumidityChart from './HumidityChart';
import FlameStatusDisplay from './FlameStatusDisplay'; // Component hiển thị trạng thái ngọn lửa
import './Iot.css';

const Iot = () => {
    const [temperature, setTemperature] = useState([]); // Khởi tạo là mảng
    const [humidity, setHumidity] = useState([]); // Khởi tạo là mảng
    const [flameStatus, setFlameStatus] = useState(null); // Trạng thái ngọn lửa
    const [flameIntensity, setFlameIntensity] = useState(null); // Cường độ ngọn lửa
    const [connected, setConnected] = useState(false);

    useEffect(() => {
        const client = mqtt.connect('ws://192.168.100.141:8080');

        client.on('connect', () => {
            console.log('Connected to Node.js MQTT broker via WebSocket');
            setConnected(true);

            // Subscribe vào các topic
            client.subscribe('home/dht22', (err) => {
                if (!err) {
                    console.log('Subscribed to topic: home/dht22');
                } else {
                    console.error('Error subscribing to home/dht22:', err);
                }
            });
            client.subscribe('home/flameSensor', (err) => {
                if (!err) {
                    console.log('Subscribed to topic: home/flameSensor');
                } else {
                    console.error('Error subscribing to home/flameSensor:', err);
                }
            });
        });

        client.on('message', (topic, message) => {
            if (topic === 'home/dht22') {
                const payload = message.toString();
                console.log('Received message from DHT22:', payload);

                try {
                    const data = JSON.parse(payload);
                    setTemperature((prev) => {
                        const updated = [...prev, data.temperature];
                        return updated.slice(-30); // Chỉ giữ 30 giá trị gần nhất
                    });

                    setHumidity((prev) => {
                        const updated = [...prev, data.humidity];
                        return updated.slice(-30); // Chỉ giữ 30 giá trị gần nhất
                    });
                } catch (error) {
                    console.error('Error parsing JSON from DHT22:', error);
                }
            }

            if (topic === 'home/flameSensor') {
                const payload = message.toString();
                console.log('Received message from Flame Sensor:', payload);

                try {
                    const data = JSON.parse(payload);
                    setFlameStatus(data.flameStatus); // Cập nhật trạng thái ngọn lửa
                    setFlameIntensity(data.flameIntensity); // Cập nhật cường độ ngọn lửa
                } catch (error) {
                    console.error('Error parsing JSON from Flame Sensor:', error);
                }
            }
        });

        client.on('close', () => {
            console.log('Disconnected from MQTT broker');
            setConnected(false);
        });

        client.on('error', (error) => {
            console.error('MQTT connection error:', error);
            setConnected(false);
        });

        return () => {
            client.end();
        };
    }, []);

    return (
        <div className="main-container">
            <h2>Temperature & Humidity</h2>
            {connected ? <p>Connected to broker!</p> : <p>Disconnected from broker</p>}

            {/* Phần hiển thị nhiệt độ và độ ẩm */}
            <div style={{ display: 'flex', gap: '675px', justifyContent: 'center', width: '100%' }}>
                <TemperatureDisplay temperature={temperature.at(-1) || 0} /> {/* Hiển thị giá trị mới nhất */}
                <HumidityDisplay humidity={humidity.at(-1) || 0} /> {/* Hiển thị giá trị mới nhất */}
            </div>

            {/* Phần hiển thị biểu đồ nhiệt độ và độ ẩm */}
            <div style={{ display: 'flex', gap: '40px', justifyContent: 'center', width: '100%' }}>
                <TemperatureChart temperature={temperature} />
                <HumidityChart humidity={humidity} />
            </div>

            {/* Phần hiển thị trạng thái ngọn lửa */}
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                <FlameStatusDisplay status={flameStatus} intensity={flameIntensity} />
            </div>
        </div>
    );
};

export default Iot;
