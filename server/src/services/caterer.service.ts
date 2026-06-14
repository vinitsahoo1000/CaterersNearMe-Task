import Caterer from "../models/caterer.model";

class CatererService {
  async getAllCaterers(
    page: number = 1,
    limit: number = 10
  ) {
    const skip = (page - 1) * limit;

    const [caterers, total] = await Promise.all([
      Caterer.find()
        .skip(skip)
        .limit(limit),
      Caterer.countDocuments(),
    ]);

    return {
      data: caterers,
      pagination: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
      },
    };
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