import './index.css'

function App() {
  return (
    <div className="redirect-container">
      <span className="subtext">Infrastructure Update</span>
      
      <h1 className="new-domain">pretend.theatom.lk</h1>
      
      <p className="description">
        We've moved to a new permanent home. <br />
        Please update your bookmarks to the new domain.
      </p>
      
      <a href="https://pretend.theatom.lk" className="redirect-btn">
        Visit New Site
      </a>

      <a href="https://pretend.theoneatom.com" className="footer-link">
        Legacy Domain: pretend.theoneatom.com
      </a>
    </div>
  )
}

export default App
