import React from 'react';
import { PageHeader, Title } from '@patternfly/react-core';


const MyPageHeader = () => {
  const Logo = (
    <Title headingLevel="h1" size="xl" style={{ color: 'white' }}>
      Unified Managed Services
    </Title>
  );

  return <PageHeader logo={Logo} showNavToggle />
}

export default MyPageHeader;