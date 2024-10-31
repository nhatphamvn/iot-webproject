// import {useEffect, useState  } from 'react'
// import mqtt from 'mqtt';
// const Iot = () => {
// const [temperature, setTemperature] = useState('');
//   const [humidity, setHumidity] = useState('');
//   const [connected, setConnected] = useState(false);

//   useEffect(() => {
//     // Kết nối tới broker qua WebSocket
//     const client = mqtt.connect('ws://172.16.79.212:8080'); // Broker WebSocket URL

//     client.on('connect', () => {
//       console.log('Connected to Node.js MQTT broker via WebSocket');
//       setConnected(true);

//       // Subscribe tới topic "home/dht22"
//       client.subscribe('home/dht22', (err) => {
//         if (!err) {
//           console.log('Subscribed to topic: home/dht22');
//         } else {
//           console.error('Error subscribing:', err);
//         }
//       });
//     });

//     // Xử lý khi nhận tin nhắn từ topic "home/dht22"
//     client.on('message', (topic, message) => {
//       if (topic === 'home/dht22') {
//         const payload = message.toString();
//         console.log('Received message:', payload);

//         // Parse dữ liệu từ tin nhắn
//         const data = JSON.parse(payload); // Giả sử ESP8266 gửi JSON
//         setTemperature(data.temperature);
//         setHumidity(data.humidity);
//       }
//     });

//     // Xử lý sự kiện đóng kết nối
//     client.on('close', () => {
//       console.log('Disconnected from MQTT broker');
//       setConnected(false);
//     });

//     // Xử lý lỗi kết nối
//     client.on('error', (error) => {
//       console.error('MQTT connection error:', error);
//       setConnected(false);
//     });

//     // Dọn dẹp khi component unmount
//     return () => {
//       client.end();
//     };
//   }, []);

//   return (
//     <div>
//       <h2>MQTT Client - Temperature & Humidity</h2>
//       {connected ? <p>Connected to broker!</p> : <p>Disconnected from broker</p>}
//       <div>
//         <h3>Temperature: {temperature} °C</h3>
//         <h3>Humidity: {humidity} %</h3>
//       </div>
//     </div>
//   );
// }

// export default Iot
