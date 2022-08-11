import ReactDOM from 'react-dom/client'
import {ChakraProvider, theme} from '@chakra-ui/react'
import App from "./App"


const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
    <ChakraProvider theme={theme}>
        <App />
    </ChakraProvider>
    
)