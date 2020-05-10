import React, { Component } from 'react'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'
import { CookiesProvider } from 'react-cookie'
import routes from './routes'
import { createBrowserHistory } from 'history'
import enUS from 'antd/lib/locale-provider/en_US'
import { LocaleProvider } from 'antd'

const history = createBrowserHistory()

class Root extends Component {
    render() {
        const store = configureStore(history)

        return (
            <Provider store={store} key='provider'>
                <CookiesProvider>
                    <LocaleProvider locale={enUS}>
                        { routes(history) }
                    </LocaleProvider>
                </CookiesProvider>
            </Provider>
        )

    }    
}

export default Root