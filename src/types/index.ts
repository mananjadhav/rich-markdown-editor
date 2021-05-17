import * as React from "react";
import { EditorState } from "prosemirror-state";

export enum ToastType {
  Error = "error",
  Info = "info",
}

export interface ToolbarItemsConfig {
  toolbarItems?: ToolbarItems[];
  toolbarPosition?: ToolbarPosition;
}
type ToolbarPosition = "top" | "bottom";

type ToolbarItems =
  | "marks"
  | "heading"
  | "bullet_list"
  | "ordered_list"
  | "checkbox_list"
  | "table"
  | "blockquote"
  | "code_block"
  | "hr"
  | "image"
  | "link"
  | "container_notice";

export type MenuItem = {
  icon?: typeof React.Component | React.FC<any>;
  name?: string;
  title?: string;
  shortcut?: string;
  keywords?: string;
  tooltip?: string;
  defaultHidden?: boolean;
  attrs?: Record<string, any>;
  visible?: boolean;
  active?: (state: EditorState) => boolean;
};

export type EmbedDescriptor = MenuItem & {
  matcher: (url: string) => boolean | [] | RegExpMatchArray;
  component: typeof React.Component | React.FC<any>;
};
