import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  constructor(private http: HttpClient) {


  }


  //  transformar data de un json
  getPaises() {
    return this.http.get('https://restcountries.eu/rest/v2/lang/es')
      .pipe(
        map((Response: any | undefined) =>
          Response.map((pais: any | undefined) => ({ nombre: pais.name, codigo: pais.alpha3Code })
          )
        )
      );
  }

}

