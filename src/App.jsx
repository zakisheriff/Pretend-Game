import './index.css'

function App() {
  return (
    <div className="redirect-container">
      <span className="subtext">Notice: Domain Change</span>
      <p style={{ color: 'rgba(255,255,255,0.6)', marginBottom: '1rem' }}>
        The domain <strong>pretend.theoneatom.com</strong> has moved.
      </p>
      <a href="https://pretend.theatom.lk" className="redirect-link">
        pretend.theatom.lk
      </a>
      <span className="subtext" style={{ marginTop: '2rem' }}>Please update your bookmarks</span>
    </div>
  )
}

export default App
