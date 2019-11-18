import { loadReCaptcha } from 'react-recaptcha-v3'
const SITE_ID = process.env.REACT_APP_RECAPTCHA_SITE_ID;

export default function loadRecaptchaFunction() {

		loadReCaptcha(SITE_ID);
		console.log(SITE_ID);

};