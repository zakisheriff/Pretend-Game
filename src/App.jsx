import './index.css'

function App() {
  return (
    <div className="redirect-container">
      <span className="subtext">Notice: Domain Change</span>
      <p style={{ color: 'rgba(255,255,255,0.6)', marginBottom: '2rem', fontSize: '1.1rem' }}>
        The domain <strong>pretend.theoneatom.com</strong> has moved.
      </p>
      
      <a href="https://pretend.theatom.lk" className="redirect-link">
        Go to pretend.theatom.lk
      </a>

      <span className="subtext" style={{ marginTop: '2.5rem', opacity: 0.5 }}>
        Click the button above to visit our new home
      </span>
    </div>
  )
}

export default App
