import { Link } from 'react-router-dom';
import './CrewmateCard.css';

export default function CrewmateCard({ crewmate }) {
    const glowColor = {
        Red: '#ff000070',
        Green: '#00ff0070',
        Blue: '#0080ff70',
        Purple: '#80008070',
        Yellow: '#ffff0070',
        Orange: '#ffa50070',
        Pink: '#ff69b470',
        Rainbow: '0 0 20px 4px #f00, 0 0 30px 8px #ff0, 0 0 40px 12px #0f0, 0 0 50px 16px #0ff, 0 0 60px 20px #00f, 0 0 70px 24px #f0f',
    };

    const cardStyle = {
        boxShadow:
            crewmate.color === 'Rainbow'
                ? glowColor.Rainbow
                : `0 0 20px 4px ${glowColor[crewmate.color] || '#ffffff50'}`
    };

    return (
        <div className="crewmate-card" style={cardStyle}>
            <img src="/crewmate-outline.png" className="crewmate-avatar" />
            <p><strong>Name of Crewmate:</strong> <span>{crewmate.name}</span></p>
            <p><strong>Speed of Crewmate:</strong> <span>{crewmate.speed} mph</span></p>
            <p><strong>Color of Crewmate:</strong> <span>{crewmate.color}</span></p>
            <Link to={`/edit/${crewmate.id}`}>
                <button>Edit Crewmate</button>
            </Link>
        </div>
    );
}