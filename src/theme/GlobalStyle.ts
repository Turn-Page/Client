import { theme } from "antd";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`



@font-face {
  font-family: "Pretendard-light";
  src: url("https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff")
    format("woff");
}
@font-face {
  font-family: "Pretendard-medium";
  src: url("https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Bold.woff")
    format("woff");
}
@font-face {
  font-family: "Pretendard-bold";
  src: url("https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Black.woff")
    format("woff");
}

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;

}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
  display: block;
}
body {
  line-height: 1;

  
}
ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
	content: none;
}
table {
  border-collapse: collapse;
	border-spacing: 0;
}
*{
  box-sizing:border-box;
}
a{
  text-decoration:none;
}

/* ==================================================== */

// 여기부터 커스텀 스타일 작성

*{
  box-sizing:border-box;
  word-break : break-all;
}

body{
  font-family: "Pretendard-light", sans-serif;
  color : ${(p) => p.theme.color.text.text1};
	background-color:${(p) => p.theme.color.bg.bg4};
  min-width: 800px;

}

a{
  color : ${(p) => p.theme.color.text.text1};
}

button{
  font-family: ${(p) => p.theme.fontFamily.light};
  outline : none;
  border : none;
  cursor : pointer;
  transition: all 0.1s;
  &:hover{
    transform:scale(1.01);
    box-shadow : 0 0 5px 0px ${(p) => p.theme.color.border.border3}
  }
}



input, textarea{
  outline:none;
  cursor : pointer;
  resize: none;
  font-size: 1rem;
  font-family : ${(p) => p.theme.fontFamily.light};
  word-break : break-all; 

&:focus {
  cursor: text;
}
}

input::placeholder {
    color: ${(p) => p.theme.color.text.text3};
    font-family : ${(p) => p.theme.fontFamily.medium}
  }
  input::-webkit-input-placeholder {
    color: ${(p) => p.theme.color.text.text3};
    font-family : ${(p) => p.theme.fontFamily.medium}

  }
  input:-ms-input-placeholder {
    color: ${(p) => p.theme.color.text.text3};
    font-family : ${(p) => p.theme.fontFamily.medium};

  }
   textarea::placeholder {
    font-family : ${(p) => p.theme.fontFamily.medium};
    color: ${(p) => p.theme.color.text.text3};
  }
  textarea::-webkit-input-placeholder {
    font-family : ${(p) => p.theme.fontFamily.medium};
    color: ${(p) => p.theme.color.text.text3};
  }
  textarea:-ms-input-placeholder {
    font-family : ${(p) => p.theme.fontFamily.medium};
    color: ${(p) => p.theme.color.text.text3};
  }


  ::-webkit-scrollbar {
      width: 5px;
      height : 5px;
    }
    ::-webkit-scrollbar-thumb {
      background-color: ${(p) => p.theme.color.icon.icon2};
      border-radius: 10px;
      }
      ::-webkit-scrollbar-track {
      background-color: #fff;
      border-radius: 10px;
      }

  .App{

    >.content{
      position : relative;
      max-height : calc(100vh - 56px);
      overflow : auto;
    }
  } 
  li{
    list-style: none;
  }

  
  pre{
    white-space: pre-wrap;
    word-break: break-all;
    overflow: auto;
  }

////////////////////////////////////////


.pointer{
  cursor : pointer;
}

.flex-center{
  display :flex;
  justify-content : center;
  align-items : center;
}


.m-28{
  margin : 28px;
}


`;

export default GlobalStyle;
