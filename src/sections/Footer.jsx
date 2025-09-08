// import { socialImgs } from "../../constants";

const Footer = () => {
	return (
		<footer className="footer">
			<div className="footer-container">
				<div className="flex flex-col justify-center">
					<p>AMP</p>
				</div>
				<div className="socials">
					<p className="text-center md:text-end">
						{new Date().getFullYear()} | تمامی حقوق سایت متعلق به AMP میباشد.
						&copy;
					</p>
				</div>
				<div className="flex justify-end">
					AMP
					{/* {socialImgs.map((socialImg, index) => (
						<div key={index} className="icon">
							<img src={socialImg.imgPath} alt="social icon" />
						</div>
					))} */}
				</div>
			</div>
		</footer>
	);
};

export default Footer;
