// tslint:disable:import-spacing
import { Http }                     from '@angular/http';
import { Headers }                  from '@angular/http';
import { Response }                 from '@angular/http';
import { Injectable }               from '@angular/core';
import { RequestOptions }           from '@angular/http';
import { Observable }               from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class DashboardService {

    private API_GET_USER = 'http://localhost:18320/api/users/Workload/inoadanilo';

    constructor(private _http: Http) { }

    private getHeaders() {
        const header = new Headers();
        header.append('Content-Type', 'application/json');
        return header;
    }

    getUser() {
        return this._http.get(this.API_GET_USER)
        .map((res) => {
            return res.json()
        });
    }
}
