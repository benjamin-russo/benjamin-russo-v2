import { Metadata } from 'next';

import ContactForm from '@/modules/Contact/components/ContactForm/ContactForm';
import Title from '@/modules/Layout/components/Title/Title';

export const metadata: Metadata = {
  title: 'Contact - Benjamin RUSSO',
  description:
    "Si vous souhaitez me contacter pour la future création de votre site internet, n'hésitez pas à remplir le formulaire de cette page et je me ferais un plaisir de vous recontacter.",
};

const Contact = () => {
  return (
    <>
      <Title content='Contact' />
      <ContactForm />
    </>
  );
};

export default Contact;
