from abc import ABC, abstractmethod

class Handler(ABC):

    @abstractmethod
    def handle(self, text: str):
        pass

    @abstractmethod
    def set_next(self, handler):
        pass


class AnalysisHandler(Handler):
    _next: Handler = None

    @abstractmethod
    def handle(self, text: str):
        pass

    def set_next(self, handler: Handler):
        if self._next is None:
            self._next = handler

        else:
            self._next.set_next(handler)
  

class SpaceAnalysisHandler(AnalysisHandler):
    def handle(self, text: str):
        total_spaces = text.count(' ')
        print(f'Espaços " ": \t{total_spaces}')

        if self._next: self._next.handle(text)

class LetterAAnalysisHandler(AnalysisHandler):
    def handle(self, text: str):
        total_a = text.lower().count('a')
        print(f'Letras "a": \t{total_a}')

        if self._next: self._next.handle(text)

class DotAnalysisHandler(AnalysisHandler):
    def handle(self, text: str):
        dot_spaces = text.count('.')
        print(f'Pontos ".": \t{dot_spaces}')

        if self._next: self._next.handle(text)


# Main
space_analysis_handler = SpaceAnalysisHandler()
space_analysis_handler.set_next(LetterAAnalysisHandler())
space_analysis_handler.set_next(DotAnalysisHandler())

text = input("Texto para análise: ")
space_analysis_handler.handle(text)