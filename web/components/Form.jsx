import React, { useState } from "react";
import { useForm } from "react-hook-form";
import usePersons from "../hooks/usePersons";
import Link from "next/link";
import uploadImage from "../hooks/usePicture";

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { postPerson, success, error } = usePersons();
  const [imageUrl, setImageUrl] = useState("");

  const uploadFile = async (event) => {
    const imageUrlUploaded = await uploadImage(event.target.files[0]);
    setImageUrl(imageUrlUploaded);
  };

  if (success) {
    return (
      <div className="w-full md:w-3/5 px-6 py-10 bg-gray-100 flex flex-col justify-center">
        <h1 className="font-bold mb-6 text-3xl text-blue-800">Thank you!</h1>
        <h2 className="mb-6 text-xl text-gray-900">
          The form was successfully submitted.
        </h2>
        <Link href="/">
          <span className="text-xl text-gray-900 underline">
            Go to homepage
          </span>
        </Link>
      </div>
    );
  } else if (error) {
    return (
      <div className="w-full md:w-3/5 px-6 py-10 bg-gray-100 flex flex-col justify-center">
        <h1 className="font-bold mb-6 text-3xl text-red-600">
          An error happened
        </h1>
        <h2 className="mb-6 text-xl text-red-500">{error}</h2>
        <Link href="/share-story">
          <span className="text-xl text-gray-900 underline">Try again</span>
        </Link>
      </div>
    );
  } else {
    return (
      <form
        className="w-full md:w-3/5 pt-12"
        onSubmit={handleSubmit((data) => {
          const dataWithImage = { imageUrl, ...data };
          postPerson(dataWithImage);
        })}
      >
        <div className="px-4 py-5 bg-gray-100 lg:p-6">
<<<<<<< HEAD:web/components/Form.jsx
          <h1 className="font-bold mb-6 mt-3 text-xl text-blue-800">
=======
          <h1 className="font-bold mb-6 text-xl text-blue-800">
            {imageUrl && <img src={imageUrl} alt="Profile picture" />}
>>>>>>> 8ac6956 (Create initial solution of image uploading):web/components/Form.js
            Fill out the form:
          </h1>
          <div className="grid grid-cols-6 gap-6 w-full">
            <div className="col-span-6 sm:col-span-3 w-full">
              <label
                htmlFor="fullname"
                className="block text-sm font-medium text-gray-500"
              >
                Full Name*
              </label>
              <input
                {...register("fullname", {
                  required: "Required field",
                })}
                type="text"
                name="fullname"
                id="fullname"
                autoComplete="given-name"
                className="placeholder-gray-500 pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
              />
              {errors.fullname && (
                <p className="text-red-500 text-xs">
                  {errors.fullname.message}
                </p>
              )}
            </div>
            <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor="classNr"
                className="block text-sm font-medium text-gray-500"
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
                className="block text-sm font-medium text-gray-500"
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
                className="block text-sm font-medium text-gray-500"
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
              className="block text-sm font-medium text-gray-500"
            >
              <p className="mt-5"> How did you find about the job position?*</p>
              <p>(referral, job post on LinkedIn, etc)</p>
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
              htmlFor="linkedIn"
              className="block text-sm mt-5 font-medium text-gray-500"
            >
              LinkedIn url*
            </label>
            <input
              type="text"
              {...register("linkedIn", {
                required: "Required field",
              })}
              id="linkedIn"
              autoComplete="linkedIn"
              className="placeholder-gray-500 pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
            />
            {errors.linkedIn && (
              <p className="text-red-500 text-xs">{errors.linkedIn.message}</p>
            )}
          </div>
          <div className="col-span-6 sm:col-span-3">
            <label
              htmlFor="github"
              className="block text-sm mt-5 font-medium text-gray-500"
            >
              Github url*
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
              htmlFor="interviewRounds"
              className="block text-sm mt-5 font-medium text-gray-500"
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
              className="block text-sm my-5 font-medium text-gray-500"
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
              className="block text-sm mt-5 font-medium text-gray-500"
            >
              Comment*
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
            <div className="lg shadow-xl bg-black text-white w-full text-white text-sm">
              <div className="m-4">
                <label className="inline-block mb-2">
                  Upload Image(jpg,png,svg,jpeg)*
                </label>
                <br />
                <input
                  type="file"
                  {...register("imageUrl", { required: "Required field" })}
                  onChange={uploadFile}
                />
                {errors.imageUrl && (
                  <p className="text-red-500 text-xs">
                    {errors.imageUrl.message}
                  </p>
                )}
              </div>
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="group relative flex justify-center py-4 px-8 mt-8 border border-transparent text-sm font-medium text-white bg-blue-900 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 uppercase"
            >
              Submit
            </button>
          </div>
          <div>
            <p className="mt-3 text-sm">*required fields</p>
          </div>
        </div>
      </form>
    );
  }
}
