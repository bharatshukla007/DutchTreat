import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ProductList } from './shop/productList.component';
import { DataService } from './shared/dataService';
import { HttpClientModule } from '@angular/common/http';
import { Cart } from './shop/cart.component';


@NgModule({
    declarations: [
        ProductList,
        AppComponent,
        Cart
    ],
    imports: [
        BrowserModule,
        HttpClientModule
    ],
    providers: [
        DataService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
