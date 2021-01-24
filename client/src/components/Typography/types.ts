import { ColorProps, SpaceProps, TypographyProps } from 'styled-system';

export type TextProps = ColorProps &
  SpaceProps &
  TypographyProps & {
    color?: string;
  };
