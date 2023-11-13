import { BrowserRouter, Route, Routes } from "react-router-dom";
import { href } from "misc/href";
import { Home } from "pages";

import { DataStructures } from "pages/DataStructures/Index";
import { StackPage } from "pages/DataStructures/Stack/Page";
import { QueuePage } from "pages/DataStructures/Queue/Page";
import { SLLPage } from "pages/DataStructures/SinglyLinkedList/Page";
import { DLLPage } from "pages/DataStructures/DoublyLinkedList/Page";
import { BSTPage } from "pages/DataStructures/BinarySearchTree/Page";
import { HeapPage } from "pages/DataStructures/Heap/Page";

import { Algorithms } from "pages/Algorithms";
import { Reverse } from "pages/Algorithms/Indexed/TwoPointers/Reverse";
import { Palindrome } from "pages/Algorithms/Indexed/TwoPointers/Palindrome";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={href.home} element={<Home />} />

        <Route path={href.ds.home} element={<DataStructures />} />
        <Route path={href.ds.stack} element={<StackPage />} />
        <Route path={href.ds.queue} element={<QueuePage />} />
        <Route path={href.ds.sll} element={<SLLPage />} />
        <Route path={href.ds.dll} element={<DLLPage />} />
        <Route path={href.ds.bst} element={<BSTPage />} />
        <Route path={href.ds.heap} element={<HeapPage />} />

        <Route path={href.algo.home} element={<Algorithms />} />
        <Route path={href.algo.indexed.reverse} element={<Reverse />} />
        <Route path={href.algo.indexed.palindrome} element={<Palindrome />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
