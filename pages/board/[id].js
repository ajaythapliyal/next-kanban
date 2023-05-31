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
  const responseJson = await response.json();
  return { props: { boards: responseJson, boardId: params.id } };
}
