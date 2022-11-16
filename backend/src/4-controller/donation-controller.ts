import { Router, Request, Response, NextFunction } from "express";
import DonationModel from "../1-Models/donation-model";
import logic from "../3-logic/donation-logic";

const router = Router();

router.get(
  "/api/donations",
  async (request: Request, response: Response, next: NextFunction) => {
    try {
      const donations = await logic.getAllDonations();
      response.status(200).json(donations);
    } catch (err) {
      next(err);
    }
  }
);

router.get(
  "/api/donations/id/:id",
  async (request: Request, response: Response, next: NextFunction) => {
    try {
      const id = +request.params.id;
      const donation = await logic.getDonation(id);
      response.status(200).json(donation);
    } catch (err) {
      next(err);
    }
  }
);

router.post(
  "/api/donations",
  async (request: Request, response: Response, next: NextFunction) => {
    try {
      const addedDonation = await logic.addDonation(request.body);
      response.status(201).json(addedDonation);
    } catch (err) {
      next(err);
    }
  }
);

router.delete(
  "/api/donations/id/:id",
  async (request: Request, response: Response, next: NextFunction) => {
    try {
      const id = +request.params.id;
      await logic.deleteDonation(id);
      response.sendStatus(204);
    } catch (err) {
      next(err);
    }
  }
);

router.put(
  "/api/donations/id/:id",
  async (request: Request, response: Response, next: NextFunction) => {
    try {
      request.body.id = +request.params.id;
      const donation = new DonationModel(request.body);
      console.log(donation);
      const newDonation = await logic.updateFullDonation(donation);
      response.status(200).json(newDonation);
    } catch (err) {
      next(err);
    }
  }
);

router.patch(
  "/api/donations/id/:id",
  async (request: Request, response: Response, next: NextFunction) => {
    try {
      request.body.id = +request.params.id;
      const donation = new DonationModel(request.body);
      const newDonation = await logic.updatePartialDonation(donation);
      response.status(200).json(newDonation);
    } catch (err) {
      next(err);
    }
  }
);

export default router;
