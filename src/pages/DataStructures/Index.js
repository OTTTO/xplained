import { DSContainer } from "components/DSContainer";
import { DSTypography } from "components/DSTypography";
import { PageButtons } from "components/PageButtons";
import { href } from "misc/href";
import { useEffect } from "react";
import { Link } from "react-router-dom";

export function Index() {
  useEffect(() => {
    document.getElementById("outerGrid").scrollIntoView();
  }, []);
  return (
    <DSContainer title="DATA STRUCTURES">
      <DSTypography>
        <p>
          If you have ever written any code, you have most likely already worked
          with a number of data structures. Arrays and strings are probably the
          two most commonly used data structures in day to day development,
          followed by Hashmaps (dictionaries in Python and objects in JS).
        </p>
        <p>
          {" "}
          Data structures hold data and can be manipulated in certain ways to
          retrieve that data. The means by which we store and get the data out
          of a data structure is what allows us to leverage them throughout our
          code to write algorithms for specific problems.{" "}
        </p>
        <p>
          It is to be remembered that data structures are really just abstract
          data types, meaning that they are interfaces that conform to a certain
          contract. What matters is that we can interact with them in a
          predictable manner regardless of the underlying implementation.{" "}
        </p>
        <p>
          There are a handful of data structures that can be useful in certain
          circumstances which you can learn about below.
        </p>
        <h2 style={{ marginBottom: 0 }}>SEQUENTIAL</h2>
        <ul style={{ marginTop: 0 }}>
          <li>
            <Link to={href.ds.stack}>Stack</Link>
          </li>
          <li>
            <Link to={href.ds.queue}>Queue</Link>
          </li>
          <li>
            <Link to={href.ds.sll}>Singly Linked List</Link>
          </li>
          <li>
            <Link to={href.ds.dll}>Doubly Linked List</Link>
          </li>
        </ul>
        <h2 style={{ marginBottom: 0 }}>ASSOCIATIVE</h2>
        <ul style={{ marginTop: 0 }}>
          <li>Hashmap</li>
        </ul>
        <h2 style={{ marginBottom: 0 }}>TREES</h2>
        <ul style={{ marginTop: 0 }}>
          <li>
            <Link to={href.ds.bst}>Binary Search Tree (BST)</Link>
          </li>
          <li>Heap</li>
          <li>AVL Tree (Self Balancing BST)</li>
        </ul>
        <h2 style={{ marginBottom: 0 }}>GRAPHS</h2>
        <ul style={{ marginTop: 0 }}>
          <li>Breadth First Search</li>
          <li>Depth First Search</li>
        </ul>
      </DSTypography>
      <PageButtons forwardTitle="STACK" forwardTo={href.ds.stack} isHome />
    </DSContainer>
  );
}
