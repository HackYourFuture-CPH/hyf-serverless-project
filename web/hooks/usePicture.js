import axios from 'axios'

//TODO: Switch to correct API
const baseUrl = "https://45ehg1xwbi.execute-api.us-east-1.amazonaws.com"

const getBinaryDataFromFile = async (file) => {
  let binary = atob(file.split(',')[1])
  let array = []
  for (var i = 0; i < binary.length; i++) {
    array.push(binary.charCodeAt(i))
  }

  let blobData = new Blob([new Uint8Array(array)], { type: 'image/*' })

  return blobData
}


async function uploadImage(file) {
  // 1: get the presigned url from the api 
  const data = await axios.get(`${baseUrl}/uploads`).data
  const { Key, uploadUrl } = data

  // 2: upload data to the url through a PUT call  
  const blobData = getBinaryDataFromFile(file)

  await axios.put(uploadUrl, blobData, {
    headers: { "Content-Type": "image/*" }
  })

  return `${uploadUrl}/${Key}`
}

export default uploadImage;
