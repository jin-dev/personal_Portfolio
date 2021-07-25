import Link from 'next/link';
import React, {useState} from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, Div4, NavLink, SocialIcons } from './HeaderStyles';

import { useRouter } from 'next/router'

const Header = () =>  {


  const router = useRouter();
  const [language, setLanguage] = useState('Eng');
  function handleLanguage () {

    if(language === 'Kor') {
      setLanguage('Eng');
      router.push(`/Kor`);
    } else {
      setLanguage('Kor');
     // router.push("/en");
     router.push(`/Eng`)
    }
   

  }
 
  return (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{ display: 'flex', alignItems: 'center', color:"white" }}>
          <DiCssdeck size="3rem" /> <span>Portfolio</span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>        
      <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>        
    </Div2>
      <Div3>
        <SocialIcons href="https://google.com">
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://google.com">
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://google.com">
          <AiFillInstagram size="3rem"/>
        </SocialIcons>
       
          <Div4 onClick={() => handleLanguage()}> {language}</Div4>
     
      </Div3>
    </Container>
)
  };

export default Header;
