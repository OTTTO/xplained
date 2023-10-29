import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Index } from "pages/DataStructures/Index";
import { StackPage } from "pages/DataStructures/Stack/StackPage";
import { QueuePage } from "pages/DataStructures/Queue/QueuePage";
import { SLLPage } from "pages/DataStructures/LinkedList/SLLPage";
import { DLLPage } from "pages/DataStructures/LinkedList/DLLPage";
import { BSTPage } from "pages/DataStructures/BinarySearchTree/BSTPage";
import { href } from "misc/href";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={href.ds.home} element={<Index />} />
        <Route path={href.ds.stack} element={<StackPage />} />
        <Route path={href.ds.queue} element={<QueuePage />} />
        <Route path={href.ds.sll} element={<SLLPage />} />
        <Route path={href.ds.dll} element={<DLLPage />} />
        <Route path={href.ds.bst} element={<BSTPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
