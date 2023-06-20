import Link from "next/link";
import Task from "./task";

export default function TaskPanel({ name, tasks }) {
  return (
    <div className="flex flex-col px-2">
      <p className="my-2">{`${name}(${tasks.length})`}</p>
      {tasks.map((task) => (
        <Link key={task.id} href={`/task/${task.id}`}>
          <div className="mb-2">
            <Task name={task.name}></Task>
          </div>
        </Link>
      ))}
    </div>
  );
}
