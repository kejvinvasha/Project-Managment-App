import TaskLogo from "../assets/no-projects.png";

export default function NoProject({ onNewProject }) {
  return (
    <div className="mt-24 text-center w-2/3">
      <img
        className="w-16 h-16 object-contain mx-auto"
        src={TaskLogo}
        alt="Clipboard image"
      />
      <h1 className="text-3xl font-bold text-stone-600 my-4">
        No Project Selected
      </h1>
      <p className="text-stone-600 mb-4">
        Select a project or get started with a new one
      </p>
      <div className="mt-8">
        <button
          onClick={onNewProject}
          className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100"
        >
          Create new project
        </button>
      </div>
    </div>
  );
}
