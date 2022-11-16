import "./DonationsList.css";
import { useEffect, useState } from "react";
import DonationModel from "../../models/donation-model";
import service from "../../services/donation-service";
import { NavLink, useNavigate } from "react-router-dom";
import { Server } from "http";

function DonationsList(props: any): JSX.Element {
  const [donations, setDonations] = useState<DonationModel[]>();
  const navigate = useNavigate();

  useEffect(() => {
    service
      .getAllDonations()
      .then((response) => setDonations(response))
      .catch((err) => alert(err.message));
  }, [donations]);

  const deleteDonation = async (id: number) => {
    service.deleteDonation(id);
  };

  const editClick = async (donation: DonationModel) => {
    props.onEditClick(donation);
    navigate("/donations/edit");
  };

  return (
    <div className="DonationsList">
      <div>
        <table>
          <thead>
            <tr>
              <th>id</th>
              <th>name</th>
              <th>family</th>
              <th>amount</th>
              <th>payment</th>
              <th>edit</th>
              <th>delete</th>
            </tr>
          </thead>
          <tbody>
            {donations?.map((d) => (
              <tr key={d.id}>
                <td>{d.id}</td>
                <td>{d.name}</td>
                <td>{d.family}</td>
                <td>{d.amount}</td>
                <td>{d.payment}</td>
                <td onClick={() => editClick(d)}>✍️</td>
                <td onClick={() => deleteDonation(d.id)}>❌</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default DonationsList;
