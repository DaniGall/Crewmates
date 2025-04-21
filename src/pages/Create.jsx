import { useState } from 'react';
import { supabase } from '../supabaseClient';
import { useNavigate } from 'react-router-dom';
import './Create.css';

export default function Create() {
    const [name, setName] = useState('');
    const [speed, setSpeed] = useState('');
    const [color, setColor] = useState('');
    const [category, setCategory] = useState('');
    const navigate = useNavigate();

    // Define available color options by category
    const categoryOptions = {
        Engineer: ['Blue', 'Green', 'Yellow'],
        Captain: ['Red', 'Purple'],
        Medic: ['Pink', 'White'],
        Rogue: ['Black', 'Orange'],
        General: ['Red', 'Green', 'Blue', 'Purple', 'Yellow', 'Orange', 'Pink', 'Rainbow'],
    };

    const availableColors = categoryOptions[category] || [];

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { error } = await supabase
            .from('crewmates')
            .insert([{ name, speed: parseInt(speed), color, category }]);

        if (!error) navigate('/gallery');
        else console.error(error);
    };

    return (
        <div className="create-page">
            <h1>Create a New Crewmate</h1>
            <img src="/crewmates.png" className="crewmates-image" />

            <form className="create-form" onSubmit={handleSubmit}>
                <div className="form-section">
                    <label>Name:</label>
                    <input
                        type="text"
                        placeholder="Enter crewmate's name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>

                <div className="form-section">
                    <label>Speed (mph):</label>
                    <input
                        type="number"
                        placeholder="Enter speed in mph"
                        value={speed}
                        onChange={(e) => setSpeed(e.target.value)}
                    />
                </div>

                <div className="form-section">
                    <label>Category:</label>
                    <select value={category} onChange={(e) => {
                        setCategory(e.target.value);
                        setColor(''); // reset color when category changes
                    }}>
                        <option value="">-- Select Category --</option>
                        {Object.keys(categoryOptions).map((cat) => (
                            <option key={cat} value={cat}>{cat}</option>
                        ))}
                    </select>
                </div>

                {category && (
                    <div className="form-section color-section">
                        <label>Color:</label>
                        {availableColors.map((c) => (
                            <div key={c} className="color-option">
                                <label>
                                    <input
                                        type="radio"
                                        name="color"
                                        value={c}
                                        checked={color === c}
                                        onChange={(e) => setColor(e.target.value)}
                                    />
                                    {c}
                                </label>
                            </div>
                        ))}
                    </div>
                )}

                <div className="submit-section">
                    <button type="submit" disabled={!name || !speed || !color || !category}>
                        Create Crewmate
                    </button>
                </div>
            </form>
        </div>
    );
}