import { BaseAPI } from "./BaseAPI";

class MoleculeAPI extends BaseAPI {
    getMolecules = () => {
        return this.getMethod("/molecules");
    };

    getMolecule = (id) => {
        return this.getMethod("/molecule/" + id);
    };
}

export const moleculeAPI = new MoleculeAPI();
