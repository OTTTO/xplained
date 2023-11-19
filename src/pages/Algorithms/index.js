import { MainDivider } from "components/Common/Divider";
import { MainContainer } from "components/Common/MainContainer";
import { MainContent } from "components/Common/MainContent";
import { PageButtons } from "components/Common/PageButtons";
import { href } from "misc/href";
import { pages } from "misc/pages";
import { Link } from "react-router-dom";

export function Algorithms() {
  return (
    <MainContainer title="ALGORITHMS">
      <MainContent>
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
          accomplish many different tasks by applying the proper algorithm.
        </p>
        <p>
          You may find the following algorithms useful in the workplace or even
          an interview. At the very least, studying them should help you become
          a better developer.
        </p>
        <MainDivider />
        <h2 style={{ marginBottom: 0 }}>ARRAYS AND STRINGS</h2>
        <ul style={{ marginTop: 0 }}>
          <li>
            Two Pointers
            <ul>
              <li>
                <Link to={href.algo.indexed.reverse}>Reverse</Link>
              </li>
              <li>
                <Link to={href.algo.indexed.palindrome}>Palindrome</Link>
              </li>
              <li>
                <Link to={href.algo.indexed.sortedAddends}>Sorted addends</Link>
              </li>
              <li>
                <Link to={href.algo.indexed.subsequence}>Subsequence</Link>
              </li>
            </ul>
          </li>
          <li>
            Sliding Window
            <ul>
              <li>Longest subarray</li>
              <li>
                <Link to={href.algo.indexed.longestSubstring}>
                  Longest substring with substitution
                </Link>
              </li>
              <li>Subarray count</li>
              <li>
                <Link to={href.algo.indexed.largestSum}>Subarray sum</Link>
              </li>
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
      </MainContent>
      <PageButtons page={pages.algoHome} isHome />
    </MainContainer>
  );
}
