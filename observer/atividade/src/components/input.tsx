import { Button, Flex, Input, Text } from '@chakra-ui/react';
import { IObserver, Publisher } from '../observer/observer'

interface InputObserverComponentProps {
  observer: IObserver;
  publisher: Publisher;
  label: string;
}

export const InputObserverComponent = ({ observer, publisher, label }: InputObserverComponentProps) => (
  <>
    <Text mb='2px' fontSize="12px" color="black">{label}</Text>
      <Flex >
        <Input placeholder='Digite algo' value={observer.getState()} onChange={(e) => observer.update(e.target.value)}/>
        <Button p="10" ml="10" bg='green' color="white" onClick={() => publisher.setState(observer.getState())}>Notify</Button>
      </Flex>
  </>
)