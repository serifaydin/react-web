import Axios from "axios";

export class BaseAPI {
    static baseURL = "http://test-job.webatom.ru";

    constructor() {
        this.instance = Axios.create({
            baseURL: BaseAPI.baseURL,
            headers: {
                "Content-Type": "application/json",
            },
        });
    }

    getMethod = (url) => {
        return this.instance
            .get(url)
            .then((response) => response)
            .catch((err) => err);
    };

    postMethod = (...args) => {
        return this.instance
            .post(...args)
            .then((response) => response)
            .catch((err) => err);
    };
}
