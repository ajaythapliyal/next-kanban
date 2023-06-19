import Sidebar from "@/components/sidebar";
import Task from "@/components/task";
import TaskPanel from "@/components/taskPanel";
import { groupBy } from "lodash";

export default function Board({ boards, boardId, tasks }) {
  const board = boards.find((board) => board.id === boardId);

  return (
    <main className="px-4 flex">
      <Sidebar
        boards={boards}
        boardId={boardId}
        classes="w-60 border-r border-primary1 h-[calc(100vh-82px)]"
      ></Sidebar>
      <div className="flex px-2">
        {Object.entries(groupBy(tasks, (task) => task.state)).map(
          ([key, val]) => {
            return (
              <TaskPanel
                key={key}
                name={
                  board.states.find((state) => state.id == Number(key)).name
                }
                tasks={val}
              ></TaskPanel>
            );
          }
        )}
      </div>
    </main>
  );
}

export async function getServerSideProps({ params }) {
  const boardId = Number(params.id);
  const [boardsRes, tasksRes] = await Promise.all([
    fetch("http://localhost:3000/boards"),
    fetch(`http://localhost:3000/tasks?boardID=${boardId}`),
  ]);
  const [boards, tasks] = await Promise.all([
    boardsRes.json(),
    tasksRes.json(),
  ]);
  if (!boards.find((board) => board.id === boardId)) {
    return { notFound: true };
  }
  return {
    props: { boards, boardId, tasks },
  };
}
