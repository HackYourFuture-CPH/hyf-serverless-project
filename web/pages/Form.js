import React from "react";
import { useForm } from "react-hook-form";

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitForm = (formData) => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    };
    fetch(
      "https://o3fp0fun12.execute-api.us-east-1.amazonaws.com/Prod/",
      requestOptions
    )
      .then((res) => res.json())
      .then((res) => console.log(res));
  };

  return (
    <div class="flex min-h-screen bg-gray-50 font-mono">
      <img
        className="shadow-xl h-auto align-left border-none"
        src="/formImage.jpeg"
        alt="form/img"
        width="512"
      />

      <form
        className="w-screen"
        onSubmit={handleSubmit((data) => {
          submitForm(data);
        })}
      >
        <div className="px-4 py-5 bg-gray-50 lg:p-6">
          <h1 className="font-bold mb-6 text-base md:text-lg text-blue-800">
            Fill out the form:
          </h1>
          <div className="grid grid-cols-6 gap-6 w-full">
            <div className="col-span-6 sm:col-span-3 w-full">
              <label
                htmlFor="firstName"
                className="block text-sm font-medium text-gray-700"
              >
                Full Name*
              </label>
              <input
                {...register("fullName", {
                  required: "Required field",
                })}
                type="text"
                name="fullName"
                id="fullName"
                autoComplete="given-name"
                className="placeholder-gray-500 pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
              />
              {errors.fullName && (
                <p className="text-red-500 text-xs">
                  {errors.fullName.message}
                </p>
              )}
            </div>

            <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor="classNr"
                className="block text-sm font-medium text-gray-700"
              >
                Class nr*
              </label>
              <input
                {...register("classNr", {
                  required: "Required field",
                })}
                type="number"
                name="classNr"
                id="classNr"
                autoComplete="classNr"
                className="placeholder-gray-500 pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
              />
              {errors.classNr && (
                <p className="text-red-500 text-xs">{errors.classNr.message}</p>
              )}
            </div>

            <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor="position"
                className="block text-sm font-medium text-gray-700"
              >
                Position*
              </label>
              <input
                {...register("position", {
                  required: "Required field",
                })}
                type="text"
                name="position"
                id="position"
                autoComplete="position"
                className="placeholder-gray-500 pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
              />
              {errors.position && (
                <p className="text-red-500 text-xs">
                  {errors.position.message}
                </p>
              )}
            </div>

            <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor="company"
                className="block text-sm font-medium text-gray-700"
              >
                Company*
              </label>
              <input
                {...register("company", {
                  required: "Required field",
                })}
                type="text"
                name="company"
                id="company"
                autoComplete="company"
                className="placeholder-gray-500 pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
              />
              {errors.company && (
                <p className="text-red-500 text-xs">{errors.company.message}</p>
              )}
            </div>
          </div>

          <div className="col-span-6 sm:col-span-3">
            <label
              htmlFor="aboutJob"
              className="block text-sm font-medium text-gray-700"
            >
              <p className="mt-5"> How did you find about the job position?</p>
              <p>(referral, job post on linkedin, etc)*</p>
            </label>
            <input
              {...register("aboutJob", {
                required: "Required field",
              })}
              type="text"
              name="aboutJob"
              id="aboutJob"
              autoComplete="aboutJob"
              className="placeholder-gray-500 pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
            />
            {errors.aboutJob && (
              <p className="text-red-500 text-xs">{errors.aboutJob.message}</p>
            )}
          </div>

          <div className="col-span-6 sm:col-span-3">
            <label
              htmlFor="linkedin"
              className="block text-sm mt-5 font-medium text-gray-700"
            >
              linkedin Url
            </label>
            <input
              type="text"
              {...register("linkedin", {
                required: "Required field",
              })}
              id="linkedin"
              autoComplete="linkedin"
              className="placeholder-gray-500 pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
            />
            {errors.linkedin && (
              <p className="text-red-500 text-xs">{errors.linkedin.message}</p>
            )}
          </div>

          <div className="col-span-6 sm:col-span-3">
            <label
              htmlFor="github"
              className="block text-sm mt-5 font-medium text-gray-700"
            >
              github Url
            </label>
            <input
              type="text"
              {...register("github", { required: "Required field" })}
              id="github"
              autoComplete="github"
              className="placeholder-gray-500 pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
            />
            {errors.github && (
              <p className="text-red-500 text-xs">{errors.github.message}</p>
            )}
          </div>

          <div className="col-span-6 sm:col-span-3">
            <label
              htmFor="interviewRounds"
              className="block text-sm mt-5 font-medium text-gray-700"
            >
              How many rounds of interviews you had?*
            </label>
            <input
              {...register("interviewRounds", {
                required: "Required field",
              })}
              type="number"
              name="interviewRounds"
              id="interviewRounds"
              autoComplete="interviewRounds"
              className="placeholder-gray-500 pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
            />
            {errors.interviewRounds && (
              <p className="text-red-500 text-xs">
                {errors.interviewRounds.message}
              </p>
            )}
          </div>

          <div className="col-span-6 sm:col-span-3">
            <label
              htmlFor="assignment"
              className="block text-sm mt-5 font-medium text-gray-700"
            >
              Did you have a coding assignment?*
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                className="form-radio"
                {...register("assignment", {
                  required: "Required field",
                })}
                value="yes"
              />
              <span className="ml-2"> Yes</span>
            </label>
            <label className="inline-flex items-center ml-3">
              <input
                type="radio"
                className="form-radio"
                {...register("assignment", {
                  required: "Required field",
                })}
                value="no"
              />
              <span className="ml-2"> No</span>
            </label>
            {errors.assignment && (
              <p className="text-red-500 text-xs">
                {errors.assignment.message}
              </p>
            )}
          </div>

          <div className="col-span-6 sm:col-span-3">
            <label
              htmlFor="comment"
              className="block text-sm mt-5 font-medium text-gray-700"
            >
              Comment
            </label>
            <textarea
              {...register("comment", { required: "Required field" })}
              id="comment"
              autoComplete="comment"
              className="placeholder-gray-500 pt-2 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
            />
            {errors.comment && (
              <p className="text-red-500 text-xs">{errors.comment.message}</p>
            )}
          </div>

          <div className="flex mt-8">
            <div className="lg shadow-xl bg-black md:w-1/1">
              <div className="m-4">
                <label className="inline-block mb-2 text-white">
                  Upload Image(jpg,png,svg,jpeg)
                </label>
                <br />
                <input type="file" name="imageUrl" />
              </div>
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="group relative flex justify-center p-4 mt-8 border border-transparent text-sm font-medium text-white bg-blue-900 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Submit
            </button>
          </div>
          <div>
            <p className="mt-3">*required fields</p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
