import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OralService {

  private uri = '/api/attendance/oralhealthcare/';
  constructor(private http: HttpClient) { }

  getYearAttendance(year: number) {
    return this.http.get(this.uri + 'data/' + year);
  }

  getYearCategoryAttendance(year: number, category: string) {
    return this.http.get(this.uri + 'data/' + year + '/' + category);
  }

  getAvailableCategories(year: number) {
    return this.http.get(this.uri + 'getCategory/' + year);
  }

  getDataSource() {
    return this.http.get(this.uri + 'getCountry');
  }

  getDataSourceValues() {
    return this.http.get(this.uri + 'getCountryValues'+'/'+'data');
  }

  getDataAPI(): Observable<any> {
    const url = "https://data.gov.sg/api/action/datastore_search?resource_id=cf1218e3-a811-4326-ba92-be77759ea129";
    //const url = "https://data.gov.sg/api/action/datastore_search?resource_id=haha";
    return this.http.get<any>(url).pipe(catchError(this.handleError));

  }

  handleError(error: HttpErrorResponse)
  {
    console.log(error);
    return throwError(error);
  }



}
