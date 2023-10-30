import { useEffect } from "react";
import { codeSnippets } from "misc/codeSnippets";
import { CodeBlock } from "components/CodeBlock";
import { StackDemo } from "./StackDemo";
import { PageButtons } from "components/PageButtons";
import { DSDivider } from "components/DSDivider";
import { DSTypography } from "components/DSTypography";
import { DSContainer } from "components/DSContainer";
import { href } from "misc/href";

export function StackPage() {
  useEffect(() => {
    document.getElementById("outerGrid").scrollIntoView();
  }, []);

  return (
    <DSContainer title="STACK">
      <DSTypography>
        <p>
          A stack is a Last In First Out or LIFO data structure. That means that
          the first data to come in is the last data to come out. You can
          imagine this as a stack of plates where one is placed on top of
          another and you can only remove the one at the top.
        </p>
        <p> Stacks can be used for a number of problems.</p>
        <ul>
          <li>Depth First Search </li>
          <li>Reversing a string or array </li>
          <li>Parenthesis matching</li>{" "}
        </ul>
        <p>Below is an implementation of a stack with some explanation.</p>
        <DSDivider />
        <p>
          First we need a way to represent the elements that are going to be
          added to the stack. We do this with a Node class which has a property
          to store the <b>data</b> and another to store a reference to the{" "}
          <b>next</b> element in the stack - in other words the element beneath
          it.
        </p>
        <CodeBlock text={codeSnippets.stack.node} title="node" width="20rem" />
        <DSDivider />
        <p>
          The minimum implementation of Stack class itself contains only 1
          property, <b>top</b>, which as the name implies, always points to the
          top of the stack which is our access point.
        </p>
        <CodeBlock
          text={codeSnippets.stack.class}
          title="stack"
          width="20rem"
        />
        <DSDivider />
        <p>
          We add nodes to the stack by "pushing" them on the top. This sets the
          newly added node to be the top and points it to the old top in order
          to extend the stack.
        </p>
        <CodeBlock text={codeSnippets.stack.push} title="push" width="25rem" />
        <DSDivider />
        <p>
          We remove nodes in a LIFO fashion by popping the top of the stack,
          which returns the top data and resets the top to be the next node down
          (even if that node is null or None).
        </p>
        <CodeBlock text={codeSnippets.stack.pop} title="pop" width="25rem" />
        <DSDivider />
        <p>
          If we just want to see what the top of the stack is or get the top
          data, we use peek instead of pop.
        </p>
        <CodeBlock text={codeSnippets.stack.peek} title="peek" width="25rem" />
        <DSDivider />
        <p>
          In many languages you don't need to implement a stack yourself or even
          import it. For example, in both JavaScript and Python, a list can
          serve as a queue.
        </p>
        <CodeBlock
          text={codeSnippets.stack.builtIn}
          title="built in stack"
          width="20rem"
        />
        <DSDivider />
        <StackDemo />
      </DSTypography>
      <PageButtons
        forwardTitle="QUEUE"
        forwardTo={href.ds.queue}
        backTitle="HOME"
        backTo={href.ds.home}
      />
    </DSContainer>
  );
}
