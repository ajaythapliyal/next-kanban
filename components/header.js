import Branding from "./branding";

export default function Headers() {
  return (
    <header className="flex items-center border border-primary1">
      <Branding></Branding>
      <div className="grow flex flex-row-reverse mr-4">
        <button className="p-2 rounded-md bg-primary1">+ Add New task</button>
      </div>
    </header>
  );
}
