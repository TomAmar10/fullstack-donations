import axios from "axios";
import DonationModel from "../models/donation-model";

class Service {
  public getAllDonations = async (): Promise<DonationModel[]> => {
    const response = await axios.get("http://localhost:3200/api/donations");
    return response.data;
  };

  public addDonation = async (
    donation: DonationModel
  ): Promise<DonationModel> => {
    const response = await axios.post(
      "http://localhost:3200/api/donations",
      donation
    );
    return response.data;
  };

  public deleteDonation = async (id: number) => {
    await axios.delete("http://localhost:3200/api/donations/id/" + id);
  };

  public update = async (donation: DonationModel) => {
    const response = await axios.put(
      `http://localhost:3200/api/donations/id/${donation.id}`,
      donation
    );
    return response.data;
  };
}

const service = new Service();
export default service;
