'use client';

import { useState } from 'react';

import Button from '@/modules/Common/components/Button/Button';
import Captcha from '../Captcha/Captcha';
import Checkbox from '../Checkbox/Checkbox';
import DatePicker from '@/modules/Form/components/DatePicker/DatePicker';
import Input from '@/modules/Form/components/Input/Input';
import Select from '@/modules/Form/components/Select/Select';
import SelectItem from '@/modules/Form/components/Select/SelectItem/SelectItem';
import SelectServices, { ServicesType } from '../SelectServices/SelectServices';
import TextArea from '@/modules/Form/components/TextArea/TextArea';

import { ButtonVariants } from '@/modules/Common/consts';

import styles from './ContactForm.module.scss';

const ContactForm = () => {
  const [form, setForm] = useState({
    email: '',
    firstname: '',
    lastname: '',
    phone: '',
    type: '',
    services: null,
    date: '',
    text: '',
    rgpd: 1,
    captcha: null,
  });

  const handleOnFieldChange = (labelId: string, value: string | boolean | ServicesType | null) => {
    setForm({
      ...form,
      [labelId]: value,
    });
  };

  const handleOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(form);
  };

  return (
    <div className={styles['ContactForm']}>
      <form className={styles['ContactForm-form']} noValidate onSubmit={handleOnSubmit}>
        <Input
          label='Adresse email'
          labelId='email'
          onChange={handleOnFieldChange}
          placeholder='Entrez votre adresse email'
          type='email'
          required
          value={form.email}
        />
        <div className={styles['ContactForm-container']}>
          <Input
            label='Prénom'
            labelId='firstname'
            onChange={handleOnFieldChange}
            placeholder='Entrez votre prénom'
            type='text'
            required
            value={form.firstname}
          />
          <Input
            label='Nom'
            labelId='lastname'
            onChange={handleOnFieldChange}
            placeholder='Entrez votre nom'
            type='text'
            required
            value={form.lastname}
          />
        </div>
        <Input
          label='N° de téléphone'
          labelId='phone'
          onChange={handleOnFieldChange}
          placeholder='Entrez votre n° de téléphone'
          type='tel'
          value={form.phone}
        />
        <Select
          label='Type de projet'
          labelId='type'
          onChange={handleOnFieldChange}
          placeholder='Choisissez un type de projet'
          required
          value={form.type}
        >
          <SelectItem value='nouveau site'>Nouveau site web</SelectItem>
          <SelectItem value='refonte'>Refonte d'un site web existant</SelectItem>
          <SelectItem value='maintenance'>Maintenance d'un site web existant</SelectItem>
        </Select>
        <SelectServices label='Services souhaités' labelId='services' onChange={handleOnFieldChange} />
        <DatePicker label='Date de mise en ligne souhaitée' labelId='date' onChange={handleOnFieldChange} />
        <TextArea
          label='Message'
          labelId='text'
          placeholder='Entrez votre message'
          required
          onChange={handleOnFieldChange}
          rows={10}
          value={form.text}
        />
        <Checkbox
          label="J'ai lu et j'accepte la Politique de confidentialité et Mentions légales"
          labelId='rgpd'
          required
          onChange={handleOnFieldChange}
          value={form.rgpd}
        />
        <Captcha labelId='captcha' onChange={handleOnFieldChange} />
        <Button className={styles['ContactForm-button']} label='Envoyer' variant={ButtonVariants.primary} />
      </form>
    </div>
  );
};

export default ContactForm;
