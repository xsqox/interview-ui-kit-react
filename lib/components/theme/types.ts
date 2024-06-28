export interface SupportedButtonStyles {
  text: string;
  background: string;
}

export interface SupportedLinkStyles {
  text: string;
  background: string;
}

export interface SupportedStyles {
  body: string;
  text: string;
  button: SupportedButtonStyles;
  link: SupportedLinkStyles;
}

export interface ITheme {
  id: string;
  name: string;
  colors: SupportedStyles;
  font: string;
}
