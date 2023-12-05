/* eslint-disable no-console */
import "@testing-library/jest-dom";
import { TextEncoder, TextDecoder } from "util";

global.TextEncoder = TextEncoder;
// @ts-expect-error does not exist
global.TextDecoder = TextDecoder;

const warn = console.warn;
console.warn = jest.fn().mockImplementation((msg: string) => {
  if (msg.includes("Warning: Couldn't find 'bp=' parameter in URL.")) {
    return;
  }
  return warn(msg);
});

const error = console.error;
console.error = jest.fn().mockImplementation((msg) => {
  if (
    msg?.length &&
    (msg.startsWith("Warning: ") ||
      msg.startsWith("Error: Not implemented: navigation") ||
      msg.startsWith("attachInternals API is not supported in this browser environment."))
  ) {
    return undefined;
  }
  return error(msg);
});

window.structuredClone = jest.fn().mockImplementation((data) => data);

// @ts-ignore Unknown global
global.IS_REACT_ACT_ENVIRONMENT = true;

jest.setTimeout(5000);

beforeEach(() => {
  jest.clearAllMocks();
});
