import { ChakraProvider } from '@chakra-ui/react'
import About from './components/About'
import Education from './components/Education'
import Navbar from './components/Navbar'

const App = () => {
    return (
        <ChakraProvider>
            <Navbar />
            <About />
            <Education />
        </ChakraProvider>
    )
}

export default App
