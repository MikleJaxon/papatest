import { useEffect, useState } from "react";
import axios from "axios";

export default function EventList() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8081/events")
      .then(res => setEvents(res.data))
      .catch(err => console.error("Ошибка загрузки событий:", err));
  }, []);

  return (
    <div className="flex flex-col gap-4">
      {events.length === 0 ? (
        <p className="text-gray-400">Загрузка событий...</p>
      ) : (
        events.map(event => (
          <div key={event.ID} className="border p-4 rounded shadow bg-white">
            <h2 className="text-xl font-bold text-purple-600">{event.Title}</h2>
            <p className="text-gray-600">{event.City}</p>
            <p className="text-sm text-gray-500">{new Date(event.StartsAt).toLocaleString()}</p>
            <p className="text-green-600 font-semibold">{event.Price} ₽</p>
          </div>
        ))
      )}
    </div>
  );
}
