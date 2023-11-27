import { Grid } from "@mui/material";
import { CodeBlock } from "components/CodeBlock/CodeBlock";
import { AlgoProblem } from "components/Common/AlgoProblem";
import { MainContainer } from "components/Common/MainContainer";
import { MainContent } from "components/Common/MainContent";
import { PageButtons } from "components/Common/PageButtons";
import { codeSnippets } from "misc/algoCodeSnippets";
import { pages } from "misc/pages";

export function TwoSum() {
  return (
    <MainContainer title="PANGRAM">
      <MainContent>
        <Grid>
          <AlgoProblem>
            Find 2 numbers in an array that add up to a target value and return
            the indices of the numbers.
          </AlgoProblem>
          <p>
            By leveraging a hashmap and bit of mathematics, we can solve this
            problem with ease.
          </p>
          <p>
            We iterate over the array, taking each number and subtracting it
            from the target value to get a compliment. We know if the compliment
            is already in the hashmap then we have found our two numbers.
          </p>
          <p>
            If we do not find the value on this iteration we add a mapping for
            the number and the index where it was found.
          </p>
          <p>
            If we exhaust the array we know that these two numbers do not exist.
          </p>
          <CodeBlock
            text={codeSnippets.hashing.twoSum}
            forcedLanguage="python"
          />
        </Grid>
      </MainContent>
      <PageButtons algo page={pages.twoSum} />
    </MainContainer>
  );
}
