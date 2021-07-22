import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';
import { useTranslations } from 'next-intl';
const Technologies = () =>  {

  const t = useTranslations('technologies');


return (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
    {t('sectionText')}
    </SectionText>
    <List>
      <ListItem>
        <picture>
          <DiReact size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle> {t('listTitle')}</ListTitle>
          <ListParagraph>
          {t('ListParagraph')}  
          <br /> 
          {t('ListParagraph_1')} 
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiFirebase size="3rem" />
        </picture>
        <ListContainer>
        <ListTitle> {t('listTitle_1')}</ListTitle>
          <ListParagraph>
          {t('ListParagraph')}  <br /> {t('ListParagraph_2')}
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiZend size="3rem" />
        </picture>
        <ListContainer>
        <ListTitle> {t('listTitle_2')}</ListTitle>
          <ListParagraph>
          {t('ListParagraph')}  <br /> {t('ListParagraph_3')}
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider colorAlt />
  </Section>
)
};

export default Technologies;
