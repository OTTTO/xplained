import { CodeBlock } from "components/CodeBlock/CodeBlock";
import { PageButtons } from "components/Common/PageButtons";
import { MainDivider } from "components/Common/Divider";
import { MainContainer } from "components/Common/MainContainer";
import { MainContent } from "components/Common/MainContent";
import { codeSnippets } from "misc/dsCodeSnippets";
import { SLLDemo } from "./Demo";
import { pages } from "misc/pages";

export function SLLPage() {
  return (
    <MainContainer title="SINGLY LINKED LIST">
      <MainContent>
        <p>
          A linked list is a sequential data structure. It behaves similarly to
          an array except that it has different algorithmic complexity meaning
          the time it takes to do certain operations differs.
        </p>
        <p>
          While an array has almost next to instant random access capabilities
          (retrieving an element by index), a linked list's retrieval speed
          depends on the size of the data structure. On the other hand, addition
          and deletion from the front of an array depends on its size as we have
          to shift the entire array while it is almost instant for a linked list
          (for a doubly linked list append/delete from both the front and the
          back are both 'instant')
        </p>
        <p>
          Although we almost always rely on arrays in our day to day work, a
          linked list can be useful in certain situations - we will actually see
          one leveraged in our implementation of HashMap later on.
        </p>
        Singly Linked Lists can be used to solve certain problems
        <ul>
          <li>Building a HashMap Implementation</li>
          <li>Navigation in Web Browers</li>
          <li>As an alternative to arrays in order to preserve memory</li>
        </ul>
        <p>
          Below is an implementation of a singly linked list with some
          explanation. You will see the doubly linked list implementation on the
          next page.
        </p>
        <MainDivider />
        <p>
          A singly linked list is composed of a sequence of Nodes which each
          contain <b>data</b> and a reference to the <b>next</b> Node in the
          list.
        </p>
        <CodeBlock text={codeSnippets.sll.node} title="node" width="20rem" />
        <MainDivider />
        <p>
          The minimum implementation of a singly linked list consists of 3
          properties. <b>size</b> which tracks the length of the list. The other
          two necessary properties are <b>tail</b>
          <b>head</b>, which are the two ends of the linked list{" "}
          <b>{"[tail]->[node]->[head]"}</b>
        </p>
        <CodeBlock text={codeSnippets.sll.class} title="linked list" />
        <MainDivider />
        <p>
          For a singly linked list, when we add a new node we append it to the
          front of the list. If the list is empty we simply set the tail to be
          the new node. Otherwise, we step all the way through the List and tack
          the node on to the end.
        </p>
        <CodeBlock text={codeSnippets.sll.append} title="append" />
        <MainDivider />
        <p>
          When we want to remove a node from the linked list, firt we make sure
          that the list is not empty and that the index is in bounds. We then
          iterate the list up until the index we want to remove - 1. Then we
          take that node and point it to the node after the node we want to
          remove, effectively dropping it from the linked list.
        </p>
        <CodeBlock text={codeSnippets.sll.remove} title="remove" />
        <MainDivider />
        <p>
          Getting a node from a linked list is simple, we do the same checks
          that were on the remove method - make sure the list is not empty and
          that the index is not out of bounds. If we cannot remove a node
          because it violates one of these conditions, we simply return false.
          Otherwise we just iterate up until the given index and return the
          node's data.
        </p>
        <CodeBlock text={codeSnippets.sll.get} title="get" />
        <MainDivider />
        <p>
          Here we are simply returning the size of the list. This length method
          is useful to help us iterate the list with a for loop, a more advanced
          linked list would have an iterator on it that we can just call next on
          until it is exhausted.
        </p>
        <CodeBlock text={codeSnippets.sll.length} title="length" />
        <MainDivider />
        <p>
          Unlike stacks and queues, we cannot use JS and Python Lists to mock
          Linked Lists as these lists are built as Array Lists with arrays that
          automatically resize behind the scenes - for most cases this defeats
          the purpose of Linked List.
        </p>
        <MainDivider />
        <SLLDemo />
      </MainContent>
      <PageButtons page={pages.sll} />
    </MainContainer>
  );
}
