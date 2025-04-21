import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { supabase } from '../supabaseClient';
import './Detail.css';

export default function Detail() {
    const { id } = useParams();
    const [crewmate, setCrewmate] = useState(null);

    useEffect(() => {
        const fetchCrewmate = async () => {
            const { data, error } = await supabase
                .from('crewmates')
                .select('*')
                .eq('id', id)
                .single();

            if (error) console.error(error);
            else setCrewmate(data);
        };

        fetchCrewmate();
    }, [id]);

    if (!crewmate)
        return (
            <div style={{ color: 'white', padding: '2rem', marginLeft: '220px' }}>
                Loading...
            </div>
        );

    return (
        <div className="detail-page">
            <h1>{crewmate.name}'s Profile</h1>
            <div className="detail-card">
                <img src="/crewmateblank.png" alt="Crewmate avatar" className="crewmate-avatar" />
                <p><strong>Name:</strong> {crewmate.name}</p>
                <p><strong>Speed:</strong> {crewmate.speed} mph</p>
                <p><strong>Color:</strong> {crewmate.color}</p>
                <p><strong>Category:</strong> {crewmate.category || 'None'}</p>
                <Link to={`/edit/${crewmate.id}`}>
                    <button>Edit Crewmate</button>
                </Link>
            </div>
        </div>
    );
}