import Sidebar from "@/components/sidebar";
import Task from "@/components/task";

export default function Board({ boards, boardId, tasks }) {
  return (
    <main className="px-4 flex">
      <Sidebar
        boards={boards}
        boardId={boardId}
        classes="w-60 border-r border-primary1 h-[calc(100vh-82px)]"
      ></Sidebar>
      <div>
        <Task name="abc"></Task>
      </div>
    </main>
  );
}

export async function getServerSideProps({ params }) {
  const [boardsRes, tasksRes] = await Promise.all([
    fetch("http://localhost:3000/boards"),
    fetch("http://localhost:3000/tasks"),
  ]);
  const [boards, tasks] = await Promise.all([
    boardsRes.json(),
    tasksRes.json(),
  ]);
  if (!boards.find((board) => board.id === Number(params.id))) {
    return { notFound: true };
  }
  return {
    props: { boards, boardId: params.id, tasks },
  };
}
