import { StreamsPage, DebeziumPage } from 'streams/pages';

const TODOComponent = () => 'Nothing yet';

const routes = [
  {
    path: "/",
    text: "Dashboard",
    component: TODOComponent,
    exact: true
  },
  {
    path: "/services/all",
    group: 'services',
    text: "All services",
    component: TODOComponent
  },
  {
    path: "/services/streams",
    group: 'services',
    text: "Openshift streams",
    component: StreamsPage
  },
  {
    path: "/services/debezium",
    group: 'services',
    text: "Change data capture",
    component: DebeziumPage
  },
  {
    path: "/services/kafkaconnect",
    group: 'services',
    text: "Kamel Kafka connect",
    component: TODOComponent
  },
  {
    path: "/services/threescale",
    group: 'services',
    text: "API management",
    component: TODOComponent
  },
  {
    path: "/services/sso",
    group: 'services',
    text: "Single sign-on",
    component: TODOComponent
  },
  {
    path: "/environments",
    group: 'misc',
    text: "Environments",
    component: TODOComponent
  },
  {
    path: "/idprodivers",
    group: 'misc',
    text: "Identity providers",
    component: TODOComponent
  },
  {
    path: "/docs",
    group: 'docs',
    text: "Documentation",
    component: TODOComponent
  },
];

export default routes;
