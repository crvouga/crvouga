// @ts-check

import { ensureObject, tag, text } from "../elem";
import { THEME } from "./theme";

/**
 * @typedef {"h1" | "h2" | "h3" | "title-sm" | "body-md" | "body-xs"} Level
 */

/**
 * @typedef {{level: Level; text: string}} Props
 */

/**
 * @param {Props} input
 * @returns {string}
 */
const toTag = (input) => {
  switch (input.level) {
    case "h1":
      return "h1";
    case "h2":
      return "h2";
    case "h3":
      return "h3";
    case "body-md":
      return "p";
    case "title-sm":
      return "h4";
    case "body-xs":
      return "p";
  }
};

/**
 * @param {Props} input
 * @returns {Record<string, string>}
 */
const toStyle = (input) => {
  switch (input.level) {
    case "h1":
      return {
        "font-size": "36px",
        "line-height": "48px",
        color: THEME.colors.text,
      };
    case "h2":
      return {
        "font-size": "30px",
        "line-height": "40px",
        color: THEME.colors.text,
      };
    case "h3":
      return {
        "font-size": "24px",
        "line-height": "32px",
        color: THEME.colors.text,
      };
    case "title-sm":
      return {
        "font-size": "14px",
        "font-weight": "normal",
        "line-height": "20px",
        color: THEME.colors.text,
      };
    case "body-md":
      return {
        "font-size": "16px",
        "line-height": "24px",
        "font-weight": "normal",
        color: THEME.colors.body,
      };
    case "body-xs":
      return {
        "font-size": "12px",
        "line-height": "18px",
        "font-weight": "normal",
        color: THEME.colors.body,
      };
  }
};

const BASE_STYLE = { margin: 0, padding: 0 };

/**
 * @type {import("../elem").View<Props>}
 */
export const viewTypography = (props) => (attrs, children) => {
  const tagName = toTag(props);
  const style = toStyle(props);
  return tag(
    tagName,
    { style: { ...BASE_STYLE, ...style, ...ensureObject(attrs?.style) } },
    [text(props.text), ...(children ?? [])]
  );
};
