import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Story } from './story';
import { catchError, map } from 'rxjs/operators';

const options = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json'
    })
};

@Injectable()
export class StoryService {

    private path = './assets/files/stories/storiesList.json';

    constructor(private http: HttpClient) { }

    getStoriesList(): Observable<Story[]> {

        let path: string = "";

        path = './assets/files/stories/storiesList.json';
        
        
        return this.http.get<Story[]>(path, options)
                        .pipe(
                            catchError(this.handleError)
                        );
    }

    getStory(idStory: string) {
        let path = './assets/files/stories/' + idStory + '.txt';
        return this.http.get(path, {responseType: 'text'})
                        .pipe(
                            catchError(this.handleError)
                        );
    }

    private handleError(error: HttpErrorResponse | any) {
        let errMsg: string;
        if (error.error instanceof ErrorEvent) {
            let body = error.json() || '';
            let err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }
}