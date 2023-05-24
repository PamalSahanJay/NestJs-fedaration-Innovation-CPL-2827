import { Injectable } from '@nestjs/common';
import { RESTDataSource } from 'apollo-datasource-rest';

@Injectable()
export class JobService extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = 'https://api.example.com/';
    }
}
