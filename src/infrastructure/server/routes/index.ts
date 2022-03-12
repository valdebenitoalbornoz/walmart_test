import Router from 'koa-router'
import {pingRouteController} from './controllers/ping'
import { productFinderController } from './controllers/ProductFinderController'



export function loadRoutes(router: Router) {
  router.get('/ping', pingRouteController)
  
  router.get('/products', productFinderController)

  return router
}
