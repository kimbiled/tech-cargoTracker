import React from "react";

const CargoTable = ({ cargos, onStatusChange }) => {
  return (
    <div className="table-responsive mb-4">
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th>ID</th>
            <th>Название</th>
            <th>Статус</th>
            <th>Отправление</th>
            <th>Назначение</th>
            <th>Дата отправления</th>
          </tr>
        </thead>
        <tbody>
          {cargos.map((cargo) => (
            <tr key={cargo.id}>
              <td>{cargo.id}</td>
              <td>{cargo.name}</td>
              <td>
                <select
                  className={`form-select ${
                    cargo.status === "Ожидает отправки"
                      ? "bg-warning"
                      : cargo.status === "В пути"
                      ? "bg-primary text-white"
                      : "bg-success text-white"
                  }`}
                  value={cargo.status}
                  onChange={(e) => onStatusChange(cargo.id, e.target.value)}
                >
                  <option>Ожидает отправки</option>
                  <option>В пути</option>
                  <option>Доставлен</option>
                </select>
              </td>
              <td>{cargo.origin}</td>
              <td>{cargo.destination}</td>
              <td>{cargo.departureDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CargoTable;
