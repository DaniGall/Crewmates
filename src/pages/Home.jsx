import React from 'react';

export default function Home() {
    return (
        <div style={{
            marginLeft: '220px',
            padding: '2rem',
            color: 'white',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
        }}>
            <h1 style={{
                fontSize: '2.5rem',
                marginBottom: '1rem'
            }}>
                🚀 Welcome to the Crewmate Creator!
            </h1>
            <p style={{
                fontSize: '1.2rem',
                maxWidth: '600px',
                lineHeight: '1.6'
            }}>
                Create your dream team of crewmates. Edit them, track them, and build a legendary crew. 🧑‍🚀✨
            </p>
            <img
                src="/crewmates.png" // ✅ make sure this matches your actual file name
                alt="Illustration of crewmates"
                style={{
                    maxWidth: '400px',
                    marginTop: '2rem',
                    borderRadius: '12px',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
                }}
            />
        </div>
    );
}