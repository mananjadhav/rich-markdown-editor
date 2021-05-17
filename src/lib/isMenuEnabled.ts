import { ToolbarItemsConfig, EmbedDescriptor, MenuItem } from "./../types";

export default function isMenuEnabled(
  toolbar: ToolbarItemsConfig,
  menu: EmbedDescriptor | MenuItem | string
) {
  if (!menu) {
    return false;
  }
  const toolbarItems =
    toolbar && toolbar.toolbarItems ? toolbar.toolbarItems : null;

  if (!toolbarItems) {
    return true;
  }

  const isEnabled =
    toolbarItems?.findIndex((x) => {
      const toolbarItemName = x.toString().toLowerCase();
      if (typeof menu === "string") {
        return toolbarItemName === menu.toLowerCase();
      } else {
        return toolbarItemName === menu.name?.toLowerCase();
      }
    }) > -1;

  return isEnabled;
}
