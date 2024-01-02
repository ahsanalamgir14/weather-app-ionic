import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'

})

export class HomeService {

	constructor(public: HttpClient) { }
    dearch() {
        return this.http.get(url 'https://restcountries.com/v3.1/all')
    }
}