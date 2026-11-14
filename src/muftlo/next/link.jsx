import { Link as RLink } from "@tanstack/react-router";
export default function Link({ href, children, ...rest }) {
  const h = typeof href === "string" ? href : href?.pathname || "/";
  if (/^(https?:|mailto:|tel:|#)/.test(h)) return <a href={h} target={h.startsWith("http") ? "_blank" : undefined} rel={h.startsWith("http") ? "noopener noreferrer" : undefined} {...rest}>{children}</a>;
  return <RLink to={h} {...rest}>{children}</RLink>;
}
