import { useEffect, useState } from 'react';
import { supabase } from '../supabaseClient';
import CrewmateCard from '../components/CrewmateCard';
import './Gallery.css';

export default function Gallery() {
    const [crewmates, setCrewmates] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const { data, error } = await supabase
                .from('crewmates')
                .select('*')
                .order('created_at', { ascending: false });

            if (data) setCrewmates(data);
            if (error) console.error(error);
        };

        fetchData();
    }, []);

    // ✅ Summary statistics
    const total = crewmates.length;
    const fast = crewmates.filter(c => c.speed > 50).length;
    const percentFast = total ? ((fast / total) * 100).toFixed(1) : 0;

    const categoryCount = crewmates.reduce((acc, c) => {
        acc[c.category] = (acc[c.category] || 0) + 1;
        return acc;
    }, {});

    // ✅ Success metric (max 100)
    const successScore = Math.min(100, (fast * 2) + (Object.keys(categoryCount).length * 10));

    return (
        <div className="gallery-container">
            <h1>Your Crewmate Gallery!</h1>

            {/* ✅ Stats Section */}
            <div className="crew-stats">
                <p><strong>Total Crewmates:</strong> {total}</p>
                <p><strong>% Fast (speed {'>'} 50):</strong> {percentFast}%</p>
                <p><strong>Success Rating:</strong> {successScore}/100</p>
            </div>

            {/* ✅ Crewmate List */}
            <div className="crewmate-grid">
                {crewmates.map((c) => (
                    <CrewmateCard key={c.id} crewmate={c} />
                ))}
            </div>
        </div>
    );
}