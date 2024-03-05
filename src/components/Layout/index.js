// Write your code here
import Header from '../Header'
import Footer from '../Footer'
import Body from '../Body'
import './index.css'

const Layout = () => (
  <div className="Layout-container">
    <Header />
    <div className="content-container">
      <Body />
    </div>
    <Footer />
  </div>
)

export default Layout
