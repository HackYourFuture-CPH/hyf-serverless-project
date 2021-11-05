import axios from "axios";

//todo: Switch to correct API
const baseUrl = "https://45ehg1xwbi.execute-api.us-east-1.amazonaws.com";

const createImageFromFile = (e) => {
  let reader = new FileReader();
  reader.onload = (e) => {
    setImageBinary(e.target.result);
  };

  const file = e.target.files[0];
  reader.readAsDataURL(file);
};

const getBinaryDataFromFile = async (file) => {
  console.log(file)
  let binary = atob(file.split(",")[1]);
  let array = [];
  for (var i = 0; i < binary.length; i++) {
    array.push(binary.charCodeAt(i));
  }

  let blobData = new Blob([new Uint8Array(array)], { type: "image/*" });
  return blobData;
};

async function uploadImage(e) {
  const file = createImageFromFile(e);
  getBinaryDataFromFile(file);

  // 1: get the presigned url from the api
  const data = await axios.get(`${baseUrl}/uploads`);
  const { Key, uploadURL } = data.data;
  // 2: upload data to the url through a PUT call
  const blobData = getBinaryDataFromFile(file);

  await axios.put(uploadURL, blobData, {
    headers: { "Content-Type": "image/*" },
  });

  return `${uploadURL}/${Key}`;
}

export default uploadImage;
