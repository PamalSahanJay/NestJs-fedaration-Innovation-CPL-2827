import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class ProductService {

    private token: string;
    private authHeader: string;
    private baseURL: string;

    constructor(private readonly configService: ConfigService) {
        this.token = this.configService.get<string>('TOKEN');
        this.authHeader = this.configService.get<string>('AUTH_HEADER');
        this.baseURL = this.configService.get<string>('BASE_URL');
    }

    async getProducts(id: string) {
        const response = await axios.get(`${this.baseURL}/products/${id}`, {
            headers: {
                [this.authHeader]: this.token,
            },
        });
        return response.data;
    }
}
