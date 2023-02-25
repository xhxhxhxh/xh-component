import * as components from "./components";
declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    ELHelloWorld: typeof components.ELHelloWorld
    ELHelloWorld2: typeof components.ELHelloWorld2
  }
}

export {}