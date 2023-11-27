import { Grid } from "@mui/material";
import { CodeBlock } from "components/CodeBlock/CodeBlock";
import { AlgoProblem } from "components/Common/AlgoProblem";
import { MainContainer } from "components/Common/MainContainer";
import { MainContent } from "components/Common/MainContent";
import { PageButtons } from "components/Common/PageButtons";
import { codeSnippets } from "misc/algoCodeSnippets";
import { pages } from "misc/pages";

export function LongestSubstring() {
  return (
    <MainContainer title="LONGEST SUBSTRING">
      <MainContent>
        <Grid>
          <AlgoProblem>
            Find the length of the longest substring with only 1s, you are
            allowed to subsititue one 0 for a 1. "11<b>0</b>1100111" could
            become "11<b>1</b>1100111".
          </AlgoProblem>
          <p>
            This is a sliding window problem where the window slides based on
            the presence of a certain element or character.
          </p>
          <p>
            To do so we loop over the characters in the string, if the character
            is '0' increment the zeros count by 1. While (if) you have more than
            one zeros in your substring, continue to slide the left hand of the
            window over one character until zeros is equal to one again.
          </p>
          <p>
            At the end of each iteration, set the answer to be the maximun of
            the current answer and the current window size (right - left + 1).
            Once the right hand side of the window hits the end of the array, we
            return the answer.
          </p>

          <CodeBlock
            text={codeSnippets.indexed.longestSubstring}
            forcedLanguage="python"
          />
        </Grid>
      </MainContent>
      <PageButtons algo page={pages.longestSubstring} />
    </MainContainer>
  );
}
