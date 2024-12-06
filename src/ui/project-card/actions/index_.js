import { viewButton } from "../../button";
import { viewCardActions } from "../../card";
import { code, web } from "../../icons";

/**
 * @type {import("../props").ProjectCardView}
 */
export const viewProjectCardActions = (props) => () => {
  return viewCardActions({}, [
    viewButton({
      tag: "a",
      startDecorator: web,
      variant: "soft",
      disabled: props.project.deployment.t !== "public",
      text: "Deployment",
    })({
      href:
        props.project.deployment.t === "public"
          ? props.project.deployment.url
          : undefined,
      target: "_blank",
      rel: "noreferrer noopener",
    }),
    viewButton({
      tag: "a",
      startDecorator: code,
      variant: "plain",
      disabled: props.project.code.t !== "public",
      text: "Source Code",
    })({
      href:
        props.project.code.t === "public" ? props.project.code.url : undefined,
      target: "_blank",
      rel: "noreferrer noopener",
    }),
  ]);
};
