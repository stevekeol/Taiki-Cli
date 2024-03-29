import execa from 'execa'

export const exec = async (command: string) => {
  return await execa.command(command)
}

export const readStdout = async (command: string) => {
  try {
    const r = await exec(command)
    if (r.exitCode !== 0) return null
    return r.stdout
  } catch (e) {
    return null
  }
}

export const executable = async (command: string) => {
  try {
    const r = await exec(command)
    return r.exitCode === 0
  } catch (e) {
    return false
  }
}
