import { css, cx } from "@emotion/css";
import type { Node, Strong } from "@yozora/ast";
import React from "react";
import { astClasses } from "../context";
import { NodesRenderer } from "../NodesRenderer";

/**
 * Render `strong`.
 *
 * @see https://www.npmjs.com/package/@yozora/ast#strong
 * @see https://www.npmjs.com/package/@yozora/tokenizer-emphasis
 */
export class StrongRenderer extends React.Component<Strong> {
  public override shouldComponentUpdate(nextProperties: Readonly<Strong>): boolean {
    const properties = this.props;
    return properties.children !== nextProperties.children;
  }

  public override render(): React.ReactElement {
    const childNodes: Node[] = this.props.children;
    return (
      <strong className={cls}>
        <NodesRenderer nodes={childNodes} />
      </strong>
    );
  }
}

const cls = cx(
  astClasses.strong,
  css({
    fontWeight: 600,
  }),
);