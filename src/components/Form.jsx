import React from "react";
import "./Form.css";

export default class App extends React.Component {
  state = {
    name: "",
    lastName: "",
    fatherName: "",
    adress: "",
    phoneNumber: "",
    isTrue: false
  };
  valueText = (e) => {
    if (e.target.name === "name") {
      this.setState({ name: e.target.value });
    }
    if (e.target.name === "lastName") {
      this.setState({ lastName: e.target.value });
    }
    if (e.target.name === "Ata adı") {
      this.setState({ fatherName: e.target.value });
    }
    if (e.target.name === "Ünvan") {
      this.setState({ adress: e.target.value });
    }
    if (e.target.name === "Telefon nömrəsi") {
      this.setState({ phoneNumber: e.target.value });
    }
    if (
      this.state.name !== "" &&
      this.state.lastName !== "" &&
      this.state.fatherName !== "" &&
      this.state.phoneNumber !== "" &&
      this.state.adress !== ""
    ) {
      this.setState({ isTrue: true });
    } else {
      this.setState({ isTrue: false });
    }
  };

  handleSubmit = (e) => {
    alert("Mesajınız qəbul edildi");
    e.preventDefault();
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            <input
              value={this.state.name}
              onChange={this.valueText}
              name="name"
              placeholder="Ad"
              required
            />
          </label>
          <label>
            <input
              value={this.state.lastName}
              onChange={this.valueText}
              name="lastName"
              placeholder="Soyad"
              required
            />
          </label>
          <label>
            <input
              value={this.state.fatherName}
              onChange={this.valueText}
              name="Ata adı"
              placeholder="Ata adı"
              required
            />
          </label>
          <label>
            <input
              value={this.state.adress}
              onChange={this.valueText}
              name="Ünvan"
              placeholder="Ünvan"
              required
            />
          </label>
          <label>
            <input
              value={this.state.phoneNumber}
              type="number"
              onChange={this.valueText}
              name="Telefon nömrəsi"
              placeholder="Telefon nömrəsi"
              required
            />
          </label>
          <button  className="Form-btn" disabled={!this.state.isTrue}>Formu göndərin</button>
        </form>
      </div>
    );
  }
}
