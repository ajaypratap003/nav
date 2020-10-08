import React from 'react';
import "@patternfly/patternfly/utilities/Accessibility/accessibility.css";
import {
  Button,
  Brand,
  Card,
  CardBody,
  CardHeader,
  CardHeaderMain,
  CardFooter,
  CardTitle,
  Grid,
  GridItem,
  Page,
  PageHeader,
  PageSection,
  Text,
  Title,
  TitleSizes
} from '@patternfly/react-core';
import "./dashboardPage.scss";
import ArrowRightIcon from "@patternfly/react-icons/dist/js/icons/arrow-right-icon";
import iconAnsible from './images/icon-ansible.svg';
import iconCloudCompute from './images/icon-cloud-compute.svg';
import iconCostManagement from './images/icon-cost-management.svg';
import iconInsights from './images/icon-insights.svg';
import iconMigrationServices from './images/icon-migration-services.svg';
import iconSubscriptionWatch from './images/icon-subscription-watch.svg';
import logoRedhatReversed from './images/logo-redhat-reversed.svg';
import logoRedhat from './images/logo-redhat.svg';
import { Link } from 'react-router-dom';

export const DashboardPage = () => {
  return (
    <Page>
      <PageHeader logo={<Brand src={logoRedhatReversed} alt="Red Hat Logo" />} />
      <PageSection isWidthLimited className="pf-m-center" isFilled={true} className="pf-m-center-vertically">
        <Text component="h1" className="pf-u-screen-reader">
          Federated Modules POC
        </Text>
        <Grid hasGutter md={6} xl={4}>
          <GridItem>
            <Card className="app__landing-card">
              <CardHeader>
                <CardHeaderMain>
                  <img
                    className="app__landing-card-logo"
                    src={iconCloudCompute}
                    alt="Red Hat Hybrid Coud Compute"
                  />
                </CardHeaderMain>
              </CardHeader>
              <CardTitle>
                <Title headingLevel="h2" size={TitleSizes["xl"]}>
                  Unified Management Services
                </Title>
              </CardTitle>
              <CardBody isFilled={false}>
                <Text className="pf-m-color-400">
                  Access managed services, or install, register and manage
                  Red Hat OpenShift 4 clusters.
                </Text>
              </CardBody>
              <CardBody>
                <ul className="app__link-list">
                  <li>
                    <Link to="/services/streams">
                      OpenShift Streams
                    </Link>
                  </li>
                  <li>
                    <Link to="/services/debezium">
                      Change data capture
                    </Link>
                  </li>
                  <li>
                    <Link to="/services/kafkaconnect">
                      Camel Kafka connect
                    </Link>
                  </li>
                  <li>
                    <Link to="/services/threescale">
                      OpenShift Cluster Manager
                    </Link>
                  </li>
                </ul>
              </CardBody>
              <CardFooter>
                <Button
                  icon={<ArrowRightIcon />}
                  iconPosition="right"
                  variant="link"
                  isInline
                  component="a"
                  href="#"
                >
                  Open
                </Button>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem>
            <Card className="app__landing-card">
              <CardHeader>
                <CardHeaderMain>
                  <img
                    className="app__landing-card-logo"
                    src={iconInsights}
                    alt="Red Hat Insights"
                  />
                </CardHeaderMain>
              </CardHeader>
              <CardTitle>
                <Title headingLevel="h2" size={TitleSizes["xl"]}>
                  Red Hat Insights
                </Title>
              </CardTitle>
              <CardBody isFilled={false}>
                <Text className="pf-m-color-400">
                  Identify and remediate configuration issues in your Red
                  Hat® environments.
                </Text>
              </CardBody>
              <CardBody>
                <ul className="app__link-list pf-m-2-col">
                  <li>
                    <Link to="">
                      Dashboard
                    </Link>
                  </li>
                  <li>
                    <Link to="">
                      Patch
                    </Link>
                  </li>
                  <li>
                    <Link to="">
                      Advisor
                    </Link>
                  </li>
                  <li>
                    <Link to="">
                      Drift
                    </Link>
                  </li>
                  <li>
                    <Link to="">
                      Vulterability
                    </Link>
                  </li>
                  <li>
                    <Link to="">
                      Policies
                    </Link>
                  </li>
                  <li>
                    <Link to="">
                      Compliance
                    </Link>
                  </li>
                </ul>
              </CardBody>
              <CardFooter>
                <Button
                  variant="link"
                  icon={<ArrowRightIcon />}
                  iconPosition="right"
                  isInline
                >
                  Open
                </Button>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem>
            <Card className="app__landing-card">
              <CardHeader>
                <CardHeaderMain>
                  <img
                    className="app__landing-card-logo"
                    src={iconAnsible}
                    alt="Red Hat Ansible"
                  />
                </CardHeaderMain>
              </CardHeader>
              <CardTitle>
                <Title headingLevel="h2" size={TitleSizes["xl"]}>
                  Red Hat Ansible Automation Platform
                </Title>
              </CardTitle>
              <CardBody isFilled={false}>
                <Text className="pf-m-color-400">
                  Extend your automation with analytics, policy and
                  governance, and content management.
                </Text>
              </CardBody>
              <CardBody>
                <ul className="app__link-list pf-m-auto-col" style={{"--app__link-list--MinMax--min": "18ch"}}>
                  <li>
                    <Link to="">
                      Automation Analytics
                    </Link>
                  </li>
                  <li>
                    <Link to="">
                      Automation Hub
                    </Link>
                  </li>
                  <li>
                    <Link to="">
                      Automation Services Catalog
                    </Link>
                  </li>
                </ul>
              </CardBody>
              <CardFooter>
                <Button
                  variant="link"
                  icon={<ArrowRightIcon />}
                  iconPosition="right"
                  isInline
                >
                  Open
                </Button>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem>
            <Card className="app__landing-card">
              <CardHeader>
                <CardHeaderMain>
                  <img
                    className="app__landing-card-logo"
                    src={iconCostManagement}
                    alt="Red Hat Cost Management"
                  />
                </CardHeaderMain>
              </CardHeader>
              <CardTitle>
                <Title headingLevel="h2" size={TitleSizes["xl"]}>
                  Cost Management
                </Title>
              </CardTitle>
              <CardBody isFilled={false}>
                <Text className="pf-m-color-400">
                  Analyze, forecast and optimize your Red Hat OpenShift
                  cluster costs in hybrid cloud environments.
                </Text>
              </CardBody>
              <CardBody>
                <ul className="app__link-list pf-m-auto-col" style={{"--app__link-list--MinMax--min": "22ch"}}>
                  <li>
                    <Link to="">
                      Cost Management
                    </Link>
                  </li>
                </ul>
              </CardBody>
              <CardFooter>
                <Button
                  variant="link"
                  icon={<ArrowRightIcon />}
                  iconPosition="right"
                  isInline
                >
                  Open
                </Button>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem>
            <Card className="app__landing-card">
              <CardHeader>
                <CardHeaderMain>
                  <img
                    className="app__landing-card-logo"
                    src={iconMigrationServices}
                    alt="Red Hat Migration Services"
                  />
                </CardHeaderMain>
              </CardHeader>
              <CardTitle>
                <Title headingLevel="h2" size={TitleSizes["xl"]}>
                  Migration Services
                </Title>
              </CardTitle>
              <CardBody isFilled={false}>
                <Text className="pf-m-color-400">
                  Get recommendations on migrating your applications and
                  infrastructure to Red Hat.
                </Text>
              </CardBody>
              <CardBody>
                <ul className="app__link-list">
                  <li>
                    <Link to="">
                      Migration Analytics
                    </Link>
                  </li>
                </ul>
              </CardBody>
              <CardFooter>
                <Button
                  variant="link"
                  icon={<ArrowRightIcon />}
                  iconPosition="right"
                  isInline
                >
                  Open
                </Button>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem>
            <Card className="app__landing-card">
              <CardHeader>
                <CardHeaderMain>
                  <img
                    className="app__landing-card-logo"
                    src={iconSubscriptionWatch}
                    alt="Red Hat Subscription Watch"
                  />
                </CardHeaderMain>
              </CardHeader>
              <CardTitle>
                <Title headingLevel="h2" size={TitleSizes["xl"]}>
                  Subscription Watch
                </Title>
              </CardTitle>
              <CardBody isFilled={false}>
                <Text className="pf-m-color-400">
                  Account-level summaries of your Red Hat subscription
                  utilization.
                </Text>
              </CardBody>
              <CardBody>
                <ul className="app__link-list pf-m-auto-col" style={{"--app__link-list--MinMax--min": "18ch"}}>
                  <li>
                    <Link to="">
                      Red Hat Enterprise Linux
                    </Link>
                  </li>
                  <li>
                    <Link to="">
                      Red Hat OpenShift
                    </Link>
                  </li>
                </ul>
              </CardBody>
              <CardFooter>
                <Button
                  variant="link"
                  icon={<ArrowRightIcon />}
                  iconPosition="right"
                  isInline
                >
                  Open
                </Button>
              </CardFooter>
            </Card>
          </GridItem>
        </Grid>
      </PageSection>
      <PageSection className="app-c-page__footer" isFilled={false}>
        <a href="#" className="app-c-page__footer-brand-link">
          <Brand src={logoRedhat} alt="Red Hat Logo" />
        </a>
      </PageSection>
    </Page>
  );
}
