import { useState } from 'react'

function Settings() {
  const [settings, setSettings] = useState({
    notifications: true,
    darkMode: false,
    privateProfile: false
  })

  const handleChange = (key) => {
    setSettings(prev => ({
      ...prev,
      [key]: !prev[key]
    }))
  }

  return (
    <div className="content-section">
      <h2>Settings</h2>
      <p>Manage your account settings</p>
      <div className="settings-form">
        <div className="setting-item">
          <label>
            <input
              type="checkbox"
              checked={settings.notifications}
              onChange={() => handleChange('notifications')}
            />
            Enable Notifications
          </label>
        </div>
        <div className="setting-item">
          <label>
            <input
              type="checkbox"
              checked={settings.darkMode}
              onChange={() => handleChange('darkMode')}
            />
            Dark Mode
          </label>
        </div>
        <div className="setting-item">
          <label>
            <input
              type="checkbox"
              checked={settings.privateProfile}
              onChange={() => handleChange('privateProfile')}
            />
            Private Profile
          </label>
        </div>
        <button className="save-btn">Save Settings</button>
      </div>
    </div>
  )
}

export default Settings
