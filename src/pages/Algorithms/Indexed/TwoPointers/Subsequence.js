import { Grid } from "@mui/material";
import { CodeBlock } from "components/CodeBlock/CodeBlock";
import { AlgoProblem } from "components/Common/AlgoProblem";
import { MainContainer } from "components/Common/MainContainer";
import { MainContent } from "components/Common/MainContent";
import { PageButtons } from "components/Common/PageButtons";
import { codeSnippets } from "misc/algoCodeSnippets";
import { pages } from "misc/pages";

export function Subsequence() {
  return (
    <MainContainer title="SUBSEQUENCE">
      <MainContent>
        <Grid>
          <AlgoProblem>
            Detect whether or not a string (s) is a subsequence of another
            string (t). A subsequence means all of the characters are in the
            other string in that order but not necessarily consecutive. For
            example, "ape" is a subsequence of "apple".
          </AlgoProblem>
          <p>
            This is another algorithm we solve with two pointers, although this
            time we do not run them along the same string or array. Here we are
            going to set the pointer <b>i</b> to the 0th character in the string
            we are testing as a subsequence <b>(s)</b> and the other pointer{" "}
            <b>j</b> is set to the 0th character in the complete string{" "}
            <b>(t)</b>.
          </p>
          <p>
            We compare the characters until either string has been exhausted.{" "}
          </p>
          <p>
            We always increment the pointer j on the complete string and if the
            comparison is equal, we increment i as well. If i is equal to the
            length of the complete string once we are done checking, we know
            that <b>s</b> is a subsequence of <b>t</b>.
          </p>
          <CodeBlock
            text={codeSnippets.indexed.subsequence}
            forcedLanguage="python"
          />
        </Grid>
      </MainContent>
      <PageButtons algo page={pages.subsequence} />
    </MainContainer>
  );
}
