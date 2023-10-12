import { ChakraProvider } from '@chakra-ui/react'
import About from './components/About'

const App = () => {
    return (
        <ChakraProvider>
            <About />
        </ChakraProvider>
    )
}

export default App
