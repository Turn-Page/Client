import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

// 프리텐다드 폰트
@import url("https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css");


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
}

body{
  font-family : "Pretendard",  sans-serif ;
  color : ${(props) => props.theme.textColor};
	background-color:${(props) => props.theme.bgColor};
  min-width: 800px;
}

a{
  color : ${(props) => props.theme.titleTextColor}
}

`;

export default GlobalStyle;
