import React from 'react';
import { Brand, PageHeader, Title } from '@patternfly/react-core';
import logoUms from '../images/logo-ums-reversed.svg';
import "@patternfly/patternfly/utilities/Accessibility/accessibility.css";

const MyPageHeader = () => {
  const Logo = (
    <React.Fragment>
      <Title headingLevel="h1" className="pf-u-screen-reader">
        Unified Managed Services
      </Title>
      <Brand src={logoUms} alt="Unified Managed Services" style={{width: "150px"}} />
    </React.Fragment>
  );

  return <PageHeader logo={Logo} showNavToggle />
}

export default MyPageHeader;