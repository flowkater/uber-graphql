# nuber-server

## 기본 프로젝트 셋업

```shell
yarn add typescript ts-node nodemon --dev
yarn add tslint-config-prettier --dev
```

- [DefinitelyTyped](https://github.com/DefinitelyTyped/DefinitelyTyped)
- [추가설명](https://www.haruair.com/blog/3268)

```shell
yarn add @types/node --dev
```

```js
// package.json
"scripts": {
    "dev": "cd src && nodemon --exec ts-node index.ts -e ts,graphql"
  }
```

- 프로덕션에서는 서버를 빌드해야되지만 개발용으로는 위와 같이 nodemon 을 이용해서 바로 사용하는게 편리

```shell
yarn add graphql-yoga
```

### Middleware

```shell
yarn add helmet morgan cors
yarn add @types/cors @types/helmet @types/morgan --dev
```

- helmet 보안을 위한 미들웨어. 요청 때마다 미들웨어가 요청을 잠시 멈추고 검사한 후에, 위험하지 않다면 요청을 계속 진행
- morgan Logger
- cors Cross-Origin Resource Sharing

### GraphQL Merge

```shell
yarn add graphql-tools merge-graphql-schemas
```

- 여러개의 graphql, resolver 를 merge 하는데 쓴다.

### GraphQL types

- graphql 은 현재 typescript 랑 연결이 되지 않는다. 때문에 타입에 문제가 있어도 문제를 표시해주지 않는다.

```shell
yarn add graphql-to-typescript gql-merge --dev
```

```js
"scripts": {
    "dev": "cd src && nodemon --exec ts-node index.ts -e ts,graphql",
    "pretypes": "gql-merge --out-file ./src/schema.graphql ./src/api/**/*.graphql",
    "types": "graphql-to-typescript ./src/schema.graphql ./src/types/graph.d.ts"
  },
```

- graph.d.ts 에 graphql 인터페이스가 생기고 schema.ts 에 merge 가 된다.

```shell
yarn types
```

### TypeORM

```shell
yarn add typeorm
```

```shell
yarn add pg
```

### DotEnv

```shell
yarn add dotenv
```