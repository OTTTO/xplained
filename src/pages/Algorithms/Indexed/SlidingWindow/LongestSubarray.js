import { Grid } from "@mui/material";
import { CodeBlock } from "components/CodeBlock/CodeBlock";
import { AlgoProblem } from "components/Common/AlgoProblem";
import { MainContainer } from "components/Common/MainContainer";
import { MainContent } from "components/Common/MainContent";
import { PageButtons } from "components/Common/PageButtons";
import { codeSnippets } from "misc/algoCodeSnippets";
import { pages } from "misc/pages";

export function LongestSubarray() {
  return (
    <MainContainer title="LONGEST SUBARRAY">
      <MainContent>
        <Grid>
          <AlgoProblem>
            Find the length of the longest subarray which is less than or equal
            to some value k.
          </AlgoProblem>
          <p>
            To solve this problem as efficiently as possible we will need to use
            a sliding window to cover all of the possible subarrays.
          </p>
          <p>
            The window starts by just containing the first element of the array.
            It expands and contracts based on some condition, in this case that
            is the sum of the elements within the window.
          </p>
          <p>
            As we move the window we will track the current summation, adding to
            it when we shift the right side of the window and subtracting from
            it when we have exceeded the maximum value by deducting elements
            from the left hand side until we are below the threshold again.
          </p>
          <p>
            Upon each iteration we will set the answer to be the max of the
            current answer and the size of the sliding window (right - left +
            1). The answer is finally returned once the array is exhausted.
          </p>

          <CodeBlock
            text={codeSnippets.indexed.longestSubarray}
            forcedLanguage="python"
          />
        </Grid>
      </MainContent>
      <PageButtons algo page={pages.longestSubarray} />
    </MainContainer>
  );
}
