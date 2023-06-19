export default function Task({ name }) {
  return (
    <div className="py-6 px-3 bg-primary2 rounded w-44">
      <p className="flex justify-center">{name}</p>
    </div>
  );
}
