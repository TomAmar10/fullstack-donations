import { Component } from "react";
import "./Main.css";
import DonationForm from "../DonationForm/DonationForm";
import { NavLink } from "react-router-dom";
import DonationsList from "../DonationsList/DonationsList";
import { Route, Routes } from "react-router-dom";
import DonationModel from "../../models/donation-model";
import DonationEdit from "../DonationEdit/DonationEdit";

interface DonationState {
  donation: DonationModel;
}

class Main extends Component<{}, DonationState> {
  public constructor(props: {}) {
    super(props);
    this.state = {
      donation: { id: 0, name: "", family: "", amount: 0, payment: "" },
    };
  }

  public render(): JSX.Element {
    const updateDonation = (donation: DonationModel) => {
      this.setState({ donation });
    };

    return (
      <div className="Main">
        <div className="top-buttons">
          <span>
            <NavLink
              to={"/donations/add"}
              className="navLink"
              onClick={() =>
                updateDonation({
                  id: 0,
                  name: "",
                  family: "",
                  amount: 0,
                  payment: "",
                })
              }
            >
              i want to donate
            </NavLink>
          </span>
          <span>
            <NavLink to={"/donations"} className="navLink">
              see all donations
            </NavLink>
          </span>
        </div>
        <Routes>
          <Route
            path="/donations"
            element={<DonationsList onEditClick={updateDonation} />}
          />
          <Route path="/" element={<DonationsList />} />
          <Route path="/donations/add" element={<DonationForm />} />
          <Route
            path="/donations/edit"
            element={<DonationEdit toEdit={this.state.donation} />}
          />
        </Routes>
      </div>
    );
  }
}

export default Main;
