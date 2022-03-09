const imageUrl = "https://i.picsum.photos/id/566/200/300.jpg?hmac=gDpaVMLNupk7AufUDLFHttohsJ9-C17P7L-QKsVgUQU";

(async () => {
  const response = await fetch(imageUrl)
  const imageBlob = await response.blob()
  const reader = new FileReader();
  reader.readAsDataURL(imageBlob);
  reader.onloadend = () => {
    const base64data = reader.result;
    console.log(base64data);
  }
})()