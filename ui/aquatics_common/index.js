import 'react-hot-loader/patch'
import React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import Root from './root'

if(process.env.NODE_ENV === 'dev') {    
    const rootEl = document.getElementById('app')
    if(rootEl) {
        render(
            <AppContainer><Root /></AppContainer>, rootEl)
    } else {
        console.log('The element was not found.')
    }

    if (module.hot) {
        module.hot.accept('./root', () => {
            const NextRootApp = require('./root').default
            render(<AppContainer><NextRootApp /></AppContainer>, rootEl)
        })
    }
} else {
    render(<Root />, document.getElementById('app'))
}