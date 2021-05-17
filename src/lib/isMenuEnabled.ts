import { ToolbarItemsConfig, EmbedDescriptor, MenuItem } from "./../types";

export default function isMenuEnabled(
  toolbar: ToolbarItemsConfig,
  menu: EmbedDescriptor | MenuItem
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
    toolbarItems?.findIndex(
      (x) => x.toString().toLowerCase() === menu.name?.toLowerCase()
    ) > -1;

  return isEnabled;
}
