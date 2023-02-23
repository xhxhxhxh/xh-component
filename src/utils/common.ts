import type { App } from 'vue'

export const withInstall = (
  main: Record<string, any>,
  extra?: Record<string, any>
) => {
  main.install = (app: App): void => {
    for (const comp of [main, ...Object.values(extra ?? {})]) {
      app.component(comp.name, comp)
    }
  }

  return main
}