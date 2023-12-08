    

import { Footer, FooterBrand, FooterCopyright, FooterDivider, FooterLink, FooterLinkGroup } from 'flowbite-react';

const FooterAdmin=()=> {
  return (
    <Footer container >
      <div className="w-full text-center text-white">
        <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
          <FooterBrand
            href="https://flowbite.com"
            src="/images/logoADP.png"
            alt="Flowbite Logo"
            name="ADP"
          />
          <FooterLinkGroup>
            <FooterLink href="#">About</FooterLink>
            <FooterLink href="#">Privacy Policy</FooterLink>
            <FooterLink href="#">Licensing</FooterLink>
            <FooterLink href="#">Contact</FooterLink>
          </FooterLinkGroup>
        </div>
        <FooterDivider />
        <FooterCopyright className='text-red-500' by="ADP™" year={2023} />
      </div>
    </Footer>
  );
}
export default FooterAdmin
