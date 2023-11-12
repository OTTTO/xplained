import { MainDivider } from "components/Common/Divider";
import { MainContainer } from "components/Common/MainContainer";
import { MainTypography } from "components/Common/MainTypography";
import { PageButtons } from "components/Common/PageButtons";
import { href } from "misc/href";
import { useEffect } from "react";
import { Link } from "react-router-dom";

export function Algorithms() {
  useEffect(() => {
    document.getElementById("outerGrid").scrollIntoView();
  }, []);
  return (
    <MainContainer title="ALGORITHMS">
      <MainTypography>
        <p>
          Algorithms are how we solve problems in computer science. We are
          essentially giving the computer a list of instructions to follow to
          accomplish a given goal. We use algorithms to manipulate data
          structures in order to achieve this.
        </p>
        <p>
          Studying algorithms is beneficial to us in order for us to become
          stronger software engineers. Throughout the following examples, we
          will see how to operate on all sorts of data structures and how to
          accomplish many different tasks by applying the proper algorithm. The
          visualizations should help you get a better understanding of what is
          actually happening throughout the algorithm.
        </p>
        <p>
          The following algorithms you may find useful in the workplace or even
          an interview. At the very least, studying them should help you become
          a better developer.
        </p>
        <MainDivider />
        <h2 style={{ marginBottom: 0 }}>ARRAYS AND STRINGS</h2>
        <ul style={{ marginTop: 0 }}>
          <li>
            Reversal
            <ul>Reverse a string or array</ul>
          </li>
          <li>
            Two Pointers
            <ul>
              <li>Detect Palindrome</li>
              <li>Find sorted addends</li>
              <li>Subsequence</li>
            </ul>
          </li>
          <li>
            Sliding Window
            <ul>
              <li>Longest subarray</li>
              <li>Longest substring</li>
              <li>Subarray count</li>
              <li>Subarray sum</li>
            </ul>
          </li>
        </ul>
        <h2 style={{ marginBottom: 0 }}>HASHMAPS AND SETS</h2>
        <ul style={{ marginTop: 0 }}>
          <li>Count</li>
          <li>Duplicates</li>
          <li>Subsequence</li>
          <li>Find addends</li>
        </ul>
      </MainTypography>
      <PageButtons backTitle="HOME" backTo={href.home} isHome />
    </MainContainer>
  );
}
