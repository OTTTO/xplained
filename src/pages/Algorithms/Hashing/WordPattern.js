import { Grid } from "@mui/material";
import { CodeBlock } from "components/CodeBlock/CodeBlock";
import { AlgoProblem } from "components/Common/AlgoProblem";
import { MainContainer } from "components/Common/MainContainer";
import { MainContent } from "components/Common/MainContent";
import { PageButtons } from "components/Common/PageButtons";
import { codeSnippets } from "misc/algoCodeSnippets";
import { pages } from "misc/pages";

export function WordPattern() {
  return (
    <MainContainer title="WORD PATTERN">
      <MainContent>
        <Grid>
          <AlgoProblem>
            <span>Check if a pattern matches a given string.</span>
            <p></p>
            <span>
              Pattern will be in the format of "abba", matching characters
              should be matching words in the string.
            </span>
          </AlgoProblem>
          <p>
            Before we begin iterating over the pattern and checking if it is
            honored, we check if it is even a possibility in the first place.
          </p>
          <p>
            We know if the set of words and the set of characters in the pattern
            are not the same length then the pattern is not honored by the
            string. This is because every character needs a word and visa versa.
          </p>
          <p>
            We also know that if the the number of characters in the pattern
            does not match the number of words the pattern is not honored as
            well.
          </p>
          <p>
            The algorithm begins by iterating over the pattern and checking if
            that character is already mapped. If it has been mapped but the
            character does not match what is already in the mapping we know that
            the pattern is not honored and we return False.
          </p>
          <p>
            If the character is not already in the mapping, we check if the word
            has been mapped to another character in which case we return False.
            Otherwise we create a new mapping to track that character/word
            combination.
          </p>
          <p>
            Once we exhaust the pattern we know that it has been honored and we
            return True.
          </p>
          <CodeBlock
            text={codeSnippets.hashing.wordPattern}
            forcedLanguage="python"
          />
        </Grid>
      </MainContent>
      <PageButtons algo page={pages.wordPattern} />
    </MainContainer>
  );
}
