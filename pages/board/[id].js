import Sidebar from "@/components/sidebar";

export default function Board({ boards, boardId }) {
  return (
    <main className="px-4">
      <Sidebar boards={boards} boardId={boardId}></Sidebar>
    </main>
  );
}

export async function getServerSideProps({ params }) {
  const response = await fetch("http://localhost:3000/boards");
  const boards = await response.json();
  if (!boards.find((board) => board.id === Number(params.id))) {
    return { notFound: true };
  }
  return { props: { boards, boardId: params.id } };
}
