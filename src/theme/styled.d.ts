import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    color: {
      text: {
        text1: string;
        text2: stirng;
        text3: stirng;
        text4: stirng;
        text5: stirng;
      };
      border: {
        border1: stirng;
        border2: stirng;
        border3: stirng;
      };
      btn: {
        bg1: stirng;
        bg2: stirng;
        bg3: stirng;
        text1: stirng;
        text2: stirng;
        text3: stirng;
      };

      bg: {
        bg1: stirng;
        bg2: stirng;
        bg3: stirng;
        bg4: stirng;
      };

      icon: {
        icon1: string;
        icon2: string;
      };
    };
    fontFamily: {
      light: string;
      medium: string;
      bold: string;
    };
  }
}
