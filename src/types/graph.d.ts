export const typeDefs = ["type SayHelloResponse {\n  text: String!\n  error: Boolean!\n}\n\ntype Query {\n  sayHello(name: String!): SayHelloResponse!\n  sayBye: String!\n}\n"];
/* tslint:disable */

export interface Query {
  sayHello: SayHelloResponse;
  sayBye: string;
}

export interface SayHelloQueryArgs {
  name: string;
}

export interface SayHelloResponse {
  text: string;
  error: boolean;
}
