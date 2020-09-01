// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    bgColor: string;

    colors: {
      main: string;
      secondary: string;
      white: string;
      yellow: string;
      grayHard: string;
    };
  }
}
