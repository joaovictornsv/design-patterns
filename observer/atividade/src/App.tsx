import './App.css'
import { Center, Flex, Heading } from '@chakra-ui/react'
import { InputObserver, Publisher } from './observer/observer'
import { useState } from 'react'
import { InputObserverComponent } from './components/input'

function App() {
  document.title = "Observer"
  const publisher = new Publisher()
  const inputObserver1 = new InputObserver(useState(""))
  const inputObserver2 = new InputObserver(useState(""))
  const inputObserver3 = new InputObserver(useState(""))

  publisher.subscribe(inputObserver1)
  publisher.subscribe(inputObserver2)
  publisher.subscribe(inputObserver3)
  
  return (
    <Center h='100px' color='white'>


      <Flex flexDirection="column" textAlign="left">
        <Heading fontSize="32px" color="black">Observer Pattern</Heading>

        <InputObserverComponent label="Caixa de Texto 1" observer={inputObserver1} publisher={publisher} />
        <InputObserverComponent label="Caixa de Texto 2" observer={inputObserver2} publisher={publisher} />
        <InputObserverComponent label="Caixa de Texto 3" observer={inputObserver3} publisher={publisher} />

      </Flex>
    </Center>
  )
}

export default App
