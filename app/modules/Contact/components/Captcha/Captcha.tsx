import ReCAPTCHA from 'react-google-recaptcha';

const siteKey = process.env.NEXT_PUBLIC_CAPTCHA_SITE_KEY;

interface CaptchaProps {
  labelId: string;
  onChange: (labelId: string, value: string | null) => void;
}

const Captcha = (props: CaptchaProps) => {
  const { labelId, onChange } = props;

  const handleOnChange = (token: string | null) => {
    if (!token) {
      return;
    }
    onChange(labelId, token);
  };

  const handleOnExpired = () => {
    onChange(labelId, null);
  };

  if (!siteKey) {
    return null;
  }

  return <ReCAPTCHA sitekey={siteKey} onChange={handleOnChange} onExpired={handleOnExpired} />;
};

export default Captcha;
