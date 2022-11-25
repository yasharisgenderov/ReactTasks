import React from "react";
import "./SignUp.css";

export default class HospitalForm extends React.Component {
  state = {
    pName: "",
    pId: "",
    pGender: "Kişi",
    pAge: "",
    pMail: "",
    pTel: "",
    pSymbol: "",
    pResReseption: "",
    isActive: false
  };
  handleSumbit = (e) => {
    e.preventDefault();
    alert("Kart qeydiyyatdan keçdi");
    console.log("Xəstənin tam adı: " + this.state.pName);
    console.log("Vəsiqə seriyası və nömrəsi: " + this.state.pId);
    console.log("Cinsi: " + this.state.pGender);
    console.log("Yaş: " + this.state.pAge);
    console.log("Email ünvanı: " + this.state.pMail);
    console.log("Telefon nömrəsi: " + this.state.pTel);
    console.log("Simptomların təsviri: " + this.state.pSymbol);
    console.log("Təkrar qəbul: " + this.state.pResReseption);
  };
  handleChange = (e) => {
    let key = e.target.name;
    let value = e.target.value;
    if (key === "pName") this.setState({ pName: value });
    if (key === "pSerial") this.setState({ pId: value });
    if (key === "pGender") this.setState({ pGender: value });
    if (key === "pAge") this.setState({ pAge: value });
    if (key === "pMail") this.setState({ pMail: value });
    if (key === "pTel") this.setState({ pTel: value });
    if (key === "pSymbol") this.setState({ pSymptom: value });
    if (key === "pResReseption") this.setState({ pResREseption: value });
    if (this.state.pName !== "" && this.state.pId !== "")
      this.setState({ isActive: true });
  };
  render() {
    return (
      <div className="container">
        <div className="register">
          <form className="hospital-register" onSubmit={this.handleSumbit}>
            <label htmlFor="pName">
              Xəstənin tam adı:
              <input
                className="patientName"
                type="text"
                name="pName"
                onChange={this.handleChange}
                required
              />
            </label>
            <label htmlFor="pSerial">
              Vəsiqə seriyası və nömrəsi:
              <input
                className="patientPassId"
                type="number"
                name="pSerial"
                onChange={this.handleChange}
                required
              />
            </label>
            <label htmlFor="pgender">
              Cinsi:
              <select
                name="pGender"
                id="patientGender"
                onChange={this.handleChange}
              >
                <option value="Kişi">Kişi</option>
                <option value="Qadın">Qadın</option>
              </select>
            </label>
            <label htmlFor="pAge">
              Yaş:
              <input
                className="age"
                type="number"
                name="pAge"
                min="0"
                onChange={this.handleChange}
              />
            </label>
            <label htmlFor="pEmail">
              Email ünvanı:
              <input
                className="email"
                type="email"
                name="pMail"
                onChange={this.handleChange}
              />
            </label>
            <label htmlFor="pTel">
              Telefon nömrəsi:
              <input
                className="pTel"
                type="text"
                name="pTel"
                onChange={this.handleChange}
              />
            </label>
            <label htmlFor="pSymptom">
              Simptomların təsviri:
              <textarea
                name="pSymptom"
                id="symptom"
                cols="30"
                rows="10"
                onChange={this.handleChange}
              ></textarea>
            </label>
            <label htmlFor="pResReseption" className="checkbox">
              Təkrar qəbul:
              <input
                className="resReseption"
                type="checkbox"
                name="pResReseption"
                onChange={this.handleChange}
              />
            </label>
            <button className="submit" disabled={!this.state.isActive}>
              Göndər
            </button>
          </form>
        </div>
      </div>
    );
  }
}

