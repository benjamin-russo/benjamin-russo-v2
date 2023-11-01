import { useEffect, useState } from 'react';

import Toggle from '@/modules/Form/components/Toggle/Toggle';
import ToggleGroup from '@/modules/Form/components/ToggleGroup/ToggleGroup';
import ToggleGroupItem from '@/modules/Form/components/ToggleGroup/ToggleGroupItem/ToggleGroupItem';

import styles from './SelectServices.module.scss';

interface SelectServicesProps {
  label: string;
  labelId: string;
  onChange: (labelId: string, values: ServicesType) => void;
}

interface ServicesState {
  development: string;
  design: string;
  maintenance: boolean;
}

export type ServicesType = ServicesState | null;

const SelectServices = (props: SelectServicesProps) => {
  const { label, labelId, onChange } = props;

  const [services, setServices] = useState<ServicesState>({
    development: 'landing',
    design: 'design',
    maintenance: false,
  });

  useEffect(() => {
    onChange(labelId, services);
  }, [services]);

  const handleOnChange = (labelId: string, value: string | boolean) => {
    if (!value) {
      return;
    }

    setServices({
      ...services,
      [labelId]: value,
    });
  };

  return (
    <div className={styles['SelectServices']}>
      <p className={styles['SelectServices-label']}>{label}</p>
      <div className={styles['SelectServices-services']}>
        <ToggleGroup value={services.development} label='Complexité du site' labelId='development' onChange={handleOnChange}>
          <ToggleGroupItem label='Landing Page' value='landing' />
          <ToggleGroupItem label='Landing Page +' value='landing+' />
          <ToggleGroupItem label='Site Web' value='website' />
        </ToggleGroup>
        <div className={styles['SelectServices-container']}>
          <ToggleGroup value={services.design} label='Complexité du design' labelId='design' onChange={handleOnChange}>
            <ToggleGroupItem label='Web Design' value='design' />
            <ToggleGroupItem label='Web Design +' value='design +' />
          </ToggleGroup>
          <Toggle label='Maintenance' labelId='maintenance' onPressedChange={handleOnChange} pressed={services.maintenance} />
        </div>
      </div>
    </div>
  );
};

export default SelectServices;
