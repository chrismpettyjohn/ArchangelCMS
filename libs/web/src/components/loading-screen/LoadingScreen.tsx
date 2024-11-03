import React from 'react';

export function LoadingScreen() {
  return (
    <div style={{ position: 'absolute', top: 0, left: 0, background: '#5F8A96', width: '100%', height: '100%', textAlign: 'center' }}>
      <div style={{ marginTop: '10%' }}>
        <i className="fas fa-spinner fa-spin fa-4x" />
      </div>
    </div>
  )
}
