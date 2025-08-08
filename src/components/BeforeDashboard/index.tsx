import { Banner } from '@payloadcms/ui/elements/Banner'
import React from 'react'

import { SeedButton } from './SeedButton'
import './index.scss'

const baseClass = 'before-dashboard'

const BeforeDashboard: React.FC = () => {
  return (
    <div className={baseClass}>
      <Banner className={`${baseClass}__banner`} type="success">
        <h4>🎉 Welcome to KOTACOM AGENCY CMS!</h4>
      </Banner>
      <div
        style={{
          background: 'linear-gradient(135deg, #f8fafc, #e2e8f0)',
          padding: '1.5rem',
          borderRadius: '8px',
          marginBottom: '1rem',
        }}
      >
        <h3 style={{ color: '#1e40af', marginTop: '0' }}>Content Management Dashboard</h3>
        <p style={{ color: '#475569', marginBottom: '0' }}>
          Professional tools for managing your client&apos;s content and digital presence.
        </p>
      </div>

      <h4>Quick Actions:</h4>
      <ul className={`${baseClass}__instructions`}>
        <li>
          <SeedButton />
          {' to populate with sample content, then '}
          <a href="/" target="_blank" style={{ color: '#2563eb' }}>
            preview your website
          </a>
        </li>
        <li>
          <strong>Manage Content:</strong> Navigate to Pages, Posts, or Media to start creating
          content
        </li>
        <li>
          <strong>Configure Settings:</strong> Update site identity, navigation, and SEO settings
        </li>
        <li>
          <strong>User Management:</strong> Add team members and manage access permissions
        </li>
      </ul>

      <div
        style={{
          marginTop: '2rem',
          padding: '1rem',
          background: '#f1f5f9',
          borderRadius: '6px',
          borderLeft: '4px solid #3b82f6',
        }}
      >
        <strong style={{ color: '#1e40af' }}>KOTACOM AGENCY</strong> - Professional Digital
        Solutions
        <br />
        <small style={{ color: '#64748b' }}>
          Need help? Contact your development team for technical support.
        </small>
      </div>
    </div>
  )
}

export default BeforeDashboard
