import { Grid } from "@mui/material";
import { CodeBlock } from "components/CodeBlock/CodeBlock";
import { AlgoProblem } from "components/Common/AlgoProblem";
import { MainContainer } from "components/Common/MainContainer";
import { MainContent } from "components/Common/MainContent";
import { PageButtons } from "components/Common/PageButtons";
import { codeSnippets } from "misc/algoCodeSnippets";
import { href } from "misc/href";

export function Palindrome() {
  return (
    <MainContainer title="PALINDROME">
      <MainContent>
        <Grid>
          <AlgoProblem>
            Detect whether or not a word is a palindrome, meaining it is
            identical whether it is read forwards or backwards.
          </AlgoProblem>
          <p>
            To find out if a string is a palindrome, we take the same approach
            as we did when reversing it. We start with one pointer on the first
            element and another on the last element. We continually compare
            these elements while we bring the pointers closer together until
            they meet or pass one another. If the elements are ever unequal we
            short circuit the method and return false right then and there. On
            the other hand, if we make it to the end of the while loop we have
            proven that the string is a palindrome and we return true.
          </p>
          <CodeBlock
            text={codeSnippets.indexed.palindrome}
            title="detect palindrome"
          />
        </Grid>
      </MainContent>
      <PageButtons
        algo
        backTitle="REVERSE"
        backTo={href.algo.indexed.reverse}
      />
    </MainContainer>
  );
}