import { Fragment } from "react";

/**
 * Renders a heading string where an italic accent is marked with *asterisks*.
 * e.g. Emphasize({ text: "Ein Haus, *drei Wege*", className: "italic text-cs-red" })
 * → Ein Haus, <em class="italic text-cs-red">drei Wege</em>
 *
 * Editors mark the accent in the CMS; the accent styling lives at the call site.
 */
export default function Emphasize({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  const parts = text.split(/(\*[^*]+\*)/g);
  return (
    <>
      {parts.map((part, i) =>
        part.length > 1 && part.startsWith("*") && part.endsWith("*") ? (
          <em key={i} className={className}>
            {part.slice(1, -1)}
          </em>
        ) : (
          <Fragment key={i}>{part}</Fragment>
        ),
      )}
    </>
  );
}
