import Link from 'next/link';
import React, {useState, useEffect} from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiReact } from 'react-icons/di';


import { Container, Div1, Div2, Div3, Div4, NavLink, SocialIcons } from './HeaderStyles';

import { useRouter } from 'next/router'

const Header = () =>  {

  useEffect(() => {
    document.title = "Jin's Portfolio(Next.js)"
 }, []);

  const router = useRouter();
  const [language, setLanguage] = useState('Kor');
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
          <DiReact size="3rem" /> <span>Jin's Portfolio</span>
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
        <SocialIcons href="https://github.com/jin-dev/">
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://www.linkedin.com/in/jin-woo-park-87583389/">
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
      
       
          <Div4 onClick={() => handleLanguage()}> 
          <SocialIcons>
          {language}
          
          </SocialIcons></Div4>
     
      </Div3>
    </Container>
)
  };

export default Header;
