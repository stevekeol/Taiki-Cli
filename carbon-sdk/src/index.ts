import * as config from './config/default.json'
export default function sum(a: number, b: number) {
  console.log(config.name)
  return a + b
}

console.log(sum(1,2))
