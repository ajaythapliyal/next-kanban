import Sidebar from "@/components/sidebar";

export default function Board({ boards, boardId }) {
  return (
    <main className="px-4 flex">
      <Sidebar
        boards={boards}
        boardId={boardId}
        classes="w-60 border-r border-primary1 h-[calc(100vh-82px)]"
      ></Sidebar>
      <div>i am main</div>
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
