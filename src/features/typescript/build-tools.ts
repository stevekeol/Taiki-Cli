import { colorizeTip } from '../../utils/colorizer'

export enum BUILD_TOOLS {
  TSC,
  ESBUILD,
  VITE,
  SNOWPACK,
  WEBPACK,
  ROLLUP
  // PARCEL,
}

const LabelMappings = [
  `TSC`,
  `Esbuild ${colorizeTip('(recommended)')}`,
  `Vite`,
  'Snowpack',
  'Webpack',
  'Rollup'
  // 'Parcel',
]

export const buildTools = () => {
  const choices = LabelMappings.map((name, value) => ({
    name,
    value
  }))

  return {
    type: 'list',
    name: 'buildTool',
    message: '🛠  Which build tool do you want to use?',
    choices,
    default: BUILD_TOOLS.ESBUILD
  }
}
