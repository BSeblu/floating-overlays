import styled from "@emotion/styled";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { BlockList } from "./components/BlockList";
import { Preview } from "./components/Preview";

const App = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <AppContainer>
        <BlockList />
        <Preview />
      </AppContainer>
    </DndProvider>
  );
};

const AppContainer = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  font-family: Arial, sans-serif;
`;

export default App;
