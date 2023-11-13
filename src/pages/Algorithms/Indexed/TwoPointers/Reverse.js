import { Grid, Typography } from "@mui/material";
import { CodeBlock } from "components/CodeBlock/CodeBlock";
import { AlgoButton } from "components/Common/AlgoButton";
import { DemoTitle } from "components/Common/DemoTitle";
import { MainDivider } from "components/Common/Divider";
import { MainContainer } from "components/Common/MainContainer";
import { MainContent } from "components/Common/MainContent";
import { PageButtons } from "components/Common/PageButtons";
import { OperationDescription } from "components/LinkedListDemo/OperationDescription";
import { codeSnippets } from "misc/algoCodeSnippets";
import { href } from "misc/href";
import { useState } from "react";
import { sleep } from "utils/utils";

export function ReverseTwoPointers() {
  const str = "1234567";
  const [arr, setArr] = useState(str.split(""));
  const [i, setI] = useState();
  const [j, setJ] = useState();
  const [temp, setTemp] = useState("");
  const [buttonsDisabled, setButtonsDisabled] = useState(false);

  const backgroundColor = (idx) => {
    if (i === idx) return "blue";
    if (j === idx) return "orange";
    return "black";
  };

  const timeout = 1000;
  const tempTimeout = 500;

  const animate = async (iArray, jArray, tempArray, arrays) => {
    console.log(arrays);
    for (let k = 0; k < arrays.length; k++) {
      setI(iArray[k]);
      setJ(jArray[k]);
      if (k > 0 && !(k % 2 === 0)) {
        await sleep(tempTimeout);
        setTemp(tempArray[Math.ceil(k / 2)]);
        await sleep(tempTimeout);
      }
      setArr(arrays[k]);
      await sleep(timeout);
    }
  };

  const reverse = async () => {
    setButtonsDisabled(true);
    const arrCopy = [...arr];
    let i = 0;
    let j = arrCopy.length - 1;

    const arrays = [[...arrCopy]];
    const iArray = [i];
    const jArray = [j];
    const tempArray = [""];

    while (i < j) {
      const temp = arrCopy[i];
      tempArray.push(temp);

      arrCopy[i] = arrCopy[j];
      iArray.push(i);
      jArray.push(j);
      arrays.push([...arrCopy]);

      arrCopy[j] = temp;
      iArray.push(i++);
      jArray.push(j--);
      arrays.push([...arrCopy]);
    }

    await animate(iArray, jArray, tempArray, arrays);
    setI(undefined);
    setJ(undefined);
    setTemp("");
    setButtonsDisabled(false);
  };
  return (
    <MainContainer title="REVERSE">
      <MainContent>
        <Grid>
          <Typography backgroundColor="#d3d3d3" padding="1rem" marginTop="1rem">
            Reverse an array and a string in place using constant memory.
          </Typography>
          <p>
            In order to reverse an array in place with constant memory, only
            using one variable, we start with one pointer to the 0th element and
            one pointer to the last element. We swap them using a temp variable
            in most languages although ptyhon allows us to swap them in a single
            line of code. After swapping, we increment the first pointer and
            decrement the second until the pointers meet or pass each other.
            Doing so we reverse the array.
          </p>
          <CodeBlock
            text={codeSnippets.indexed.reverseArr}
            title="reverse array"
          />
          <p>
            Reversing a string in place is made difficult by the fact that we
            would have to mainpulate substrings. Instead we will transfrom the
            string into a character array and leverage the code we used to
            reverse an array.
          </p>
          <CodeBlock
            text={codeSnippets.indexed.reverseStr}
            title="reverse string"
          />
          <MainDivider />
          <Grid textAlign="center" margin="0 auto" marginTop="1rem">
            <DemoTitle title="REVERSE ARRAY DEMO" />
            <Grid display="flex" justifyContent="center" margin=".2rem 0 .5rem">
              <OperationDescription backgroundColor="blue" text="i" />
              <OperationDescription backgroundColor="orange" text="j" />
            </Grid>
            <Grid display="flex" justifyContent="center">
              {new Array(arr.length).fill(true).map((_, idx) => (
                <Grid
                  width="1.5rem"
                  marginRight=".2rem"
                  padding=".2rem"
                  color="white"
                  textAlign="center"
                  sx={{ backgroundColor: backgroundColor(idx) }}
                >
                  {arr[idx]}
                </Grid>
              ))}
            </Grid>
            <Typography marginTop=".5rem">Temp: {temp}</Typography>
            <AlgoButton
              onClick={reverse}
              disabled={buttonsDisabled}
              text="REVERSE"
            />
          </Grid>
        </Grid>
      </MainContent>
      <PageButtons backTitle="ALGORITHMS" backTo={href.algo.home} />
    </MainContainer>
  );
}
