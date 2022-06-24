import { addons } from "@storybook/addons";
import theme from "./OdysseyTheme";

addons.setConfig({
  theme,
  sidebar: {
    collapsedRoots: ["legacy-components"],
  },
});
