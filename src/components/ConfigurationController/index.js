// Write your code here
import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
        showContent,
        showLeftNavbar,
        showRightNavbar,
      } = value
      const contentCheck = {checked: showContent}
      const contentLeftCheck = {checked: showLeftNavbar}
      const contentRightCheck = {checked: showRightNavbar}

      return (
        <div className="control-container">
          <h1 className="heading">Layout</h1>
          <ul className="control-ul">
            <li className="control-li">
              <input
                className="control-checkbox"
                type="checkbox"
                id="Content"
                {...contentCheck}
                onChange={onToggleShowContent}
              />
              <label className="control-label" htmlFor="Content">
                Content
              </label>
            </li>
            <li className="control-li">
              <input
                className="control-checkbox"
                type="checkbox"
                id="LeftNavbar"
                {...contentLeftCheck}
                onChange={onToggleShowLeftNavbar}
              />
              <label className="control-label" htmlFor="LeftNavbar">
                Left Navbar
              </label>
            </li>
            <li className="control-li">
              <input
                className="control-checkbox"
                type="checkbox"
                id="RightNavbar"
                {...contentRightCheck}
                onChange={onToggleShowRightNavbar}
              />
              <label className="control-label" htmlFor="RightNavbar">
                Right Navbar
              </label>
            </li>
          </ul>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController
