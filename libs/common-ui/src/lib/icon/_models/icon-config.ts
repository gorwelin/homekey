import { IconSize } from './icon';

export interface IconConfig {
  icon?: string | ((data?: any) => string);
  sprite?: string | ((data?: any) => string);
  ariaLabel?: string | ((data?: any) => string);
  color?: string | ((data?: any) => string);
  hidden?: boolean | Function;
  iconStyles?: IconStyles;
  size?: IconSize | ((data?: any) => IconSize);
}

export interface IconStyles {
  size?: string;
  width?: string;
  style?: string;
  radius?: string;
  backgroundColour?: string;
  borderColour?: string;
  faPrimaryColour?: string;
  faSecondaryColour?: string;
}
