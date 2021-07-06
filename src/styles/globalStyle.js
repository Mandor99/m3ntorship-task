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
        /* min-height: 1000vh; //test */
		overflow-x: hidden;
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
	shadow3: '32.147px 36.981px 49px rgba(0, 0, 0, 0.38)',
};

export const paddings = {
	paddingInner1: '1.8rem',
	paddingInner2: '5.3rem',
	paddingOuter2: '4rem',
	padding1: '1rem',
	padding2: '2.5rem',
	padding3: '3rem',
	padding4: '1.5rem',
	padding5: '10rem',
	paddingBtn1: '1rem 1.5rem',
	paddingBtn2: '1.5rem 2.5rem',
	paddingBtn3: '.5rem 1.8rem',
	paddingBtn4: '1.2rem 1.5rem',
	paddingTxt: '1.8rem 1.5rem',
};

export const margins = {
	gap0: '1rem',
	gap1: '2.8rem',
	gapShape: '12px',
	gapItems: '3.5rem',
	gap2: '1.5rem',
	marginOuter1: '9.4rem', // between sections if sound large
	marginOuter2: '5rem', // between sections if sound small
	gap3: '2.3rem', // between items horizontal
	gap4: '2.5rem', // between images
	gap5: '4.3rem', // between text and images horizontal
	gap6: '1.8rem',
};

export const fonts = {
	font1: 'Bebas Neue',
	font2: 'Alfa Slab One',
	font3: 'Montserrat',
};

export const sizes = {
	size1: '1.5rem',
	size2: '3rem',
	size3: '1rem',
	size4: '2.3rem',
	size5: '1.8rem',
	size6: '2.6rem',
	size7: '1.3rem',
	size8: '7.1rem',
	size9: '3.5rem',
	size10: '4.3rem',
};

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
