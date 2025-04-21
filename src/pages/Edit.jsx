import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { supabase } from '../supabaseClient';
import './Edit.css';

export default function Edit() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [speed, setSpeed] = useState('');
    const [color, setColor] = useState('');
    const [category, setCategory] = useState('');

    useEffect(() => {
        const fetchCrewmate = async () => {
            const { data, error } = await supabase
                .from('crewmates')
                .select('*')
                .eq('id', id)
                .single();

            if (error) {
                console.error('Fetch error:', error);
            } else {
                setName(data.name || '');
                setSpeed(data.speed?.toString() || '');
                setColor(data.color || '');
                setCategory(data.category || '');
            }
        };

        fetchCrewmate();
    }, [id]);

    const handleUpdate = async (e) => {
        e.preventDefault();

        const { error } = await supabase
            .from('crewmates')
            .update({
                name,
                speed: parseInt(speed),
                color,
                category,
            })
            .eq('id', id);

        if (error) {
            console.error('Update error:', error);
        } else {
            navigate('/gallery');
        }
    };

    const handleDelete = async () => {
        const confirmDelete = window.confirm('Are you sure you want to delete this crewmate?');
        if (!confirmDelete) return;

        const { error } = await supabase.from('crewmates').delete().eq('id', id);

        if (error) {
            console.error('Delete error:', error);
        } else {
            navigate('/gallery');
        }
    };

    return (
        <div className="edit-page">
            <h1>Edit Crewmate</h1>
            <form onSubmit={handleUpdate} className="edit-form">
                <label>Name:</label>
                <input value={name} onChange={(e) => setName(e.target.value)} />

                <label>Speed (mph):</label>
                <input
                    type="number"
                    value={speed}
                    onChange={(e) => setSpeed(e.target.value)}
                />

                <label>Color:</label>
                <input value={color} onChange={(e) => setColor(e.target.value)} />

                <label>Category:</label>
                <input value={category} onChange={(e) => setCategory(e.target.value)} />

                <button type="submit">Update</button>
                <button type="button" className="delete-btn" onClick={handleDelete}>
                    Delete
                </button>
            </form>
        </div>
    );
}