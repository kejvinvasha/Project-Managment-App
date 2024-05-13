import { useRef } from "react";
import Input from "./Input";
import Modal from "./Modal";

export default function NewProject({ onCancelProject, onAddProject }) {
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();
  const modal = useRef();

  function handleSave() {
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDueDate = dueDate.current.value;

    if (
      enteredTitle.trim() === "" ||
      enteredDescription.trim() === "" ||
      enteredDueDate.trim() === ""
    ) {
      modal.current.open();
      return;
    }

    onAddProject({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate,
    });
  }

  return (
    <>
      <Modal buttonCaption={"Close"} ref={modal}>
        <h2 className="text-xl font-bold text-stone-600 my-4">Invalid Input</h2>
        <p className="text-stone-600 mb-4">
          Oops ... looks like you forgot to enter a value.
        </p>
        <p className="text-stone-600 mb-4">
          Please make sure you provide a valid value for every input field.
        </p>
      </Modal>
      <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
          <button
            onClick={onCancelProject}
            className="text-stone-800 hover:text-stone-950"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
          >
            Save
          </button>
        </menu>
        <div>
          <Input ref={title} type={"text"} id={"title"} label={"Title"} />
          <p>
            <label
              className="text-sm font-bold uppercase text-stone-500"
              htmlFor="description"
            >
              Description
            </label>
            <textarea
              ref={description}
              className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600"
              type={"text"}
              id={"description"}
            />
          </p>
          <Input ref={dueDate} type={"date"} id={"date"} label={"Due Date"} />
        </div>
      </div>
    </>
  );
}
