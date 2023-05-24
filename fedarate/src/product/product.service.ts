import { Injectable } from '@nestjs/common';
import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';

@Injectable()
export class ProductService extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = 'http://ctpm-product-api-qa.aws.wiley.com:8080/v1';
    }

    // overide existing method
    willSendRequest(request: RequestOptions) {
        request.headers.set('WPP-AUTH-TOKEN', 'YjQi');
    }

    async getProducts(id: string) {
        return this.get(`products/${id}`);
    }
}
