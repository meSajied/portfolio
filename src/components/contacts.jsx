import { SocialIcon } from 'react-social-icons';

function Contacts() {
  return (
    <div className="flex flex-row md:flex-col space-x-5 md:space-y-5 justify-center md:justify-end">
      <SocialIcon network="github" url="https://www.github.com/meSajied" />
      <SocialIcon network="linkedin" bgColor='#000' url="https://www.linkedin.com/in/sajied-shah-yousuf" />
      <SocialIcon network="email" bgColor='#000' url="mailto:sajiedshahyousuf@gmail.com" />
    </div>
  );
  
}

export {Contacts};