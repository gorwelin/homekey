import { Icon } from "@fortawesome/fontawesome-svg-core";
import { IconDefinition, IconName } from "@fortawesome/free-solid-svg-icons";
import { IconSize, IconSprite } from "../../icon/_models/icon";

export interface NavItemConfig {
  icon?: {
    code: IconDefinition;
    sprite: IconSprite;
    color?: string;
    size?: IconSize;
  }
  text: string;
  link: string;
  tooltip?: string;
  onClick?: () => void;
}
