import {Component} from 'react'
import ConfigurationContext from './context/ConfigurationContext'
import ConfigurationController from './components/ConfigurationController'

import Layout from './components/Layout'

import './App.css'

class App extends Component {
  state = {showContent: true, showLeftNavbar: true, showRightNavbar: true}

  onChangeContent = () => {
    this.setState(prev => ({showContent: !prev.showContent}))
  }

  onChangeLeft = () => {
    this.setState(prev => ({showLeftNavbar: !prev.showLeftNavbar}))
  }

  onChangeRight = () => {
    this.setState(prev => ({showRightNavbar: !prev.showRightNavbar}))
  }

  render() {
    const {showContent, showLeftNavbar, showRightNavbar} = this.state
    return (
      <ConfigurationContext.Provider
        value={{
          onToggleShowContent: this.onChangeContent,
          onToggleShowLeftNavbar: this.onChangeLeft,
          onToggleShowRightNavbar: this.onChangeRight,
          showContent,
          showLeftNavbar,
          showRightNavbar,
        }}
      >
        <>
          <ConfigurationController />
          <Layout />
        </>
      </ConfigurationContext.Provider>
    )
  }
}

export default App
