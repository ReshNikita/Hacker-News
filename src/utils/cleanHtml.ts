import sanitizeHtml, { IOptions } from "sanitize-html";

const rules: IOptions = {
  allowedTags: ["b", "i", "em", "strong", "a", "pre", "div", "code"],
  transformTags: {
    pre: "p",
    a: sanitizeHtml.simpleTransform("a", {
      target: "_blank",
      rel: "noopener noreferrer",
    }),
  },
};

export const cleanHtml = (text: string): string => sanitizeHtml(text, rules);
