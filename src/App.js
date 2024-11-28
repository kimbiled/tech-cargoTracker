import React, { useState } from "react";
import CargoTable from "./components/CargoTable";
import AddCargo from "./components/AddCargo";

const App = () => {
  const [showAddForm, setShowAddForm] = useState(false);
  const [cargos, setCargos] = useState([
    {
      id: "CARGO001",
      name: "Строительные материалы",
      status: "В пути",
      origin: "Москва",
      destination: "Казань",
      departureDate: "2024-11-24",
    },
    {
      id: "CARGO002",
      name: "Хрупкий груз",
      status: "Ожидает отправки",
      origin: "Санкт-Петербург",
      destination: "Екатеринбург",
      departureDate: "2024-11-26",
    },
  ]);

  const [filter, setFilter] = useState("");

  const handleAddCargo = (newCargo) => {
    const newId = `CARGO${String(cargos.length + 1).padStart(3, "0")}`;
    setCargos([...cargos, { ...newCargo, id: newId }]);
  };

  const handleStatusChange = (id, newStatus) => {
    const updatedCargos = cargos.map((cargo) => {
      if (cargo.id === id) {
        if (newStatus === "Доставлен" && new Date(cargo.departureDate) > new Date()) {
          alert("Нельзя изменить статус на 'Доставлен', если дата отправления находится в будущем.");
          return cargo;
        }
        return { ...cargo, status: newStatus };
      }
      return cargo;
    });
    setCargos(updatedCargos);
  };
  

  const filteredCargos =
    filter === ""
      ? cargos
      : cargos.filter((cargo) => cargo.status === filter);

      return (
        <div className="container p-3">
          <h1 className="my-4 text-center">Отслеживание грузов</h1>
      
          {/* Фильтр по статусу */}
          <div className="mb-4">
            <label className="form-label">Фильтр по статусу:</label>
            <select
              className="form-select"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
            >
              <option value="">Все</option>
              <option value="Ожидает отправки">Ожидает отправки</option>
              <option value="В пути">В пути</option>
              <option value="Доставлен">Доставлен</option>
            </select>
          </div>
      
          {/* Кнопка для добавления нового груза */}
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h2>Список грузов</h2>
            <button
              className="btn btn-primary"
              onClick={() => setShowAddForm(!showAddForm)}
            >
              {showAddForm ? "Скрыть форму" : "Добавить новый груз"}
            </button>
          </div>
      
          {/* Форма добавления груза */}
          {showAddForm && (
            <div className="mb-4">
              <AddCargo onAddCargo={handleAddCargo} />
            </div>
          )}
      
          {/* Таблица грузов */}
          <CargoTable cargos={filteredCargos} onStatusChange={handleStatusChange} />
        </div>
      );
      
};

export default App;
