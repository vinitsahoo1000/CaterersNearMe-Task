import Caterer from "../models/caterer.model";

class CatererService {
  async getAllCaterers() {
    return await Caterer.find();
  }

  async getCatererById(id: string) {
    return await Caterer.findById(id);
  }

  async createCaterer(data: {
    name: string;
    location: string;
    pricePerPlate: number;
    cuisines: string[];
    rating: number;
  }) {
    return await Caterer.create(data);
  }
}

export default new CatererService();