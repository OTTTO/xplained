import { CodeBlock } from "components/CodeBlock/CodeBlock";
import { PageButtons } from "components/Common/PageButtons";
import { MainDivider } from "components/Common/Divider";
import { MainContainer } from "components/Common/MainContainer";
import { MainContent } from "components/Common/MainContent";
import { codeSnippets } from "misc/dsCodeSnippets";
import { DLLDemo } from "./Demo";
import { pages } from "misc/pages";

export function DLLPage() {
  return (
    <MainContainer title="DOUBLY LINKED LIST">
      <MainContent>
        <p>
          A doubly linked list follows the same concept as a singly linked list
          except there can be addition/deletion/traversal from either the tail
          or the head.
        </p>
        <p>Doubly Linked Lists can be used to solve certain problems</p>
        <ul>
          <li>Serving as a double ended queue (deque)</li>
          <li>Undo/Redo feature in editing applications</li>
          <li>Use of back and forward button in a browser</li>
        </ul>
        <p>
          Below is an implementation of a doubly linked list with some
          explanation.
        </p>
        <MainDivider />
        <p>
          The Nodes it uses are the same except they also include a reference to
          the previous node, <b>prev</b>.
        </p>
        <CodeBlock text={codeSnippets.dll.node} title="node" width="20rem" />
        <MainDivider />
        <p>
          The doubly linked list contains the same properties as its counterpart
          - <b>size</b>, <b>tail</b>, and <b>head</b>. The connection of the
          nodes is the same, except due to the
          <b> prev</b> property on the node nodes point forwards and backwards
          joining the tail to the head - it looks like the following...
          <p style={{ textAlign: "center", marginTop: 0 }}>
            <b>{" [tail]<->[node]<->[head]"}</b>
          </p>
        </p>
        <CodeBlock text={codeSnippets.dll.class} title="doubly linked list" />
        <MainDivider />
        <p>
          This getNode method is a helper method as it grabs the actual node,
          our user should only be concerned about the data and not node ojects.
          You will see that it is utilized by many of the exposed methods of
          this data structure.
        </p>
        <CodeBlock text={codeSnippets.dll.getNode} title="get node" />
        <MainDivider />
        <p>
          The ability to insert a node before another in the list makes this
          data structure comparable to an array in terms of functionality. The
          difficult part of this method is making sure to wire up all of the
          nodes appropriately. We need to be concerned about 3 nodes - the new
          node that we are inserting and the nodes before/after that node.
        </p>
        <CodeBlock text={codeSnippets.dll.insertBefore} title="insert before" />
        <MainDivider />
        <p>
          Prepending a node to the doubly linked list is insertion at the tail.
          If the list is empty we just set the tail and head to be that node.
          Otherwise, we can simply call our insertBefore method and insert
          before the 0th index.
        </p>
        <CodeBlock text={codeSnippets.dll.prepend} title="prepend" />
        <MainDivider />
        <p>
          Inserting after is just as useful as insertBefore and the logic is
          almost entirely the same except we must wire up our nodes in the
          reverse order.
        </p>
        <CodeBlock text={codeSnippets.dll.insertAfter} title="insert after" />
        <MainDivider />
        <p>
          Appending a node is the opposite of prepending, we are inserting at
          the head of the list. The logic here is the same except we call
          insertAfter with the last index instead of insertBefore with the 0th.
        </p>
        <CodeBlock text={codeSnippets.dll.append} title="append" />
        <MainDivider />
        <p>
          Getting the data from a node is very simple when leveraging the helper
          method of the same name. We get the node and then return the data.
        </p>
        <CodeBlock text={codeSnippets.dll.get} title="get" />
        <MainDivider />
        <p>
          Removing a node from a doubly linked list is almost exactly the same
          as removing form a singly linked list. Except in the case of removing
          the head, we must also reset the head to be the previous node.
        </p>
        <CodeBlock text={codeSnippets.dll.remove} title="remove" />
        <MainDivider />
        <p>
          Once again, we have the length method here as an easy wasy for the
          user to iterate over the list.
        </p>
        <CodeBlock text={codeSnippets.dll.length} title="length" />
        <MainDivider />
        <p>
          We can easily mock a doubly linked list with a list in JS or Python
          but in praticality this would not make sense since the algorithmic
          complexity of the operations being performed on the list would be that
          of an array as opposed to a linked list defeating the purpose of using
          this data structure in the first place.
        </p>
        <MainDivider />
        <DLLDemo />
      </MainContent>
      <PageButtons page={pages.dll} />
    </MainContainer>
  );
}
