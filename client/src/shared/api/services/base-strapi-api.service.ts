import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {AbstractApiService} from "../abstract/abstract-api.service";
import {EntityRequest} from "../../model/types/EntityRequest";
import {EntitiesDataModel} from "../../model/types/EntitiesDataModel";


@Injectable({providedIn: 'root'})
export class BaseStrapiApiService<T, Y> extends AbstractApiService<EntitiesDataModel<T>, EntityRequest<Y>> {
  constructor(protected override http: HttpClient) {
    super(http);
  }
}
