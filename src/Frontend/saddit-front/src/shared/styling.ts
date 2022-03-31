import styled from "@emotion/styled";

export const palette = {
  primary: "#FFC800",
  secondary: "#262626",
  tertiary: "#009FDA",
  success: "#00BB00",
  warning: "#FFC800",
  info: "#009FDA",
  infoLight: "#C7F0FF",
  error: "#EB3232",
  white: "#ffffff",
  black: "#000000",
  "gray-0": "#262626",
  "gray-1": "#666666",
  "gray-2": "#CCCCCC",
  "gray-3": "#E6E6E6",
  "gray-4": "#F0F1F3",
  "blue-1": "#0000FF",
  "blue-2": "#009FDA",
  "red-1": "#EB3232",
  "red-2": "#FF0070",
  purple: "#8D00CC",
  yellow: "#FFC800",
  green: "#00BB00",
  orange: "#F65916",
  lightBlue: "#D9D9FF",
  lightRed: "#FCE0E0",
  lightPurple: "#EED9F7",
  "lightYellow-2": "#FFF7D9",
  "lightYellow-1": "#FFDB57",
  lightGreen: "#D9F5D9",
  "lightRed-2": "#FFDBEB",
  "lightBlue-2": "#C7F0FF",
};

export const fonts = {
  ultraBlack: "Quatro-UltraBlack",
  book: "Quatro-Book",
  bold: "Quatro-Bold",
};

export const spacing = {
  s0: 0,
  s1: 4,
  s2: 8,
  s3: 12,
  s4: 16,
  s5: 20,
  s6: 24,
  s7: 28,
  s8: 32,
  s9: 36,
};

export const variables = {
  borderRadius: {
    small: 3,
    medium: 5,
    large: 10,
    round: 9999,
  },
  iconSizes: {
    small: 12,
    medium: 16,
    large: 24,
  },
};

export const fontSize = {
  h1: 91,
  h2: 58,
  h3: 43,
  h4: 17,
  h5: 10,
  p: 17,
  body: 14,
  menu: 17,
  introP: 23,
  titleP: 13,
};

export const TextH1 = styled.h1`
  font-family: ${fonts.ultraBlack};
  font-size: 91px;
  font-weight: 900;
  line-height: 90%;
  letter-spacing: 0.005em;
  text-transform: uppercase;
  color: ${palette.black};
`;

export const TextH2 = styled.h2`
  font-family: ${fonts.ultraBlack};
  font-size: 58px;
  font-weight: 900;
  line-height: 91%;
  letter-spacing: 0.015em;
  text-transform: uppercase;
  color: ${palette.black};
`;

export const TextH3 = styled.h3`
  font-family: ${fonts.ultraBlack};
  font-size: 43px;
  font-weight: 900;
  line-height: 88%;
  letter-spacing: 0.005em;
  text-transform: uppercase;
  color: ${palette.black};
`;

export const TextH4 = styled.h4`
  font-family: ${fonts.ultraBlack};
  font-size: 17px;
  font-weight: 900;
  line-height: 100%;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  color: ${palette.black};
`;

export const TextH5 = styled.h5`
  font-family: ${fonts.bold};
  font-size: 10px;
  font-weight: 600;
  line-height: 91%;
  letter-spacing: 0.015em;
  text-transform: uppercase;
  color: ${palette.black};
`;

export const TextP = styled.p`
  font-family: ${fonts.book};
  font-size: 17px;
  font-weight: 350;
  line-height: 165%;
  letter-spacing: 0.03em;
  color: ${palette["gray-0"]};
  margin: 0;
`;

export const Input = styled.input`
  font-size: 14px;
  padding: 7px 12px;
  background: ${palette.white};
  border: none;
  border-radius: ${variables.borderRadius.medium}px;
  ::placeholder {
    color: ${palette["gray-2"]};
  }
`;
