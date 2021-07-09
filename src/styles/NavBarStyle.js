import styled from 'styled-components';
import { colors, fonts, margins, paddings, sizes, media } from './globalStyle';

export const Nav = styled.nav`
	padding: ${paddings.padding3 / 2} 0 0 0;
	display: flex;
	justify-content: space-between;
	align-items: center;
	position: relative;

	& .nav {
		&__checkbox {
			display: none;

			&:checked ~ .nav__bg {
				transform: scale(80);
			}

			&:checked ~ .nav__wrapper {
				width: 100%;
				opacity: 1;
			}

			&:checked ~ .nav__toggler .nav__toggler--icon {
				background: transparent;

				&::before {
					transform: rotate(135deg);
					top: 0;
				}

				&::after {
					transform: rotate(-135deg);
					top: 0;
				}
			}
		}

		&__toggler {
			display: none;

			${media.tab} {
				display: initial;
				position: fixed;
				top: 6.5%;
				right: 4%;
				z-index: 2000;
				text-align: center;
				width: 6rem;
				height: 6rem;
				border-radius: 50%;
				background-color: ${colors.mainColor};
				cursor: pointer;
			}

			&--icon {
				display: none;

				${media.tab} {
					display: inline-block;
					width: 2.5rem;
					height: 2px;
					background-color: ${colors.white};
					text-align: center;
					position: relative;
					margin-top: 3rem;
					transition: all 0.2s ease;

					&::after,
					&::before {
						content: '';
						position: absolute;
						left: 0;
						width: 2.5rem;
						height: 2px;
						background-color: ${colors.white};
						text-align: center;
						display: inline-block;
						transition: all 0.3s;
					}
					&::before {
						top: -0.8rem;
					}
					&::after {
						top: 0.8rem;
					}
				}
			}

			&:hover > .nav__toggler--icon::before {
				top: -1rem;
			}

			&:hover > .nav__toggler--icon::after {
				top: 1rem;
			}
		}

		&__bg {
			display: none;

			${media.tab} {
				display: initial;
				width: 5rem;
				height: 5rem;
				border-radius: 50%;
				background: radial-gradient(
					${colors.darkColor3},
					${colors.lightColor3}
				);
				position: fixed;
				top: 7.5%;
				right: 5%;
				z-index: 1000;
				transition: all 0.5s ease;
			}
		}
	}
`;

export const LogoWrapper = styled.figure`
	width: 260px;

	${media.tab} {
		margin-top: ${margins.gapItems};
	}
`;

export const Logo = styled.img`
	object-fit: cover;
	width: 100%;
`;

export const ItemsWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: ${margins.gap2};

	${media.tab} {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		width: 0%;
		opacity: 0;
		height: 100vh;
		z-index: 1500;
		transition: all 0.7s cubic-bezier(0.68, -0.6, 0.32, 1.6);
	}
`;

export const PhoneCallWrapper = styled.figure`
	display: flex;
	gap: ${margins.gapShape};
	align-self: flex-end;

	${media.tab} {
		display: none;
	}
`;

export const IconDelivery = styled.img`
	max-width: 40px;
	object-fit: contain;
`;

export const PhoneDetails = styled.figcaption`
	font-size: ${sizes.size3};
	line-height: 71px;
	color: ${colors.mainColor};
	font-weight: 700;
	font-family: ${fonts.font3};
	text-align: right;
`;

export const Items = styled.ul`
	display: flex;
	gap: ${margins.gapItems};

	${media.tab} {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 100%;
		text-align: center;
		flex-direction: column;
	}
`;

export const Item = styled.li`
	font-size: ${sizes.size7};
	letter-spacing: 4px;
	color: ${colors.mainColor};
	font-weight: 700;
	font-family: ${fonts.font1};
	cursor: pointer;

	${media.tab} {
		font-size: ${sizes.size4};
	}
`;
