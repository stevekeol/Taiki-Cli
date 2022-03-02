import path from 'path'
import fs from 'fs-extra'
import { isSkip, setup } from '../index'
import { DependencyType, getDepsCollection, clearDeps } from '../../../core/dependency'
import { BUILD_TOOLS } from '../../typescript/build-tools'

const rootPath = path.resolve(__dirname, 'tmp')
describe('As chore vite feature', () => {
  beforeEach(async () => {
    clearDeps()
    await fs.ensureDir(rootPath)
  })

  afterEach(async () => {
    await fs.remove(rootPath)
  })

  it('should skip install this feature when project has exists vite config file', async () => {
    const viteConfigPath = path.resolve(rootPath, 'vite.config.ts')
    await fs.ensureFile(viteConfigPath)
    const context = { rootPath, answers: {} }
    const skipped = await isSkip(context)
    expect(skipped).toBe(true)
  })

  it('should skip this feature when given special build tool', async () => {
    const skipped = await isSkip({ rootPath, answers: { buildTool: BUILD_TOOLS.TSC } })
    expect(skipped).toBe(true)

    const skipped1 = await isSkip({ rootPath, answers: { buildTool: BUILD_TOOLS.ESBUILD } })
    expect(skipped1).toBe(true)

    const skipped1 = await isSkip({ rootPath, answers: { buildTool: BUILD_TOOLS.ROLLUP } })
    expect(skipped1).toBe(true)    

    const skipped2 = await isSkip({ rootPath, answers: { buildTool: BUILD_TOOLS.VITE } })
    expect(skipped2).toBe(false)

    const skipped3 = await isSkip({ rootPath, answers: { buildTool: BUILD_TOOLS.WEBPACK } })
    expect(skipped3).toBe(true)
  })

  it('should write vite config to project root when setup has been called', async () => {
    const context = { rootPath, answers: {} }
    await setup(context)

    const deps = getDepsCollection()
    const expectedDependencies = [
      'vite',
      '@vite/plugin-react'
    ].map(item => ({ name: item, type: DependencyType.DEV }))

    expect(deps).toStrictEqual(expectedDependencies)
  })
})
