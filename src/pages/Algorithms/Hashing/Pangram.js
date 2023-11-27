import { Grid } from "@mui/material";
import { CodeBlock } from "components/CodeBlock/CodeBlock";
import { AlgoProblem } from "components/Common/AlgoProblem";
import { MainContainer } from "components/Common/MainContainer";
import { MainContent } from "components/Common/MainContent";
import { PageButtons } from "components/Common/PageButtons";
import { codeSnippets } from "misc/algoCodeSnippets";
import { pages } from "misc/pages";

export function Pangram() {
  return (
    <MainContainer title="PANGRAM">
      <MainContent>
        <Grid>
          <AlgoProblem>
            Check if a sentence is a pangram meaning it contains all 26 letters
            of the alphabet. In our case we are not going to use any
            punctuation, so we are only looking for the 26 letters of the
            alphabet.
          </AlgoProblem>
          <p>
            First we remove all spaces and make all of the letters lowercase.
          </p>
          <p>
            Once we have all of our letters we create a set with them and check
            if there are exactly 26 of them.
          </p>
          <p>
            As an exercise you can replace any non-letter characters with a
            regex to find a pangram for any english sentence.
          </p>
          <CodeBlock
            text={codeSnippets.hashing.pangram}
            forcedLanguage="python"
          />
        </Grid>
      </MainContent>
      <PageButtons algo page={pages.pangram} />
    </MainContainer>
  );
}
