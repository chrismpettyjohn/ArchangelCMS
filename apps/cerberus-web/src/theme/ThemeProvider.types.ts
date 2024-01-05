import { ReactNode } from "react";

export interface ImagineTheme {
  name: string;
  components: {
    sidebarWidth: string;
  },
  fontFamily: {
    primary: string;
  }
  fontSize: {
    halfUnit: string;
    oneUnit: string;
    twoUnits: string;
    threeUnits: string;
  }
  color: {
    black: string;
    brand: string;
    s10: string;
    s20: string;
    s30: string;
    s40: string;
    s50: string;
    s60: string;
  };
  space: {
    quarterUnit: string;
    halfUnit: string;
    oneUnit: string;
    twoUnits: string;
    threeUnits: string;
  };
  radius: {
    oneUnit: string;
    twoUnits: string;
    threeUnits: string;
  };
  icon: {
    oneUnit: string;
    twoUnits: string;
    threeUnits: string;
  }
  maxWidth: string;
}

export interface ThemeProviderProps {
  children: ReactNode;
}