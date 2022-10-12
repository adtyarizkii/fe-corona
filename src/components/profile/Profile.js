import React, { useContext, useState } from "react";
import patient from "../../assets/dropdown/patient.png";
import doctor from "../../assets/dropdown/doctor.png";
import name from "../../assets/profile/name.png";
import address from "../../assets/profile/address.png";
import email from "../../assets/profile/email.png";
import gender from "../../assets/profile/gender.png";
import phone from "../../assets/profile/phone.png";
import status from "../../assets/profile/status.png";
import { UserContext } from "../../context/userContext";

export default function Profile() {
  const title = "Profile";
  document.title = "Halo Corona | " + title;

  const [state] = useContext(UserContext);

  // console.log(state);

  return (
    <div className="profile-container">
      <div className="profile-card shadow">
        <div className="profile-desc">
          <div className="profile-data">
            <h2>Personal Info</h2>
          </div>
          <div className="profile-data">
            <div className="profile-icon">
              <img src={name} alt="" />
            </div>
            <div className="profile-details">
              <span style={{ fontSize: "18px", fontWeight: "bold" }}>
                {state.user.username}
              </span>
              <span>Username</span>
            </div>
          </div>
          <div className="profile-data">
            <div className="profile-icon">
              <img src={email} alt="" />
            </div>
            <div className="profile-details">
              <span style={{ fontSize: "18px", fontWeight: "bold" }}>
                {state.user.email}
              </span>
              <span>Email</span>
            </div>
          </div>
          <div className="profile-data">
            <div className="profile-icon">
              <img src={status} alt="" />
            </div>
            <div className="profile-details">
              <span style={{ fontSize: "18px", fontWeight: "bold" }}>
                {state.user.listAs}
              </span>
              <span>Status</span>
            </div>
          </div>
          <div className="profile-data">
            <div className="profile-icon">
              <img src={gender} alt="" />
            </div>
            <div className="profile-details">
              <span style={{ fontSize: "18px", fontWeight: "bold" }}>Male</span>
              <span>{state.user.gender}</span>
            </div>
          </div>
          <div className="profile-data">
            <div className="profile-icon">
              <img src={phone} alt="" />
            </div>
            <div className="profile-details">
              <span style={{ fontSize: "18px", fontWeight: "bold" }}>
                {state.user.phone}
              </span>
              <span>Mobile Phone</span>
            </div>
          </div>
          <div className="profile-data">
            <div className="profile-icon">
              <img src={address} alt="" />
            </div>
            <div className="profile-details">
              <span style={{ fontSize: "18px", fontWeight: "bold" }}>
                {state.user.address}
              </span>
              <span>Address</span>
            </div>
          </div>
        </div>
        <div className="profile-img">
          {state.user.listAs == "patient" ? (
            <img src={patient} alt="avatar" className="profile-avatar" />
          ) : (
            <img src={doctor} alt="avatar" className="profile-avatar" />
          )}
          <button className="profile-button">Change Photo Profile</button>
        </div>
      </div>
    </div>
  );
}
