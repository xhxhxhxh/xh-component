
export * from "./components";
import * as components from "./components";
import { withInstall } from './utils/common'

const defaultComponent = withInstall({ name: 'xh-component' }, components);

export default defaultComponent