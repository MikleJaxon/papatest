import EventList from "./EventList";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center p-6">
      <h1 className="text-4xl text-purple-600 font-bold mb-6">🎉 Афиша тусовок</h1>
      <EventList />
    </div>
  );
}
