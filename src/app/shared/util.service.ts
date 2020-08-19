import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class CommonUtil {

    generateID(email) {
        return email.split(/[\.\-_]/)[0];
    }
}