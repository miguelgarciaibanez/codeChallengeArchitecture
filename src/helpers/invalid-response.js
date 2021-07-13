import { InvalidResponseError } from './errors.js'

export default function invalidResponse (param) {
  throw new InvalidResponseError(param)
}