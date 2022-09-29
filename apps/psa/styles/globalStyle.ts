import { createGlobalStyle } from 'styled-components';
import BootstrapReboot from './bootstrapGrid';
import BootstrapGrid from './bootstrapReboot';
import Colors from './colors';
import Fonts from './fonts';
import Typography from './typography';


const GlobalStyle = createGlobalStyle`
  ${BootstrapReboot}
  ${BootstrapGrid}
  ${Colors}
  ${Fonts}
  ${Typography}
`; 

export default GlobalStyle; 