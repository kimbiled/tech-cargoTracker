import React, { useState } from "react";

const cities = ["Москва", "Санкт-Петербург", "Казань", "Екатеринбург", "Новосибирск"];


const AddCargo = ({ onAddCargo }) => {
    const [formData, setFormData] = useState({
      name: "",
      origin: "",
      destination: "",
      departureDate: "",
      status: "Ожидает отправки",
    });
  
    const [error, setError] = useState("");
  
    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (
        !formData.name ||
        !formData.origin ||
        !formData.destination ||
        !formData.departureDate
      ) {
        setError("Все поля должны быть заполнены.");
        return;
      }
  
      setError("");
      onAddCargo(formData);
      setFormData({
        name: "",
        origin: "",
        destination: "",
        departureDate: "",
        status: "Ожидает отправки",
      });
    };
  
    return (
        <form onSubmit={handleSubmit} className="p-3 border rounded">
        {error && <div className="alert alert-danger">{error}</div>}
        <div className="row mb-3">
          <div className="col-md-6">
            <label className="form-label">Название груза</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="form-control"
              placeholder="Введите название груза"
            />
          </div>
          <div className="col-md-6">
            <label className="form-label">Дата отправления</label>
            <input
              type="date"
              name="departureDate"
              value={formData.departureDate}
              onChange={handleChange}
              className="form-control"
            />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-md-6">
            <label className="form-label">Пункт отправления</label>
            <select
              name="origin"
              value={formData.origin}
              onChange={handleChange}
              className="form-select"
            >
              <option value="">Выберите пункт отправления</option>
              {cities.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
          </div>
          <div className="col-md-6">
            <label className="form-label">Пункт назначения</label>
            <select
              name="destination"
              value={formData.destination}
              onChange={handleChange}
              className="form-select"
            >
              <option value="">Выберите пункт назначения</option>
              {cities.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
          </div>
        </div>
        <button type="submit" className="btn btn-primary w-100">
          Добавить груз
        </button>
      </form>
           
    );
  };
  
  export default AddCargo;