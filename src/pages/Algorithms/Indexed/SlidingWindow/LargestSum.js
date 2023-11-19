import { Grid } from "@mui/material";
import { CodeBlock } from "components/CodeBlock/CodeBlock";
import { AlgoProblem } from "components/Common/AlgoProblem";
import { MainContainer } from "components/Common/MainContainer";
import { MainContent } from "components/Common/MainContent";
import { PageButtons } from "components/Common/PageButtons";
import { codeSnippets } from "misc/algoCodeSnippets";
import { pages } from "misc/pages";

export function LargestSum() {
  return (
    <MainContainer title="LARGEST SUM">
      <MainContent>
        <Grid>
          <AlgoProblem>
            Find the subarray of length k with the largest sum.
          </AlgoProblem>
          <p>
            To solve this problem, we first create a window the size of k while
            adding those values to curr, and initialize the answer to be the
            current value.
          </p>
          <p>
            Now slide that window one element at a time, adding the new element
            to curr and subtracting the one from the left which is leaving the
            window.
          </p>
          <p>
            On each iteration, set the answer to be the max bewteen the current
            answer and the sum of this sliding window. After exhausting the
            array, return the answer.
          </p>
          <CodeBlock
            text={codeSnippets.indexed.largestSum}
            forcedLanguage="python"
          />
        </Grid>
      </MainContent>
      <PageButtons algo page={pages.largestSum} />
    </MainContainer>
  );
}
