import styled from "@emotion/styled";

const App = () => {
  const cards = [
    { id: 1, title: "Card 1" },
    { id: 2, title: "Card 2" },
    { id: 3, title: "Card 3" },
  ];

  return (
    <AppContainer>
      <LeftPanel>
        <h2>Cards</h2>
        {cards.map((card) => (
          <Card key={card.id}>{card.title}</Card>
        ))}
      </LeftPanel>
      <RightPanel>
        <IFrame
          title="Iframe Content"
          src="/iframe-content.html" // Link to the HTML content for the iframe
        />
      </RightPanel>
    </AppContainer>
  );
};

const AppContainer = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  font-family: Arial, sans-serif;
`;
const LeftPanel = styled.div`
  width: 30%;
  background: #f5f5f5;
  padding: 20px;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
  overflow-y: auto;
`;

const RightPanel = styled.div`
  flex-grow: 1;
  background: #ffffff;
  padding: 20px;
  display: flex;
  flex-direction: column;
`;

const Card = styled.div`
  padding: 10px;
  margin: 10px 0;
  background: #ffffff;
  border: 1px solid #ddd;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background: #f0f0f0;
  }
`;

const IFrame = styled.iframe`
  width: 100%;
  height: 100%;
  border: none;
`;

export default App;
