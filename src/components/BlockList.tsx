import styled from "@emotion/styled";
import { Card } from "./Card";

export const BlockList = () => {
  const blocks = [
    { id: 1, title: "Input" },
    { id: 2, title: "Submit Button" },
    { id: 3, title: "Text" },
  ];
  return (
    <Panel>
      <h2>Blocks</h2>
      {blocks.map((block) => (
        <Card key={block.id}>{block.title}</Card>
      ))}
    </Panel>
  );
};

const Panel = styled.div`
  width: 300px;
  background: #f5f5f5;
  padding: 20px;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
  overflow-y: auto;
`;
