import Task from "./task";

export default function TaskPanel({ name, tasks }) {
  return (
    <div className="flex flex-col">
      <p className="my-2">{name}</p>
      {tasks.maps((task) => (
        <div className="mb-2">
          <Task key={task.id} name={task.name}></Task>
        </div>
      ))}
    </div>
  );
}
