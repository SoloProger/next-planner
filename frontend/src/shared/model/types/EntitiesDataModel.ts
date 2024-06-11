import { EntityDataModel } from "./EntityDataModel";

export interface EntitiesDataModel<T> {
  data: EntityDataModel<T>[];
  meta: unknown;
}
