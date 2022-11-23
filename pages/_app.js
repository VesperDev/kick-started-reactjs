import { ChakraProvider } from '@chakra-ui/react'
import { Provider } from 'react-redux'
import { SWRConfig } from 'swr'
import { fetcher } from 'utils/fetcher'
import theme from '../theme'
import { useStore } from 'store/index'

function MyApp ({ Component, pageProps }) {

  const store = useStore(pageProps.initialReduxState)

  return (
    <ChakraProvider theme={theme}>
      <Provider store={store}>
        <SWRConfig value={{ fetcher }}>
          <Component {...pageProps} />
        </SWRConfig>
      </Provider>
    </ChakraProvider>
  )
}

export default MyApp
