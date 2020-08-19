export class User {
    constructor(
        public email: string,
        public id: string,
        private _token: string,
        private _tokeExpirationDate: Date) {}

        get token() {
            if (!this._tokeExpirationDate || new Date() > this._tokeExpirationDate) {
                return null;
            } else {
                 return this._token;
            }
         
        }

        get tokeExpirationDate() {
            return this._tokeExpirationDate;
        }
 }