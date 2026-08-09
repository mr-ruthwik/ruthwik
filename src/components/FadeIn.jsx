import useReveal from "../hooks/useReveal";

/**
 * Renders `as` (default "div") with the fade-in scroll-reveal classes
 * applied directly to it - no wrapping element, so it's safe to use
 * as a direct child of a CSS grid/flex container.
 */
export default function FadeIn({ as: Tag = "div", delay = 0, className = "", children, ...rest }) {
  const [ref, visible] = useReveal(delay);

  return (
    <Tag ref={ref} className={`${className} fade-in${visible ? " visible" : ""}`} {...rest}>
      {children}
    </Tag>
  );
}
