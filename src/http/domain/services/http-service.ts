import { Http } from "../repository/http-repository";

export class HttpService implements Http {

    http: any;
    constructor(http: any) {
        this.http = http;
    }

    get(url: string): Promise<any> {
        return this.http.get(url)
    }

}
