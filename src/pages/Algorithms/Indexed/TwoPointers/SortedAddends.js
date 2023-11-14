import { Grid } from "@mui/material";
import { CodeBlock } from "components/CodeBlock/CodeBlock";
import { AlgoProblem } from "components/Common/AlgoProblem";
import { MainContainer } from "components/Common/MainContainer";
import { MainContent } from "components/Common/MainContent";
import { PageButtons } from "components/Common/PageButtons";
import { codeSnippets } from "misc/algoCodeSnippets";
import { pages } from "misc/pages";

export function Addends() {
  return (
    <MainContainer title="SORTED ADDENDS">
      <MainContent>
        <Grid>
          <AlgoProblem>
            Detect whether or not an array of sorted numbers contains two
            numbers (addends) which add up to a target value.
          </AlgoProblem>
          <p>
            To find the addends we start at either ends of the sorted array, add
            those to elements together and compare it to the target value. If
            that sum is less than the target value than we know that we need to
            increase the sum so we increment the left index, if the sume is
            greater than the target we value we decrement the right index and
            repeat until we either find the number or exhaust the array.
          </p>
          <CodeBlock
            text={codeSnippets.indexed.sortedAddends}
            title="sorted addends"
          />
        </Grid>
      </MainContent>
      <PageButtons algo page={pages.sortedAddends} />
    </MainContainer>
  );
}
