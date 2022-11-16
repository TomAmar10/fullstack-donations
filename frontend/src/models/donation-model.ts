class DonationModel {
  public id: number;
  public name: string;
  public family: string;
  public amount: number;
  public payment: string;

  public constructor(donation: DonationModel) {
    this.id = donation.id;
    this.name = donation.name;
    this.family = donation.family;
    this.amount = donation.amount;
    this.payment = donation.payment;
  }
}

export default DonationModel;
