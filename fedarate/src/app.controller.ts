import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ProductService } from './product/product.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private productService: ProductService) {}

  @Get()
  async getHello() {
    let id : string = '0054bc80-6fea-4351-8dce-12e660972829'
    const data = await this.productService.getProducts(id);
    console.log(data)
    return this.appService.getHello();
  }
}
