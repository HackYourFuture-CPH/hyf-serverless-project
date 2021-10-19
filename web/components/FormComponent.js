import React from "react";
import FormHeader from "./FormHeader";
import FormItems from "./FormItems";
import FormFooter from "./FormFooter";

const FormComponent = () => {
  return (
    <div className="bg-white">
      <FormHeader />
      <FormItems />
      <FormFooter />
    </div>
  );
};

export default FormComponent;
