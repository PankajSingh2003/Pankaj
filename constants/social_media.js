import { BsFillEnvelopeOpenFill, BsGithub, BsLinkedin, BsPersonSquare } from "react-icons/bs";

export const SOCIAL_MEDIA = [
	{
		id: "linkedin",
		icon: <BsLinkedin />,
		title: "Visit LinkedIn profile",
		url: "https://www.linkedin.com/in/pankaj-singh-527465197/"
	},
	{
		id: "github",
		icon: <BsGithub />,
		title: "Visit Github profile",
		url: "https://github.com/PankajSingh2003"
	},
	{
		id: "mail",
		icon: <BsFillEnvelopeOpenFill />,
		title: "Send me an email",
		url: "mailto://pankajsheelendrasingh@gmail.com"
	},

	{
		id: "resume",
		icon: <BsPersonSquare />,
		title: "Visit my Resume",
		url: "https://drive.google.com/file/d/1Vrwny81bA6zk6chkdM44RbZKeL9bMoi2/view?usp=sharing"
	}
];
