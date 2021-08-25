import { hasAVowel } from "../utils/hasAVowel";
import { isInputStrong } from "../utils/isInputStrong";

interface WordDescriptionProps {
  wordToDescribe: string;
}

function WordDescription({
  wordToDescribe,
}: WordDescriptionProps): JSX.Element {
  const hasAtLeastFiveCharacters = wordToDescribe.length > 5;
  const containsAVowel = hasAVowel(wordToDescribe);
  const hasTheLetterQ = wordToDescribe.toLowerCase().match("q");
  const hasSpecialCharacters = /[ `!@#$%^&*()_+\-={};':"\\|,.<>?~]/.test(
    wordToDescribe
  );

  return (
    <ul>
      {hasAtLeastFiveCharacters && <li>Has at least five characters</li>}
      {containsAVowel && <li>Contains a vowel</li>}
      {hasTheLetterQ && <li>Contains the letter Q</li>}
      {hasSpecialCharacters && <li>Contains special characters</li>}
      {isInputStrong(wordToDescribe) && <li>Impressively strong input!</li>}
    </ul>
  );
}

export default WordDescription;
