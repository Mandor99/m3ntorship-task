import React from 'react';
import { Container } from '../styles/globalStyle';
import {
	Box1,
	Box2,
	Contact,
	FooterStyle,
	Info,
	Logo,
	Wrapper,
} from '../styles/FooterStyle';
import FooterLogo from '../images/footerLogo.png';
import spriteIcon from '../images/sprite.svg'
// import instagramIcon from '../images/sprite.svg#icon-instagram'
// import facebookIcon from '../images/sprite.svg#icon-facebook'
// import twitterIcon from '../images/sprite.svg#icon-twitter'
// import whatsappIcon from '../images/sprite.svg#icon-whatsapp'

function Footer() {
	// svg.item__icon
	//             use(xlink:href="../../img/sprite.svg#icon-home")
	// svg {
	// 	$size: 1.5rem;
	// 	width: $size;
	// 	height: $size;
	// 	fill: currentColor;
	// }
	return (
		<FooterStyle>
			<Container>
				<Wrapper>
					<Logo>
						<img
							src={FooterLogo}
							alt='logo burger house'
							className='img-responsive'
						/>
					</Logo>
					<Box1>
						<Info>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
							ipsum suspendisse ultrices gravida. Risus commodo viver ra
							maecenas accumsan lacus vel facilisis.{' '}
						</Info>
						<Contact>
                            <div className="iconWrapper">
                                <svg className="icon">
                                    <use href={`${spriteIcon}#icon-location`} />
                                </svg>
                                <p className='icon__location'>Main Road, Building Name, Country</p>
                            </div>
                            <div className="iconWrapper">
                                <svg className="icon">
                                    <use href={`${spriteIcon}#icon-envelope`} />
                                </svg>
                                <p className='icon__location'>                            info@companyname.com</p>
                            </div>
                        </Contact>
					</Box1>
					<Box2>
                        <p className='footer__copyRights'>&copy; Company Name 2020. All rights reserved.</p>
                        <div className="contactWrapper">
                            <div className="icon-wrapper">
                                <svg className="icon">
                                    <use href={`${spriteIcon}#icon-instagram`} />
                                </svg>
                            </div>
                            <div className="icon-wrapper">
                                <svg className="icon">
                                    <use href={`${spriteIcon}#icon-facebook`} />
                                </svg>
                            </div>
                            <div className="icon-wrapper">
                                <svg className="icon">
                                    <use href={`${spriteIcon}#icon-twitter`} />
                                </svg>
                            </div>
                            <div className="icon-wrapper">
                                <svg className="icon">
                                    <use href={`${spriteIcon}#icon-whatsapp`} />
                                </svg>
                            </div>
                        </div>
                    </Box2>
				</Wrapper>
			</Container>
		</FooterStyle>
	);
}

export default Footer;
