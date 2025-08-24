import React, { useState } from "react";

function AddRecipeForm() {
  const [form, setForm] = useState({
    title: "",
    ingredients: "",
    preparation: "",
  });

  const [errors, setErrors] = useState({});

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
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    alert("Recipe submitted successfully!");
    console.log(form);

    setForm({ title: "", ingredients: "", preparation: "" });
    setErrors({});
  };

  return (
    <div className="formcontainer flex flex-col p-4 mx-auto w-full max-w-lg shadow-md rounded-lg bg-white/5">
      <h1 className="text-center text-xl md:text-2xl font-bold mb-4 text-white">
        Add Recipe Form
      </h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        {/* Title input */}
        <input
          className={`w-full h-[48px] px-3 text-white text-sm placeholder:text-white/40 bg-white/10 rounded-md shadow ${
            errors.title ? "border border-red-500" : ""
          }`}
          placeholder="Recipe title"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
        />
        {errors.title && (
          <p className="text-red-400 text-xs font-medium">{errors.title}</p>
        )}

        {/* Ingredients */}
        <textarea
          className={`w-full h-[120px] px-3 py-2 text-white text-sm placeholder:text-white/40 bg-white/10 rounded-md shadow resize-none ${
            errors.ingredients ? "border border-red-500" : ""
          }`}
          placeholder="Enter the list of ingredients"
          value={form.ingredients}
          onChange={(e) => setForm({ ...form, ingredients: e.target.value })}
        ></textarea>
        {errors.ingredients && (
          <p className="text-red-400 text-xs font-medium">{errors.ingredients}</p>
        )}

        {/* Preparation */}
        <textarea
          className={`w-full h-[120px] px-3 py-2 text-white text-sm placeholder:text-white/40 bg-white/10 rounded-md shadow resize-none ${
            errors.preparation ? "border border-red-500" : ""
          }`}
          placeholder="Enter the steps to make the dish"
          value={form.preparation}
          onChange={(e) => setForm({ ...form, preparation: e.target.value })}
        ></textarea>
        {errors.preparation && (
          <p className="text-red-400 text-xs font-medium">
            {errors.preparation}
          </p>
        )}

        {/* Buttons */}
        <div className="flex flex-col md:flex-row gap-3 mt-2">
          <button
            type="submit"
            className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-md shadow hover:bg-blue-600 transition"
          >
            Submit
          </button>
          <button
            type="button"
            className="bg-gray-500 text-white font-semibold py-2 px-4 rounded-md shadow hover:bg-gray-600 transition"
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
