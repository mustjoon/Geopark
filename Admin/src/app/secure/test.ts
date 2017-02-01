import {Component, View, Input} from 'angular2/core';
import {
    RouteConfig, Router, RouteParams, ROUTER_DIRECTIVES
} from 'angular2/router';
import {PersistentRouterOutlet} from './persistent-router-outlet';


@Component({})
@View({
  template: 'product info here'
})
class ProductInfo {
}

@Component({})
@View({
  template: 'buy here'
})
class ProductBuy {
}


@Component({})
@View({
  directives: [...ROUTER_DIRECTIVES, PersistentRouterOutlet],
  template: `
    <div>
      <h2>Product {{pid}}</h2>
      <a [routerLink]="['Info']">Show Info</a>
      <a [routerLink]="['Buy']">Go Buy</a>
      <div>
        <router-outlet></router-outlet>
      </div>
    </div>
  `
})
@RouteConfig([
  {path: '/info', name: 'Info', component: ProductInfo, useAsDefault: true}
  {path: '/buy', name: 'Buy', component: ProductBuy}
])
class Product {
  pid
  constructor(params: RouteParams) {
    this.pid = params.get('pid')
  }
}

@Component({})
@View({
  directives: [...ROUTER_DIRECTIVES],
  template: `
    info about the store
  `
})
class StoreInfo {
}


@Component({
  selector: 'my-app',
  providers: [],
  directives: [...ROUTER_DIRECTIVES, PersistentRouterOutlet] ,
  template: `
    <div>
      <a [routerLink]="['./StoreInfo']">See Store Info</a>
      <a [routerLink]="['./Product', {pid:1}]">See Product 1</a>
      <a [routerLink]="['./Product', {pid:2}]">See Product 2</a>
      <div>
        <persistent-router-outlet></persistent-router-outlet>
      </div>
    </div>
  `
})
@RouteConfig([
  {path: '/', name: 'StoreInfo', component: StoreInfo, useAsDefault: true}
  {path: '/product/:pid/...', name: 'Product', component: Product}
])
export class App {
}