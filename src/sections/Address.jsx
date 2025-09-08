const Address = () => {
	return (
		<section className="flex section-padding">
			{/* Location detail */}
			<div>
				<p>
					خیابان ۱۹۶ غربی (زفرقندی) بین اردیبهشت و مظفری نیا (سراج) بعد از کوچه
					محمدی پلاک ۸۷
				</p>
			</div>

			{/* Map */}
			<div>
				<div className="flex-center w-full h-full">
					<iframe
						src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d202.38945430427248!2d51.51886056513614!3d35.7451200318109!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1757149670646!5m2!1sen!2s"
						width="600"
						height="450"
						style={{ border: 0 }}
						allowFullScreen=""
						loading="lazy"
						referrerPolicy="no-referrer-when-downgrade"
					></iframe>
				</div>
			</div>
		</section>
	);
};

export default Address;
