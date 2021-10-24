import React, { useState } from "react";
import FileBase from "react-file-base64";
import { useForm } from "react-hook-form";
const FormItems = () => {
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
    fetch("https://o3fp0fun12.execute-api.us-east-1.amazonaws.com/Prod/", requestOptions)
      .then((res) => res.json())
      .then((res) => console.log(res));
  };

  return (
    <div>
      <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 sm:px-6 lg:px-8">
        <div className="flex md:flex rounded-xl p-8 md:p-0 space-x-8">
          <img
            className="shadow-xl rounded max-w-full h-auto align-left border-none"
            src="/formImage.jpg"
            alt="form/img"
            width="512"
          />
          <form
            className="space-y-4 w-full md:w-1/3 rounded-lg items-center"
            onSubmit={handleSubmit((data) => {
              submitForm(data);
            })}
          >
            <h1 className="font-bold mt-2 text-base md:text-lg text-blue-800">
              Fill out the form:
            </h1>

            <div className="grid gap-12">
              <div className="col-span-12">
                <label
                  htmlFor="fullName"
                  className="block text-sm m-2 font-medium text-gray-700"
                >
                  Full Name*
                </label>
                <input
                  type="text"
                  {...register("fullName", { required: "Required field" })}
                  id="fullName"
                  autoComplete="fullName"
                  className="placeholder-gray-500 pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                />
                {errors.fullName && <p>{errors.fullName.message}</p>}
              </div>

              <div className="col-span-12">
                <label
                  htmlFor="classNr"
                  className="block text-sm ml-2 font-medium text-gray-700"
                >
                  Class nr*
                </label>
                <input
                  type="number"
                  {...register("classNr", { required: "Required field" })}
                  id="classNr"
                  autoComplete="classNr"
                  className="placeholder-gray-500 pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                />
                {errors.classNr && <p>{errors.classNr.message}</p>}
              </div>
              <div className="col-span-12">
                <label
                  htmlFor="position"
                  className="block text-sm ml-2 font-medium text-gray-700"
                >
                  Position*
                </label>
                <input
                  type="text"
                  {...register("position", { required: "Required field" })}
                  id="position"
                  autoComplete="position"
                  className="placeholder-gray-500 pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                />
                {errors.position && <p>{errors.position.message}</p>}
              </div>
              <div className="col-span-12">
                <label
                  htmlFor="company"
                  className="block text-sm ml-2 font-medium text-gray-700"
                >
                  Company*
                </label>
                <input
                  type="text"
                  {...register("company", { required: "Required field" })}
                  id="company"
                  autoComplete="company"
                  className="placeholder-gray-500 pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                />
                {errors.company && <p>{errors.company.message}</p>}
              </div>
              <div className="col-span-12">
                <label
                  htmlFor="aboutJob"
                  className="block text-sm ml-2 font-medium text-gray-700"
                >
                  <p> How did you find about the job position?</p>
                  <p>(referral, job post on linkedin, etc)*</p>
                </label>
                <input
                  type="text"
                  {...register("aboutJob", { required: "Required field" })}
                  id="aboutJob"
                  autoComplete="aboutJob"
                  className="placeholder-gray-500 pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                />
                {errors.aboutJob && <p>{errors.aboutJob.message}</p>}
              </div>
              <div className="col-span-12">
                <label
                  htmlFor="interviewRounds"
                  className="block text-sm ml-2 font-medium text-gray-700"
                >
                  How many rounds of interviews you had?*
                </label>
                <input
                  type="number"
                  {...register("interviewRounds", {
                    required: "Required field",
                  })}
                  id="interviewRounds"
                  autoComplete="interviewRounds"
                  className="placeholder-gray-500 pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                />
                {errors.interviewRounds && (
                  <p>{errors.interviewRounds.message}</p>
                )}
              </div>
            </div>

            <div className="col-span-12">
              <label
                htmlFor="assignment"
                className="block text-sm ml-2 font-medium text-gray-700"
              >
                Did you have a coding assignment?*
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  className="form-radio"
                  {...register("assignment", { required: "Required field" })}
                  value="yes"
                />
                <span className="ml-2"> Yes</span>
              </label>
              <label className="inline-flex items-center ml-3">
                <input
                  type="radio"
                  className="form-radio"
                  {...register("assignment", { required: "Required field" })}
                  value="no"
                />
                <span className="ml-2"> No</span>
              </label>
              {errors.assignment && <p>{errors.assignment.message}</p>}
            </div>
            <div className="flex justify-center mt-8">
              <div className="rounded-lg shadow-xl bg-gray-50 lg:w-1/1">
                <div className="m-4">
                  <label className="inline-block mb-2 text-gray-500">
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
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-900 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Submit
              </button>
            </div>
            <div>
              <p className="mb-3">*required fields</p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormItems;
