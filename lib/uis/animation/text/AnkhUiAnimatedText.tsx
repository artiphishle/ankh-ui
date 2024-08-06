import { AnkhUiAnimatedLetter } from "../letter/AnkhUiAnimatedLetter";

export function AnkhUiAnimatedText({ text }: IAnkhUiAnimatedText) {
  return <div style={{ display: 'flex', flexWrap: 'wrap' }}>
    {text.split('').map((letter, letterIndex) => <AnkhUiAnimatedLetter key={letterIndex} letter={letter} />)}
  </div>
}

interface IAnkhUiAnimatedText {
  text: string;
}