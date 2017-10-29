import { baseURL } from './baseUrl';

export function RestangularConfigFactory(RestangularProvider) {
    console.log(baseURL);
    RestangularProvider.setBaseUrl(baseURL);
}