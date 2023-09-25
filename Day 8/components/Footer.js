import React from "react";
import {
Box,
Container,
Row,
Column,
FooterLink,
Heading,
} from "./FooterStyles";
import { Link } from "react-router-dom";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LiveHelpIcon from '@mui/icons-material/LiveHelp';

const Footer = () => {

    const textstyle={
        textDecoration:'none'
    }
return (
	<Box>
	
	<Container>
		<Row>
		<Column>
			<Heading>About Us</Heading>
			<FooterLink href="#">Aim</FooterLink>
			<FooterLink href="#">Vision</FooterLink>
			<FooterLink href="#">Testimonials</FooterLink>
		</Column>
		<Column>
			<Heading>Terms&Condtions</Heading>
            <FooterLink href="#">Feeds</FooterLink>
			<FooterLink href="#">Posts</FooterLink>
			<FooterLink href="#">Stories</FooterLink>
            <FooterLink href="#">Bookings</FooterLink>


			
            
			
		</Column>
		<Column>
			<Heading>PRIVACY POLICY</Heading>
			<Link to="/message">Check It!!<FooterLink></FooterLink></Link>
		
		</Column>
		<Column>
			<Heading>Social Media</Heading>
			<FooterLink href="#">
			<i className="fab fa-facebook-f">
				<span style={{ marginLeft: "10px" }}>
                <Link to="" className={textstyle}><FacebookIcon/>Facebook</Link>
				
				</span>
			</i>
			</FooterLink>
			<FooterLink href="#">
			<i className="fab fa-instagram">
				<span style={{ marginLeft: "10px"  }}>
				<Link to="https://www.instagram.com/?hl=en" className={textstyle}><InstagramIcon/>Instagram</Link>
				</span>
			</i>
			</FooterLink>
			<FooterLink href="#">
			<i className="fab fa-twitter">
				<span style={{ marginLeft: "10px" }}>
                <Link to="https://twitter.com/?lang=en-in" className={textstyle}><TwitterIcon/>Twitter</Link>
				
				</span>
			</i>
			</FooterLink>
			<FooterLink href="#">
			<i className="fab fa-youtube">
				<span style={{ marginLeft: "10px" }}>
                <Link to="https://www.youtube.com/" className={textstyle}><YouTubeIcon/>Youtube</Link>

				
				</span>
			</i>
			</FooterLink>
		</Column>
		</Row>
	</Container>
	</Box>
);
};
export default Footer;
