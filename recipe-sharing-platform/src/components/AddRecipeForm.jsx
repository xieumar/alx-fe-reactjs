import React, { useState } from "react";

function AddRecipeForm() {
  const [form, setForm] = useState({
    title: "",
    ingredients: "",
    preparation: "",
  });

  // ✅ Error handling state
  const [errors, setErrors] = useState({});

  // ✅ Validation function
  const validate = () => {
    let newErrors = {};

    if (form.title.trim().length === 0) {
      newErrors.title = "Title is required";
    }
    if (form.ingredients.trim().length === 0) {
      newErrors.ingredients = "Ingredients are required";
    }
    if (form.preparation.trim().length === 0) {
      newErrors.preparation = "Preparation steps are required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // ✅ true if no errors
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) return; // stop if validation fails

    alert("Recipe submitted successfully!");
    console.log(form);

    // ✅ Reset form & errors
    setForm({
      title: "",
      ingredients: "",
      preparation: "",
    });
    setErrors({});
  };

  return (
    <div className="formcontainer flex flex-col p-4 mx-auto w-[500px]">
      <h1 className="text-center">Add recipe form</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <input
          className="w-full h-[48px] px-3 text-white text-sm placeholder:text-white/40 bg-white/5 rounded-sm mb-1"
          placeholder="Recipe title"
          value={form.title}
          onChange={(e) =>
            setForm({
              ...form,
              title: e.target.value,
            })
          }
        />
        {errors.title && <p className="text-red-400 text-xs">{errors.title}</p>}

        <textarea
          className="w-full h-[100px] px-3 text-white text-sm placeholder:text-white/40 bg-white/5 rounded-sm mb-1"
          placeholder="Enter the list of ingredients"
          value={form.ingredients}
          onChange={(e) =>
            setForm({
              ...form,
              ingredients: e.target.value,
            })
          }
        ></textarea>
        {errors.ingredients && (
          <p className="text-red-400 text-xs">{errors.ingredients}</p>
        )}

        <textarea
          className="w-full h-[100px] px-3 text-white text-sm placeholder:text-white/40 bg-white/5 rounded-sm mb-1"
          placeholder="Enter the steps to make the dish"
          value={form.preparation}
          onChange={(e) =>
            setForm({
              ...form,
              preparation: e.target.value,
            })
          }
        ></textarea>
        {errors.preparation && (
          <p className="text-red-400 text-xs">{errors.preparation}</p>
        )}

        <div className="flex gap-2 mt-2">
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-sm hover:bg-blue-600"
          >
            Submit
          </button>
          <button
            type="button"
            className="bg-gray-500 text-white py-2 px-4 rounded-sm hover:bg-gray-600"
            onClick={() => {
              setForm({ title: "", ingredients: "", preparation: "" });
              setErrors({});
            }}
          >
            Reset
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddRecipeForm;
