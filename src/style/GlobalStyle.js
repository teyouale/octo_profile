import { createGlobalStyle } from "styled-components";
import colors from "./theme";

const GlobalStyle = createGlobalStyle`

:root {
    --dark-navy: #020c1b;
    --navy: #0a192f;
    --light-navy: #172a45;
    --lightest-navy: #303C55;
    --navy-shadow: rgba(2, 12, 27, 0.7);
    --slate: #8892b0;
    --light-slate: #a8b2d1;
    --lightest-slate: #ccd6f6;
    --white: #e6f1ff;
    --green: #64ffda;
    --green-tint: rgba(100, 255, 218, 0.1);

    --font-sans: 'Calibre', 'San Francisco', 'SF Pro Text', -apple-system, system-ui, sans-serif;
    --font-mono: 'SF Mono', 'Fira Code', 'Fira Mono', 'Roboto Mono', monospace;

    --fz-xxs: 12px;
    --fz-xs: 13px;
    --fz-sm: 14px;
    --fz-md: 16px;
    --fz-lg: 18px;
    --fz-xl: 20px;
    --fz-xxl: 22px;
    --fz-heading: 32px;
    
    --border-radius: 4px;
    
    --nav-height: 100px;
    --nav-scroll-height: 70px;
    
    --tab-height: 42px;
    --tab-width: 120px;
    }

    body {
        margin: 0;
        width: 100%;
        min-height: 100%;
        margin: 0;
        padding: 0;
      
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
    
    code {
      font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
        monospace;
    }
    
    
      h1, h2, h3, h4, h5, h6 {
        margin-top: 0;
        margin-bottom: 1rem;
        font-weight: 500;
      }
    
      p {
        line-height: 1.5;
      }

`;

export default GlobalStyle;
