import { Dropdown, DropdownProps } from '@components/dropdown';
import { Logo, LogoProps } from '@components/logo';
import React from 'react';
import styled, { css } from 'styled-components';

export interface HeaderProps {
  logo: LogoProps;
  dropdown: DropdownProps;
}

const Header = ({ 
  logo,
  dropdown 
}: HeaderProps): JSX.Element => (
  <StyleWrapper
    className='header' 
    data-testid='header'>
    <Logo
      imageSrc={logo.imageSrc}
      imageAlt={logo.imageAlt}
      imageLink={logo.imageLink}
      rightText={logo.rightText}
      leftText={logo.leftText}
    />
    <Dropdown 
      items={dropdown.items} 
      title={dropdown.title} 
    />
  </StyleWrapper>
);

const headerStyles = css`
  &.header {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: var(--white);

    @media (min-width: 992px) {
      flex-direction: row;
    }
  }

  .logo {
    margin-bottom: 8px;

    @media (min-width: 992px) {
      flex: 75%;
      margin-bottom: 0;
    }
  }

  .dropdown {
    @media (min-width: 992px) {
      flex: 25%;
    }
  }

`;

const StyleWrapper = styled.header`
  ${headerStyles}
`;

export default Header;
