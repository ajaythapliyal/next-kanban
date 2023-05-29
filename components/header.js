import Branding from "./branding";

export default function Headers({ name }) {
  return (
    <section className="flex items-center border border-primary1">
      <Branding></Branding>
      <div className="grow flex justify-around">
        <h2>{name}</h2>
        <button className="p-2 rounded-md bg-primary1">+ Add New task</button>
      </div>
    </section>
  );
}
