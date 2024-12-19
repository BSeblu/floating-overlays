import styled from "@emotion/styled";
import { FloatingOverlay } from "./FloatingOverlay";
import { useState } from "react";

export const Preview = () => {
  const blockIDs: string[] = [
    "block-1",
    // "block-2",
    // "block-3",
    // "block-4",
    // "block-5",
    // "block-6",
    // "block-7",
    // "block-8",
    // "block-9",
  ];
  const [iframeLoaded, setIframeLoaded] = useState(false);
  return (
    <Panel>
      <h1>Preview Header</h1>
      <IFrame
        title="Iframe Content"
        src="/iframe-content.html" // Link to the HTML content for the iframe
        onLoad={() => setIframeLoaded(true)}
      />
      {iframeLoaded &&
        blockIDs.map((blockID) => (
          <FloatingOverlay
            key={blockID}
            targetSelector={`#${blockID}`}
          ></FloatingOverlay>
        ))}
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
  overflow: auto; /* Ensure that scrolling is enabled if needed */
`;
