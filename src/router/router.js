import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Index } from "pages/DataStructures/Index";
import { StackPage } from "pages/DataStructures/Stack/StackPage";
import { QueuePage } from "pages/DataStructures/Queue/QueuePage";
import { SLLPage } from "pages/DataStructures/LinkedList/SLLPage";
import { DLLPage } from "pages/DataStructures/LinkedList/DLLPage";
import { BSTPage } from "pages/DataStructures/BinarySearchTree/BSTPage";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/ds/stack" element={<StackPage />} />
        <Route path="/ds/queue" element={<QueuePage />} />
        <Route path="/ds/sll" element={<SLLPage />} />
        <Route path="/ds/dll" element={<DLLPage />} />
        <Route path="/ds/bst" element={<BSTPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
