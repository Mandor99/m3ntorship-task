import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    *, *::before, *::after {
        padding: 0;
        margin: 0;
        box-sizing: inherit;
    }
    html, body {
        box-sizing: border-box;
    }
    html {
        font-size: 100%;
    }
    body {
        min-height: 1000vh; //test
    }
	li {
		list-style: none;
	}
	a {
		text-decoration: none;
	}
`;
export const colors = {
	mainColor: '#3d2514',
	color1: '#bf2222',
	color2: '#3d2514',
	color3: '#ffc045',
	color4: '#3d3d3d',
	color5: '#dcdcdc',
	color6: '#bebebe',
	color7: 'rgba(235,174,76,0)',
	white: '#fff',
	black: '#000',
};

export const shadows = {
	shadow1: '3.936px 4.528px 0px #fee8bc',
	shadow2: '18.656px 24.758px 21.5px rgba(0,0,0,0.17)',
};

export const paddings = {
	paddingInner1: '1.8rem',
	paddingInner2: '5.3rem',
	paddingOuter2: '4rem',
	padding1: '1rem',
	padding2: '2.5rem',
	padding3: '3rem',
	paddingBtn1: '1rem 1.5rem',
	paddingBtn2: '1.5rem 2.5rem',
	paddingTxt: '1.8rem 1.5rem',
};

export const margins = {
	gap1: '2.8rem',
	gapShape: '12px',
	gapItems: '3.5rem',
	gap2: '1.5rem',
	marginOuter1: '10rem', // between sections if sound large
	marginOuter2: '5rem', // between sections if sound small
	gap3: '2.3rem', // between items horizontal
	gap4: '2.5rem', // between images
	gap5: '4.3rem', // between text and images horizontal
};

export const fonts = {
	font1: 'Bebas Neue',
	font2: 'Alfa Slab One',
	font3: 'Montserrat',
};

export const sizes = {};

export const bp = {
	mobile: '500px',
	tab: '768px',
	lap: '992px',
	desk: '1200px',
};

export const media = {
	mobile: `@media only screen and (max-width: ${bp.mobile})`,
	tab: `@media only screen and (max-width: ${bp.tab})`,
	lap: `@media only screen and (max-width: ${bp.lap})`,
};

export const Container = styled.div`
	width: 90%;
	margin-left: auto;
	margin-right: auto;
`;
