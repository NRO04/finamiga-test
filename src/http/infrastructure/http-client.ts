import axios from "axios";
import { HttpService } from "../domain/services/http-service";

export class HttpClient {
    http: any;
    constructor() {
        this.http = new HttpService(axios);
    }
}