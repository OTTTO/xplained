import { codeSnippets } from "misc/dsCodeSnippets";
import { CodeBlock } from "components/CodeBlock/CodeBlock";
import { PageButtons } from "components/Common/PageButtons";
import { BSTDemo } from "./Demo";
import { MainDivider } from "components/Common/Divider";
import { MainContainer } from "components/Common/MainContainer";
import { href } from "misc/href";
import { MainContent } from "components/Common/MainContent";

export function BSTPage() {
  return (
    <MainContainer title="BINARY SEARCH TREE">
      <MainContent>
        <p>
          While sequential data structures are all lined up in sequence either
          front to back or top down, trees branch out with nodes in multiple
          directions.
        </p>

        <p>
          A tree consists of a root node where all of the branching begins, we
          typically place the root at the top when we visualize these
          structures.
        </p>
        <p>
          Every node has only one parent (except the root which has none) and
          each node can have zero or more children. If a node has zero children,
          we call it a leaf.
        </p>
        <p>
          The height of a tree is the number of steps between the root node and
          the lowest leaf.
        </p>
        <MainDivider />
        <p>
          A binary tree is a tree where each node has at most two children. Each
          node can have a left and/or right child. In a binary search tree
          (BST), every left child is smaller than its parent and every right
          child is larger than its parent.
        </p>
        <p>
          We call it a Binary Search Tree because the structure makes it easy to
          search for any element in the tree.
        </p>
        <p>
          We just start at the root and depending on whether the element we are
          looking for is less than or greater than that node, we proceed
          respectively down the left or the right path and continue until we
          find the element or hit the bottom of the tree.
        </p>
        <p>
          Since we are always splitting the size of the problem in half, the
          algorithmic complexity of search is O(log(n)). But depending on how we
          insert data into our BST it can degenerate to O(n), for example if
          items are inserted in an already sorted order. Due to this, we will
          use the binary search tree implementation as a jump off point to
          eventually learn about trees that balance themselves and are
          guaranteed to maintain O(log(n)) insertion and search.
        </p>
        <p>
          Below is an implementation of a binary search tree with some
          explanation.
        </p>
        <MainDivider />
        <p>
          Unlike the sequential data structures, BSTs only require a single
          class for their operations. This class contains 4 properties -{" "}
          <b>key</b>: the identifier of our nodes,
          <b>data</b>: the actual data which is stored at the node, and then{" "}
          <b>left</b>/<b>right</b>: references to the left and right children.
          We don't need to store the root of the BST because we know that the
          first node will always be the root and then we climb down from there.
        </p>
        <CodeBlock text={codeSnippets.bst.class} title="binary search tree" />
        <MainDivider />
        <p>
          Insertion into a BST is simple. If there is no root we simply set the
          node with the key and the data, otherwise we recurse to the left or
          the right depending on if the key is less than or greater than the
          current node. Once we hit the bottom of the tree that is when we do
          the actual insertion.
        </p>
        <CodeBlock text={codeSnippets.bst.insert} title="insert" />
        <MainDivider />
        <p>
          Checking if an element exists is how we search for elements in a BST.
          It is done by recursively climbing down the children looking for the
          key, if we eventually find it we return true otherwise if we hit the
          bottom of the tree we return false knowing that the key is not
          present.
        </p>
        <CodeBlock text={codeSnippets.bst.exists} title="exists" />
        <MainDivider />
        <p>
          Getting an element is done exactly the same as checking if it exists
          but instead of returning a boolean we return the data of that node or
          a null value if we don't find it.
        </p>
        <CodeBlock text={codeSnippets.bst.get} title="get" />
        <MainDivider />
        <p>
          Find the minimum child of any given node. This is used to find the
          successor when we delete a node that has both a left and right child.
          The successor is always the min of the right child and it will take
          the place of the deleted node.
        </p>
        <CodeBlock text={codeSnippets.bst.min} title="min" />
        <MainDivider />
        <p>
          Some simple logic is needed to replace the root node when it only has
          one child. We have extracted this as a helper method because to clean
          up the delete method.
        </p>
        <CodeBlock text={codeSnippets.bst.replaceRoot} title="replace root" />
        <MainDivider />
        <p>
          Deleting a node also involves recursing the tree until the key is
          found. Once the key is found, we follow various means to delete it.
          There is certain logic if we are deleting the root, deleting a node
          with only one child, or deleting a node with both a left and right
          child.
        </p>
        <CodeBlock text={codeSnippets.bst.delete} title="delete" />
        <MainDivider />
        <BSTDemo />
      </MainContent>
      <PageButtons
        backTitle="DOUBLY LINKED LIST"
        backTo={href.ds.dll}
        forwardTitle="HEAP"
        forwardTo={href.ds.heap}
      />
    </MainContainer>
  );
}
