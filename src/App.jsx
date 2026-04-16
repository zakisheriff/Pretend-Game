import './index.css'

function App() {
  return (
    <div className="redirect-card">
      <span className="subtext">The Atom Infrastructure</span>
      
      <div className="domain-info">
        <h1>Domain Moved</h1>
        <p>
          The service at <strong>pretend.theoneatom.com</strong> has been permanently moved to our new infrastructure <span className="highlight-domain">pretend.theatom.lk</span>.
        </p>
      </div>
      
      <a href="https://pretend.theatom.lk" className="redirect-btn">
        Enter pretend.theatom.lk
      </a>

      <div className="footer-note">
        You are being redirected to our improved platform
      </div>
    </div>
  )
}

export default App
