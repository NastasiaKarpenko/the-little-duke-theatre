function ClassItem({ name, description, day, hours }) {
  
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
    <div className="text-xl font-bold mb-2">{name}</div>
    <div className="text-gray-700 mb-4">{description}</div>
    <div className="text-gray-500">{day} at {hours}</div>
  </div>
  );
}

export default ClassItem;


