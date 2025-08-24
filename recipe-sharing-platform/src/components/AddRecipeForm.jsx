import React, { useState } from "react";

function AddRecipeForm() {
  const [form, setForm] = useState({
    title: "",
    ingredients: "",
    preparation: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      form.title.trim().length <= 0 ||
      form.ingredients.trim().length <= 0 ||
      form.preparation.trim().length <= 0
    ) {
      alert("You must fill in the fields");
      return;
    }

    alert("Recipe submitted successfully!");
    console.log(form);

    setForm({
  title: "",
  ingredients: "",
  preparation: "",
});

  };
  return (
    <div className="formcontainer flex flex-col p-4 mx-auto w-[500px]">
      <h1 className=" text-center">Add recipe form</h1>
      <form onSubmit={handleSubmit} className=" flex flex-col gap-[20px]">
        <input
          className="w-full h-[30px] p-[10px] text-white text-sm placeholder:text-white/40 bg-white/5 rounded-sm mb-2"
          placeholder="Title"
          value={form.title}
          onChange={(e) => {
            setForm({
              ...form,
              title: e.target.value,
            });
          }}
        />
        <textarea
          className="w-full h-[48px] p-[10px] text-white text-sm placeholder:text-white/40 bg-white/5 rounded-sm mb-2"
          placeholder="Enter the list of ingredients"
          value={form.ingredients}
          onChange={(e) => {
            setForm({
              ...form,
              ingredients: e.target.value,
            });
          }}
        ></textarea>
        <textarea
          className="w-full h-[48px] p-[10px] text-white text-sm placeholder:text-white/40 bg-white/5 rounded-sm mb-2"
          placeholder="Enter the steps to make the dish"
          value={form.preparation}
          onChange={(e) => {
            setForm({
              ...form,
              preparation: e.target.value,
            });
          }}
        ></textarea>
        <button
          type="submit"
          className="w-[30%] mx-auto bg-blue-500 text-white py-[5px] rounded-sm hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default AddRecipeForm;
