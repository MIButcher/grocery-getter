import { BaseAPI, Configuration } from "../generated/index.ts";
import { getApiUri } from "./api_configurations.ts";

type ApiClass<TApi extends BaseAPI> = { new (config: Configuration): TApi };

export function apiProvider<TApi extends BaseAPI>(cls: ApiClass<TApi>): TApi {
  return new cls(new Configuration(getApiUri()));
}
