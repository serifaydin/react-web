import { BaseAPI } from "./BaseAPI";

class OrderAPI extends BaseAPI {
    setOrder = (order) => {
        return this.postMethod("order", order);
    };
}

export const orderAPI = new OrderAPI();
