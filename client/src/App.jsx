import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import CreateSnippet from "./pages/CreateSnippet";
import EditSnippet from "./pages/EditSnippet";
import Homepage from "./pages/Homepage";
import SingleSnippetPage from "./pages/SingleSnippetPage";

export const url = "/api/snippets";
// export const url = 'http://localhost:5000/api/snippets';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/snippets/:id" element={<SingleSnippetPage />} />
        <Route path="/snippets/new" element={<CreateSnippet />} />

        <Route path="/snippets/:id/edit" element={<EditSnippet />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
