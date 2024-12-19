import styled from "@emotion/styled";
import { useEffect, useState, type ReactNode } from "react";
import { useFloating, shift, offset, autoPlacement } from "@floating-ui/react";

interface FloatingOverlayProps {
  targetSelector: string;
  children?: ReactNode;
}
export const FloatingOverlay = ({
  targetSelector,
  children,
}: FloatingOverlayProps) => {
  // Set up floating logic
  const { refs, update, floatingStyles } = useFloating({
    placement: "top-start",
    middleware: [offset(0), shift(), autoPlacement()],
  });

  const [target, setTarget] = useState<HTMLElement | null>(null);

  // Find the target element when component mounts
  useEffect(() => {
    const iframe = document.querySelector("iframe");
    if (!iframe?.contentDocument) return;

    const targetElement = iframe.contentDocument.querySelector(
      targetSelector
    ) as HTMLElement;

    if (!targetElement) return;

    setTarget(targetElement);
    refs.setReference(targetElement);

    const resizeObserver = new ResizeObserver(() => {
      update(); // Trigger position update when resized
    });

    const mutationObserver = new MutationObserver(() => {
      update(); // Trigger position update on mutations
    });

    const intersectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            update(); // Trigger position update when the target element is visible in the viewport
          }
        });
      },
      {
        root: iframe.contentDocument.documentElement,
        rootMargin,
      }
    );

    // Start observing the target element
    resizeObserver.observe(targetElement);
    mutationObserver.observe(targetElement, {
      attributes: true,
      childList: true,
      subtree: true,
    });
    intersectionObserver.observe(targetElement);
    return () => {
      // Clean up observers on unmount
      resizeObserver.disconnect();
      mutationObserver.disconnect();
      intersectionObserver.disconnect();
    };
  }, [refs, targetSelector, update]);

  if (!target) return null;

  return (
    <Overlay ref={refs.setFloating} style={floatingStyles}>
      {children}
    </Overlay>
  );
};
const Overlay = styled.div`
  position: absolute;
  background-color: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(5px);
  z-index: 9999;
`;
