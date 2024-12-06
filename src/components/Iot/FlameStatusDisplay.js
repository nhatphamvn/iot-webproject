const FlameStatusDisplay = ({ status, intensity }) => {
    return (
        <div className="flame-status">
            <h3>Flame Sensor</h3>
            <p>{status ? status : 'Waiting for data...'}</p>
            {intensity !== null && <p>Flame Intensity: {intensity}</p>}
        </div>
    );
};

export default FlameStatusDisplay;
