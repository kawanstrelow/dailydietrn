import { Container, Logo, ProfilePicture } from "./styles";

import LogoImg from "@assets/logo.png";
import ProfileImg from '@assets/profile.jpg';

export function Header() {

  return (
    <Container>
        <Logo source={LogoImg}/>
        <ProfilePicture source={ProfileImg}/>
    </Container>
  );
}