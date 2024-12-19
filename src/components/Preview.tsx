import styled from "@emotion/styled";

export const Preview = () => {
  return (
    <Panel>
      <IFrame
        title="Iframe Content"
        src="/iframe-content.html" // Link to the HTML content for the iframe
      />
    </Panel>
  );
};

const Panel = styled.div`
  flex-grow: 1;
  background: #ffffff;
  padding: 20px;
  display: flex;
  flex-direction: column;
`;
const IFrame = styled.iframe`
  width: 100%;
  height: 100%;
  border: none;
`;
