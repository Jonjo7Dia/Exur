import "./Result.css";
import { useEffect, useState } from "react";
interface Props {
  result: any;
}
function Result({ result }: Props) {
  const [imageData, setImageData] = useState("");
  useEffect(() => {
    if (result.productPictures.length > 0) {
      fetch(
        `https://pfp-public-productdb-api.azurewebsites.net/api/picture/${result.productPictures[0].pictureId}`
      )
        .then((response) => response.blob())
        .then((image) => {
          const localUrl = URL.createObjectURL(image);
          setImageData(localUrl);
        });
    } else {
      const localUrl = `https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png`;

      setImageData(localUrl);
    }
  }, []);

  return (
    <div className={"result"}>
      <div className={"resultImage"}>
        <img src={imageData} alt="" />
      </div>
      <div className={"resultName"}>
        <h1>{result.name}</h1>
      </div>
    </div>
  );

  // async const image = await httpGetImage(result.id);
}

export default Result;
