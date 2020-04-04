import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {DiseaseDto} from './models/DiseaseDto';
import {MedicineDto} from './models/MedicineDto';
import {UrlBuilder} from './urlBuilderService';
import {LoggingHttpClientWrapper} from './LoggingHttpClientWrapperService';

@Injectable({
  providedIn: 'root'
})
export class WebService {

  // TODO dowiedziec sie czy da sie jakos to do pliku przeniesc
  private API_URL = 'localhost:8080/lekizapteki';
  private DISEASES_PATH = 'diesases';
  private MEDICINES_PATH = 'medicines';
  private IDENTICAL_PATH = 'identical';

  constructor(private httpClient: HttpClient) {}

  getDiseases(): Observable<DiseaseDto[]> {
    const url = UrlBuilder.builder(this.API_URL)
      .addPath(this.DISEASES_PATH)
      .buildUrl();

    return LoggingHttpClientWrapper.get<DiseaseDto[]>(
      this.getDiseases.name,
      this.httpClient,
      url);
  }

  getMedicinesForDisease(diseaseId: string): Observable<MedicineDto[]> {
    const url = UrlBuilder.builder(this.API_URL)
      .addPath(this.MEDICINES_PATH)
      .addParam('diseaseId', diseaseId)
      .buildUrl();

    return LoggingHttpClientWrapper.get<MedicineDto[]>(
      this.getMedicinesForDisease.name,
      this.httpClient,
      url);
  }

  getMedicinesForDiseaseIdenticalToGiven(ean: string, diseaseId: string): Observable<MedicineDto[]> {
    const url = UrlBuilder.builder(this.API_URL)
    .addPath(this.MEDICINES_PATH)
    .addPath(this.IDENTICAL_PATH)
    .addParam('ean', ean)
    .addParam('diseaseId', diseaseId)
    .buildUrl();

    return LoggingHttpClientWrapper.get<MedicineDto[]>(
      this.getMedicinesForDiseaseIdenticalToGiven.name,
      this.httpClient,
      url);
  }
}
