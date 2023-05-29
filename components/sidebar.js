import Link from "next/link";

export default function Sidebar({ classes, boards }) {
  return (
    <nav className={`${classes}`}>
      <p>ALL BOARDS ({boards.length})</p>
      {boards.map((board) => (
        <Link key={board.id} href={`/board/${board.id}`}>
          {board.name}
        </Link>
      ))}
    </nav>
  );
}
