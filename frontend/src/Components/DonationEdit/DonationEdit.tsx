import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import DonationModel from "../../models/donation-model";
import service from "../../services/donation-service";
import "./DonationEdit.css";

function DonationEdit(props: any): JSX.Element {
  const { register, handleSubmit } = useForm<DonationModel>();
  const navigate = useNavigate();

  const onSubmit = async (donation: DonationModel) => {
    donation.id = props.toEdit.id;
    await service.update(donation);
    navigate("/donations");
  };

  return (
    <div className="DonationEdit">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h3>donate here</h3>
        <input
          type="text"
          placeholder="name"
          {...register("name")}
          defaultValue={props.toEdit?.name}
          required
        />
        <input
          type="text"
          placeholder="family name"
          {...register("family")}
          defaultValue={props.toEdit?.family}
          required
        />
        <input
          type="number"
          placeholder="enter amount"
          min="1"
          defaultValue={props.toEdit?.amount}
          {...register("amount", { valueAsNumber: true })}
          required
        />
        <select {...register("payment")} defaultValue={props.toEdit?.payment}>
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

export default DonationEdit;
