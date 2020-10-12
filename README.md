### nav

Provides frontend for page containers and routes. Also has homepage. Part of UMS's 2nd POC and required for other projects to use routes.

http://nav-ums-poc.apps.uxd.n2z6.p1.openshiftapps.com/

#### Developing
```sh
yarn install
```

```sh
yarn develop`
```

#### Building
Change package.json to `"port": 8080` and add webpack url suffix for cluster you're deploying to.

```sh
yarn nodeshift-deploy
```

We've setup the project to work with NPM so it can be built + served using s2i.
