import * as yup from 'yup';
import 'yup-phone';

export const contactSchema = yup.object().shape({
  captcha: yup.string().nullable().required('Veuillez valider le captcha.'),
  consent: yup
    .boolean()
    .oneOf([true], 'Veuillez cocher la case de consentement.')
    .required('Veuillez cocher la case de consentement.'),
  email: yup.string().email('Veuillez entrer une adresse email valide.').required('Veuillez entrer votre adresse email.'),
  date: yup.string(),
  firstname: yup.string().required('Veuillez entrer votre prénom.'),
  lastname: yup.string().required('Veuillez entrer votre nom.'),
  message: yup.string().required('Veuillez entrer votre message.'),
  place: yup.string(),
  phone: yup
    .string()
    .phone('FR', true, 'Veuillez entrer un numéro de téléphone valide.')
    .required('Veuillez entrer un numéro de téléphone.'),
});
