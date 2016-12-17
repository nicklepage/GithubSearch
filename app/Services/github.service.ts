import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService{
    private username:string;
    private client_id = '063fadf82f7f636e4524';
    private client_secret = 'b531cece2e8adf2cf919a3cd90742046f1550c48';

    constructor(private _http: Http){
        console.log('Github service ready');
        this.username = 'nicklepage';
    }

    getUser(){
        return this._http.get('http://api.github.com/users/' + this.username + '?client_id=' + this.client_id + '&client_secret='+this.client_secret)
            .map(res=>res.json());
    }

    getRepos(){
        return this._http.get('http://api.github.com/users/' + this.username + '/repos?client_id=' + this.client_id + '&client_secret='+this.client_secret)
            .map(res=>res.json());
    }

    updateUser(username:string){
        this.username = username; 
    }
}