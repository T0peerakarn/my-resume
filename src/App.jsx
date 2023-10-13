import { useState, useEffect } from 'react'
import { navbar } from './contents/navbar'
import { ChakraProvider } from '@chakra-ui/react'
import Navbar from './components/Navbar'
import About from './components/About'
import Education from './components/Education'
import Awards from './components/Awards'
import Experiences from './components/Experiences'

const App = () => {
    const [current, setCurrent] = useState('About');
    useEffect(() => {
        const sectionIds = navbar.map(section => section.name)
        
        const handleSectionVisibility = (entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    setCurrent(entry.target.id);
                }
            });
        };

        const options = {
            root: null,
            rootMargin: "0px",
            threshold: 0.5
        };

        const observer = new IntersectionObserver(handleSectionVisibility, options);

        sectionIds.forEach((sectionId) => {
            const section = document.getElementById(sectionId);
            if (section) {
                observer.observe(section);
            }
        });

        return () => {
            observer.disconnect();
        };
    }, [])
    
    return (
        <ChakraProvider>
            <Navbar current={current} setCurrent={setCurrent} />
            <About />
            <Education />
            <Awards />
            <Experiences />
        </ChakraProvider>
    )
}

export default App
