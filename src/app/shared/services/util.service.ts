import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient, HttpParams } from '@angular/common/http';
@Injectable({
    providedIn: 'root'
})
export class CommonUtil {
    particleJSUrl = 'assets/particlesjs-config.json';
    constructor(private http: HttpClient) {};
    generateID(email) {
        return email.split(/[\.\-_]/)[0];
    }

    readLocalJsonFile() {
        return this.http.get(this.particleJSUrl);
    }
}