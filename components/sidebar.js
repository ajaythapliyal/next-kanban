import Link from "next/link";

export default function Sidebar({ classes, boards, boardId }) {
  return (
    <nav className={`${classes || ""} pr-3`}>
      <h2 className="my-5">ALL BOARDS ({boards.length})</h2>
      <div className="flex flex-col">
        {boards.map((board) => (
          <Link
            key={board.id}
            href={`/board/${board.id}`}
            className={`my-2 ${
              Number(boardId) === board.id ? "bg-primary2" : ""
            }`}
          >
            {board.name}
          </Link>
        ))}
      </div>
    </nav>
  );
}
