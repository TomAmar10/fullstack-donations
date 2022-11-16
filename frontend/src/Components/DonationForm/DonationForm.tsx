import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import DonationModel from "../../models/donation-model";
import service from "../../services/donation-service";
import "./DonationForm.css";

function DonationForm(): JSX.Element {
  const { register, handleSubmit } = useForm<DonationModel>();
  const navigate = useNavigate();

  const onSubmit = async (donation: DonationModel) => {
    await service.addDonation(donation);
    navigate("/donations");
  };

  return (
    <div className="DonationForm">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h3>donate here</h3>
        <input type="text" placeholder="name" {...register("name")} required />
        <input
          type="text"
          placeholder="family name"
          {...register("family")}
          required
        />
        <input
          type="number"
          placeholder="enter amount"
          min="1"
          {...register("amount", { valueAsNumber: true })}
          required
        />
        <select {...register("payment")}>
          <option value="paypal">paypal</option>
          <option value="cash">cash</option>
          <option value="creditCard">creditCard</option>
        </select>
        <div>
          <div>
            <button className="submit-btn" type="submit">
              submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default DonationForm;
