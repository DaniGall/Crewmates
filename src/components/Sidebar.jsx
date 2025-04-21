import { Link, useLocation } from 'react-router-dom';

export default function Sidebar() {
    const location = useLocation();

    const linkStyle = (path) => ({
        padding: '10px 15px',
        display: 'block',
        textDecoration: 'none',
        color: location.pathname === path ? '#fff' : '#aaa',
        background: location.pathname === path ? '#333' : 'transparent',
        borderRadius: '6px',
        margin: '5px 0',
    });

    return (
        <aside style={{
            backgroundColor: '#1e1e1e',
            padding: '1rem',
            minHeight: '100vh',
            width: '200px',
            position: 'fixed',
            top: 0,
            left: 0
        }}>
            <h2 style={{ color: '#fff', marginBottom: '1rem' }}>Crewmate Creator</h2>
            <nav>
                <Link to="/" style={linkStyle('/')}>Home</Link>
                <Link to="/create" style={linkStyle('/create')}>Create</Link>
                <Link to="/gallery" style={linkStyle('/gallery')}>Gallery</Link>
            </nav>
        </aside>
    );
}
