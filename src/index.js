import React from 'react'
import ReactDOM from 'react-dom'
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'
import MessageList from './components/message-list'

const NewApp = require('./components/message-list').default
const App = () => (<MessageList />)

function renderApp(App) {
    ReactDOM.render(<App />, document.getElementById('root'))
}

renderApp(App)

if (module.hot) {
    module.hot.accept('./components/message-list', () => {
        renderApp(NewApp)
    })
}
