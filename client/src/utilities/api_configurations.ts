import { ConfigurationParameters } from "../generated/runtime";

const apiConfigurations: ConfigurationParameters = {};

export function setApiUri(uri: string) {
  apiConfigurations.basePath = uri;
}

export function setBearerToken(token: string) {
  apiConfigurations.headers = {
    Authorization: `Bearer ${token}`,
  };
}

export function getApiUri(config?: ConfigurationParameters): ConfigurationParameters {
  return Object.assign(apiConfigurations, config || {});
}
