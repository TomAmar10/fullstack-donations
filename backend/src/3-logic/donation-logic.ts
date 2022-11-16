import execute from "../2-data-access/dal-sqlDB";
import DonationModel from "../1-Models/donation-model";
import { OkPacket } from "mysql";
import errorModel from "../1-Models/error-models";

const getAllDonations = async (): Promise<DonationModel[]> => {
  const sql = `SELECT * FROM donations`;
  const donations = await execute(sql);
  return donations;
};

const getDonation = async (id: number): Promise<DonationModel[]> => {
  const sql = `SELECT * FROM donations WHERE id = ${id}`;
  const donation = await execute(sql);
  return donation;
};

const addDonation = async (donation: DonationModel) => {
  const sql = `
  INSERT INTO donations
  Values (DEFAULT , '${donation.name}', '${donation.family}', ${donation.amount}, '${donation.payment}')
`;
  const result: OkPacket = await execute(sql);
  donation.id = result.insertId;
  return donation;
};

const updateFullDonation = async (donation: DonationModel) => {
  const sql = `UPDATE donations SET name = '${donation.name}', family = '${donation.family}', amount = ${donation.amount}, payment = '${donation.payment}' WHERE id = ${donation.id}`;
  await execute(sql);
  return donation;
};

const updatePartialDonation = async (donation: DonationModel) => {
  const donations = await getAllDonations();
  const prevDonation = donations.find((d) => d.id === donation.id);
  if (!prevDonation) throw new errorModel(404, "donation not found");
  for (const prop in prevDonation) {
    if (donation[prop]) {
      prevDonation[prop] = donation[prop];
    }
  }
  const sql = `UPDATE donations SET name = '${prevDonation.name}', family = '${prevDonation.family}', amount = ${prevDonation.amount}, payment = '${prevDonation.payment}' WHERE id = ${prevDonation.id}`;
  await execute(sql);
  return prevDonation;
};

const deleteDonation = async (id: number) => {
  const sql = `DELETE FROM donations WHERE id = ${id}`;
  await execute(sql);
};

export default {
  getAllDonations,
  addDonation,
  updateFullDonation,
  deleteDonation,
  updatePartialDonation,
  getDonation,
};
