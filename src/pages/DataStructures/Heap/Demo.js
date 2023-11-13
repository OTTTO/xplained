import { Grid, Typography } from "@mui/material";
import { BinaryTreeRow } from "components/BinaryTreeDemo/BinaryTreeRow";
import { DemoTitle } from "components/Common/DemoTitle";
import { OperationButton } from "components/LinkedListDemo/OperationButton";
import { useState } from "react";
import { getRandomInt, sleep } from "utils/utils";

export function HeapDemo() {
  const [heap, setHeap] = useState([]);
  const getNextNode = () => getRandomInt(100);
  const [nextNode, setNextNode] = useState(getNextNode());
  const [phaseNode, setPhaseNode] = useState([]);
  const [buttonsDisabled, setButtonsDisabled] = useState(false);
  const isFull = heap.length === 15;
  const isEmpty = heap.length === 0;

  const timeout = 700;
  const setPhaseNodes = async (nodeSteps, heapArr) => {
    for (let i = 0; i < nodeSteps.length; i++) {
      setHeap(heapArr[i]);
      setPhaseNode(nodeSteps[i]);
      await sleep(timeout);
    }
  };

  const heapCopy = [...heap];

  const size = () => heapCopy.length;
  const max = () => heapCopy[0];

  const swap = (u, v) => {
    const temp = heapCopy[u];
    heapCopy[u] = heapCopy[v];
    heapCopy[v] = temp;
  };

  const siftUp = (curr, parent, nodeSteps, heapArr) => {
    while (heapCopy[curr] > heapCopy[parent]) {
      swap(curr, parent);
      nodeSteps.push(parent);
      heapArr.push([...heapCopy]);
      curr = parent;
      parent = Math.ceil(parent / 2) - 1;
    }
    return curr;
  };

  const insert = async () => {
    setButtonsDisabled(true);
    let curr = size();
    let parent = Math.ceil(curr / 2) - 1;

    heapCopy.push(nextNode);
    const heapArr = [[...heapCopy]];
    const nodeSteps = [curr];

    curr = siftUp(curr, parent, nodeSteps, heapArr);

    await setPhaseNodes(nodeSteps, heapArr);
    setNextNode(getNextNode());
    setPhaseNode(undefined);
    setButtonsDisabled(false);
  };

  const siftDown = (parent, nodeSteps, heapArr) => {
    const leftChild = 2 * parent + 1;
    const rightChild = 2 * parent + 2;
    const biggerChild =
      heapCopy[leftChild] > heapCopy[rightChild] ? leftChild : rightChild;

    if (heapCopy[parent] < heapCopy[biggerChild]) {
      swap(parent, biggerChild);
      nodeSteps.push(biggerChild);
      heapArr.push([...heapCopy]);
      siftDown(biggerChild, nodeSteps, heapArr);
    }
  };

  const extractMax = async () => {
    setButtonsDisabled(true);
    const nodeSteps = [];
    const heapArr = [];

    if (heapCopy.length === 0) throw new Error("Empty Heap");
    const max_ = max();
    if (size() === 1) {
      heapCopy.pop();
      setHeap([]);
    } else {
      nodeSteps.push(heapCopy.length - 1);
      heapArr.push([...heapCopy]);
      heapCopy[0] = heapCopy.pop();
      nodeSteps.push(0);
      heapArr.push([...heapCopy]);
      siftDown(0, nodeSteps, heapArr);
    }

    await setPhaseNodes(nodeSteps, heapArr);
    setNextNode(getNextNode());

    await sleep(timeout);
    setPhaseNode(undefined);
    setButtonsDisabled(false);

    return max_;
  };

  return (
    <Grid
      display="flex"
      flexDirection="column"
      textAlign="center"
      justifyContent="center"
      alignItems="center"
    >
      <DemoTitle title="HEAP DEMO" />
      <Grid
        display="flex"
        flexDirection="column"
        alignItems="center"
        padding=".5rem"
        height="10rem"
        width="17.5rem"
        borderRadius="3px"
        sx={{ backgroundColor: "black", opacity: 0.85 }}
      >
        {new Array(4).fill(true).map((_, height) => (
          <BinaryTreeRow nodes={heap} height={height} phaseNode={phaseNode} />
        ))}
      </Grid>
      <OperationButton
        onClick={insert}
        disabled={isFull || buttonsDisabled}
        text={`insert(${nextNode})`}
        textDecoration={isFull ? "line-through" : ""}
      />
      <OperationButton
        onClick={extractMax}
        disabled={isEmpty || buttonsDisabled}
        text={`extractMax()`}
        textDecoration={isEmpty ? "line-through" : ""}
      />
    </Grid>
  );
}
