import { useEffect } from "react";
import { codeSnippets } from "misc/codeSnippets";
import { CodeBlock } from "components/CodeBlock/CodeBlock";
import { PageButtons } from "components/Common/PageButtons";
import { HeapDemo } from "./Demo";
import { MainDivider } from "components/Common/Divider";
import { MainContainer } from "components/Common/MainContainer";
import { href } from "misc/href";
import { MainTypography } from "components/Common/MainTypography";

export function HeapPage() {
  useEffect(() => {
    document.getElementById("outerGrid").scrollIntoView();
  }, []);

  return (
    <MainContainer title="HEAP">
      <MainTypography>
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
        <MainDivider />
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
        <MainDivider />
        <p>
          The heap class only contains one property, heap, which is the array
          where the heap's elements are stored.
        </p>
        <CodeBlock text={codeSnippets.heap.class} title="heap" />
        <CodeBlock text={codeSnippets.heap.size} title="size" />
        <CodeBlock text={codeSnippets.heap.max} title="max" />
        <CodeBlock text={codeSnippets.heap.swap} title="swap" />
        <MainDivider />
        <p>
          Helper function that sifts an element up to its rightful place. This
          is used whenever we insert an element since during insertion the
          element is initially placed at the end of the heap.
        </p>
        <CodeBlock text={codeSnippets.heap.siftUp} title="sift up" />
        <MainDivider />
        <p>
          Inserting elements is how we add them to the heap. We simply append
          the element to the end of the heap and then sift it up until all the
          heap properties are satisfied again.
        </p>
        <CodeBlock text={codeSnippets.heap.insert} title="insert" />
        <MainDivider />
        <p>
          Helper function that sifts an element down to it's rightful place. We
          recursively find the bigger child belonging to the current node
          (parent) and swap those two elements until the heap properties are
          satisfied. This is used when we are extracting the max element from
          the heap.
        </p>
        <CodeBlock text={codeSnippets.heap.siftDown} title="sift down" />
        <MainDivider />
        <p>
          Extract (remove and return) the max element from the heap. We save the
          max element and then replace it with the last element which we then
          recursively sift down to its rightful place. This would be the method
          the client calls to get the next element in a priority queue
        </p>
        <CodeBlock text={codeSnippets.heap.extractMax} title="extract max" />
        <MainDivider />
        <CodeBlock text={codeSnippets.heap.heapify} title="heapify" />
        <MainDivider />
        <HeapDemo />
      </MainTypography>
      <PageButtons backTitle="Binary Search Tree" backTo={href.ds.bst} />
    </MainContainer>
  );
}
