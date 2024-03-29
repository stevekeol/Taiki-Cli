import chalk from 'chalk'

export const colorizePath = (path: string) => chalk.green(path)
export const colorizeUrl = (url: string) => chalk.greenBright(url)
export const colorizeText = (text: string) => chalk.cyan.bold(text)
export const colorizeErrorText = (text: string) => chalk.red.bold(text)
export const colorizeTip = (tip: string) => chalk.yellow(tip)
export const colorizeDesc = (desc: string) => chalk.grey(desc)
export const colorizeInfo = (info: string) => chalk.green(info)