export interface IObserver {
  update(text: string): void;
  getState(): string;
}

export class Publisher {
  private readonly observers: IObserver[] = [];

  private mainState: string = "";


  subscribe(observer: IObserver): void {
    if (!this.observers.includes(observer)) {
      this.observers.push(observer);
    }
  }

  unsubscribe(observer: IObserver): void {

    const index = this.observers.findIndex((s) => s === observer);

    if (index != -1) {
      this.observers.slice(index, 1)
    }
  }

  getState() {
    return this.mainState
  }

  setState(newState: string) {
    this.mainState = newState
    this.notifyObservers()
  }


  notifyObservers() {
    this.observers.forEach(o => o.update(this.mainState))
  }
}


export class InputObserver implements IObserver {
  private state: [string, React.Dispatch<React.SetStateAction<string>>];

  constructor(state: [string, React.Dispatch<React.SetStateAction<string>>]) {
    this.state = state
  }

  getState() {
    return this.state[0];
  }

  update(text: string): void {
    this.state[1](text)
  }
}