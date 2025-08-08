import React from 'react'

const BeforeLogin: React.FC = () => {
  return (
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      <div
        style={{
          background: 'linear-gradient(135deg, #3b82f6, #1d4ed8)',
          borderRadius: '12px',
          padding: '2rem',
          color: 'white',
          marginBottom: '1rem',
        }}
      >
        <h2 style={{ margin: '0 0 1rem 0', fontSize: '1.5rem' }}>Welcome to KOTACOM AGENCY</h2>
        <p style={{ margin: '0', opacity: '0.9' }}>
          Professional digital solutions and content management
        </p>
      </div>
      <p style={{ color: '#6b7280', fontSize: '0.875rem' }}>
        Please log in to access your dashboard and manage content
      </p>
    </div>
  )
}

export default BeforeLogin
