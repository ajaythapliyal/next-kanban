import Task from "@/components/task";

export default function TaskPage({ task }) {
  return <Task name={task.name}></Task>;
}

export async function getServerSideProps({ params }) {
  const response = await fetch(`http://localhost:3000/tasks/${params.id}`);
  const task = await response.json();
  return { props: { task } };
}
