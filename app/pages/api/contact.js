import axios from 'axios';
import * as yup from 'yup';
import { createClient } from 'contentful-management';
import Mailjet from 'node-mailjet';
import { contactSchema } from '../../data/validationSchema';

const secret_key = process.env.RECAPTCHA_SECRET;
const content_management_api_key = process.env.CONTENTFUL_MANAGEMENT_API_KEY;
const spaceId = process.env.CONTENTFUL_SPACE_ID;
const environmentId = process.env.CONTENTFUL_ENVIRONMENT_ID;

const RECAPTCHA_INVALIDE = { response: 'captcha_key invalide' };
const RECAPTCHA_URL = 'https://www.google.com/recaptcha/api/siteverify?secret=';
const POST = 'POST';

const client = createClient({
  accessToken: content_management_api_key,
});

const mailjet = new Mailjet({
  apiKey: process.env.MJ_APIKEY_PUBLIC,
  apiSecret: process.env.MJ_APIKEY_PRIVATE,
});

const options = {
  abortEarly: false,
};

const from = {
  Email: 'russobenjamin45@gmail.com',
  Name: "La Grange d'Angel - Contact",
};

const to = [
  {
    Email: 'lagrangedangel@gmail.com',
    Name: "La Grange d'Angel - Angélique",
  },
];
const contact = async (req, res) => {
  if (req.method === POST) {
    try {
      const { captcha, consent, email, date, firstname, lastname, message, place, phone } = req.body;

      if (!captcha) throw RECAPTCHA_INVALIDE;

      const url = `${RECAPTCHA_URL + secret_key}&response=${captcha}`;
      const captcha_response = await axios.post(url);
      const { success } = captcha_response.data;

      if (!success) throw RECAPTCHA_INVALIDE;

      await contactSchema.validate(req.body, options);

      // const space = await client.getSpace(spaceId);
      // const environment = await space.getEnvironment(environmentId);
      // await environment.createEntry('contact', {
      //   fields: {
      //     email: {
      //       fr: email,
      //     },
      //     firstname: {
      //       fr: firstname,
      //     },
      //     lastname: {
      //       fr: lastname,
      //     },
      //     phone: {
      //       fr: phone,
      //     },
      //     message: {
      //       fr: message,
      //     },
      //   },
      // });

      const dateFR = date && new Date(date).toLocaleDateString('fr');

      await mailjet.post('send', { version: 'v3.1' }).request({
        Messages: [
          {
            From: from,
            To: to,
            Subject: `Contact - ${firstname} ${lastname} veut te contacter`,
            TextPart: `
Email: ${email}
Prénom: ${firstname}
Nom: ${lastname}
Date de l'évènement: ${dateFR || 'non précisé'}
Lieu de l'évènement: ${place || 'non précisé'}
N° téléphone: ${phone}

Message: ${message}

Consentement (Mentions légales et confidentialité): ${consent ? 'validé' : 'non validé'} 
            `,
          },
        ],
      });
      res.status(200).json({ response: 'success' });
    } catch (err) {
      console.log(err);
      res.status(400).json(err);
    }
  }
};

export default contact;
