import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';
import { useTranslations } from 'next-intl';
const Hero = (props) => {

const t = useTranslations('home');

  

  return (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          {t('welcome')} <br />
          {t('welcome_1')}
        </SectionTitle>
        <SectionText>
        {t('description')}
        </SectionText>
        <Button onClick={props.handleClick}>Learn More</Button>
      </LeftSection>
    </Section>
  </>
  )
};

export default Hero;