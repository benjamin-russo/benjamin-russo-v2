'use client';

import * as AccordionRadix from '@radix-ui/react-accordion';
import ArrowDown from '../../icons/ArrowDown';

import styles from './Accordion.module.scss';

type AccordionItem = {
  id: number;
  content: string;
  title: string;
};

interface AccordionProps {
  items: AccordionItem[];
}

const Accordion = (props: AccordionProps) => {
  const { items } = props;

  const itemsList = items.map((item) => {
    const { id, content, title } = item;
    return (
      <AccordionRadix.Item className={styles['Accordion-item']} value={id.toString()}>
        <AccordionRadix.Trigger className={styles['Accordion-trigger']}>
          {title} <ArrowDown height={40} width={40} />
        </AccordionRadix.Trigger>
        <AccordionRadix.Content className={styles['Accordion-content']}>{content}</AccordionRadix.Content>
      </AccordionRadix.Item>
    );
  });

  return (
    <AccordionRadix.Root className={styles['Accordion']} type='single' defaultValue='item-1' collapsible>
      {itemsList}
    </AccordionRadix.Root>
  );
};

export default Accordion;
