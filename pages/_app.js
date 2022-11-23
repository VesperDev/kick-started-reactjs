import { ChakraProvider } from '@chakra-ui/react'
import { SWRConfig } from 'swr'
import { fetcher } from 'utils/fetcher'
import theme from '../theme'

function MyApp ({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <SWRConfig value={{ fetcher }}>
        <Component {...pageProps} />
      </SWRConfig>
    </ChakraProvider>
  )
}

export default MyApp
