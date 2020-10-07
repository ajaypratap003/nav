import React from 'react';
import "@patternfly/patternfly/utilities/Accessibility/accessibility.css";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  CardHeaderMain,
  CardFooter,
  CardTitle,
  Grid,
  GridItem,
  PageSection,
  PageSectionVariants,
  Text,
  Title,
  TitleSizes
} from '@patternfly/react-core';
import "./dashboardPage.scss";
import { ArrowRightIcon } from "@patternfly/react-icons";
import iconAnsible from './images/icon-ansible.svg';
import iconCloudCompute from './images/icon-cloud-compute.svg';
import iconCostManagement from './images/icon-cost-management.svg';
import iconInsights from './images/icon-insights.svg';
import iconMigrationServices from './images/icon-migration-services.svg';
import iconSubscriptionWatch from './images/icon-subscription-watch.svg';

export const DashboardPage = () => {
  return (
    <PageSection isWidthLimited className="pf-m-center">
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
                Hybrid Cloud Compute
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
                  <Button component="a" href="#" variant="link" isInline>
                    OpenShift Streams
                  </Button>
                </li>
                <li>
                  <Button component="a" href="#" variant="link" isInline>
                    Change date capture
                  </Button>
                </li>
                <li>
                  <Button component="a" href="#" variant="link" isInline>
                    Camel Kafka connect
                  </Button>
                </li>
                <li>
                  <Button component="a" href="#" variant="link" isInline>
                    OpenShift Cluster Manager
                  </Button>
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
                  <Button component="a" href="#" variant="link" isInline>
                    Dashboard
                  </Button>
                </li>
                <li>
                  <Button component="a" href="#" variant="link" isInline>
                    Patch
                  </Button>
                </li>
                <li>
                  <Button component="a" href="#" variant="link" isInline>
                    Advisor
                  </Button>
                </li>
                <li>
                  <Button component="a" href="#" variant="link" isInline>
                    Drift
                  </Button>
                </li>
                <li>
                  <Button component="a" href="#" variant="link" isInline>
                    Vulterability
                  </Button>
                </li>
                <li>
                  <Button component="a" href="#" variant="link" isInline>
                    Policies
                  </Button>
                </li>
                <li>
                  <Button component="a" href="#" variant="link" isInline>
                    Compliance
                  </Button>
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
                  <Button component="a" href="#" variant="link" isInline>
                    Automation Analytics
                  </Button>
                </li>
                <li>
                  <Button component="a" href="#" variant="link" isInline>
                    Automation Hub
                  </Button>
                </li>
                <li>
                  <Button component="a" href="#" variant="link" isInline>
                    Automation Services Catalog
                  </Button>
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
                  <Button component="a" href="#" variant="link" isInline>
                    Cost Management
                  </Button>
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
                  <Button component="a" href="#" variant="link" isInline>
                    Migration Analytics
                  </Button>
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
                  <Button component="a" href="#" variant="link" isInline>
                    Red Hat Enterprise Linux
                  </Button>
                </li>
                <li>
                  <Button component="a" href="#" variant="link" isInline>
                    Red Hat OpenShift
                  </Button>
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
  );
}
