export default function Headers({ name }) {
  return (
    <section className="flex justify-between">
      <p>{name}</p>
      <button>+ Add New task</button>
    </section>
  );
}
