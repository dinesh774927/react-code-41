import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const Body = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showContent, showLeftNavbar, showRightNavbar} = value

      return (
        <div className="body-container">
          {showLeftNavbar ? (
            <div className="leftNav-container">
              <h1 className="leftNav-heading">Left Navbar Menu</h1>
              <ul className="left-ul">
                <li className="left-li">Item 1</li>
                <li className="left-li">Item 2</li>
                <li className="left-li">Item 3</li>
                <li className="left-li">Item 4</li>
              </ul>
            </div>
          ) : null}
          {showContent && (
            <div className="contentContainer">
              <h1 className="leftNav-heading">Content</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam.
              </p>
            </div>
          )}
          {showRightNavbar && (
            <div className="rightNav-container">
              <h1 className="leftNav-heading">Right Navbar</h1>
              <ul className="left-ul">
                <li className="right-li">
                  <p>Ad 1</p>
                </li>
                <li className="right-li">
                  <p>Ad 2</p>
                </li>
              </ul>
            </div>
          )}
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default Body
