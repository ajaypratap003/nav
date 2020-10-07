import React from 'react';
import { Page, PageSection } from '@patternfly/react-core';
import PageHeader from './PageHeader';
import Sidebar from './Sidebar';
import routes from '../routes';

const MyPage = ({ children, location }) => (
  <Page
    sidebar={<Sidebar routes={routes} />}
    header={<PageHeader />}
  >
    <React.Suspense fallback={<PageSection>Loading...</PageSection>}>
      {children}
    </React.Suspense>
  </Page>
);

export default MyPage;
