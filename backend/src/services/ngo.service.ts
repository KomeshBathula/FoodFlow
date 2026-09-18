import { NGO, INGO } from "../models/NGO.model";

export class NgoService {
  async listNgos(): Promise<INGO[]> {
    return NGO.find().populate("userId", "name email");
  }

  async getNgoById(id: string): Promise<INGO | null> {
    return NGO.findById(id);
  }

  async createNgo(data: any): Promise<INGO> {
    return NGO.create(data);
  }
}

export const ngoService = new NgoService();
