import { BaseAPI } from "./BaseAPI";

class SaladAPI extends BaseAPI {
    getSalads = () => {
        return this.getMethod("/salads");
    };

    getSalad = (id) => {
        return this.getMethod("/salad/" + id);
    };
}

export const saladAPI = new SaladAPI();
