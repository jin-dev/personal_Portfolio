import React from 'react';

import {
  Section,
  SectionText,
  SectionTitle,
} from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';
import { useTranslations } from 'next-intl';
const Hero = (props) => {
  const t = useTranslations('home');

  function handleClick(e) {
    //    window.location.href = 'https://www.linkedin.com/in/jin-woo-park-87583389/';
    window.open('https://www.linkedin.com/in/jin-woo-park-87583389/', '_blank');
  }

  return (
    <>
      <Section row nopadding>
        <LeftSection>
          <SectionTitle main center>
            {t('welcome')} <br />
            {t('welcome_1')}
          </SectionTitle>
          <SectionText>{t('description')}</SectionText>
          <Button onClick={handleClick}>Find out more</Button>
        </LeftSection>
      </Section>
    </>
  );
};

export default Hero;
