async function uploadImage(formData) {
  try {
    const requestOptions = {
      method: "POST",
      headers: {
        accept: "*/*",
        "Content-Type": "multipart/form-data",
      },
      body: formData,
    };

    const results = await fetch("https://bdze0u9nv3.execute-api.us-east-1.amazonaws.com/default/getPresignedURL", requestOptions);
    return results.url;
  } catch (exception) {
    console.log("Error", exception);
  }
}

export default uploadImage;
