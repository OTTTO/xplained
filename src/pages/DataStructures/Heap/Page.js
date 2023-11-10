import { useEffect } from "react";
import { codeSnippets } from "misc/codeSnippets";
import { CodeBlock } from "components/CodeBlock";
import { PageButtons } from "components/PageButtons";
import { HeapDemo } from "./Demo";
import { DSDivider } from "components/DSDivider";
import { DSContainer } from "components/DSContainer";
import { href } from "misc/href";
import { DSTypography } from "components/DSTypography";

export function HeapPage() {
  useEffect(() => {
    document.getElementById("outerGrid").scrollIntoView();
  }, []);

  return (
    <DSContainer title="HEAP">
      <DSTypography>
        <p>
          A heap is another type of binary tree whose main application is
          utilizing its ability to always access the smallest element (Min Heap)
          or largest element (Max Heap).
        </p>
        <p>
          Heaps are extremely useful for priority queues where we can add an
          arbitrary element to the heap and that element is always guaranteed to
          be pulled out in order.
        </p>
        <p>
          You could imagine a priority based ticketing system where a ticket has
          a value representing it's priority, if the numbers are 1-5 and 5 is
          the highest priority, it is guaranteed that the next ticket you pull
          will be a 5 if there is one in the heap.
        </p>
        <DSDivider />
        <p>
          Although the heap is considered a tree data structure based on how we
          see it visualized. Heaps have some interesting properties which make
          it easy for us to represent them with a linear array in memory instead
          of nodes like all the other data structures that we have seen thus
          far.
        </p>
        <p>
          <ul>
            <li>
              Every element of the tree is equal to or larger than all of its
              descendants (Max Heap)
            </li>
            <li>
              The tree is almost complete meaning that every level is completely
              filled except the last one and the last level is completely filled
              left to right
            </li>
          </ul>
        </p>
        <DSDivider />
        <p></p>
        <CodeBlock text={codeSnippets.heap.class} title="heap" />
        <DSDivider />
        <p></p>
        <CodeBlock text={codeSnippets.heap.size} title="size" />
        <DSDivider />
        <p></p>
        <CodeBlock text={codeSnippets.heap.max} title="max" />
        <DSDivider />
        <p></p>
        <CodeBlock text={codeSnippets.heap.swap} title="swap" />
        <DSDivider />
        <p></p>
        <CodeBlock text={codeSnippets.heap.siftUp} title="sift up" />
        <DSDivider />
        <p></p>
        <CodeBlock text={codeSnippets.heap.insert} title="insert" />
        <p></p>
        <CodeBlock text={codeSnippets.heap.siftDown} title="sift down" />
        <DSDivider />
        <p></p>
        <CodeBlock text={codeSnippets.heap.extractMax} title="extract max" />
        <DSDivider />
        <p></p>
        <CodeBlock text={codeSnippets.heap.heapify} title="heapify" />
        <DSDivider />
        <HeapDemo />
      </DSTypography>
      <PageButtons backTitle="Binary Search Tree" backTo={href.ds.bst} />
    </DSContainer>
  );
}
