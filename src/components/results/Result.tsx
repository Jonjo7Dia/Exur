import "./Result.css";
import { useEffect, useState } from "react";
interface Props {
  result: any;
}
 function Result({ result }: Props) {

    const [imageData, setImageData] = useState('');
useEffect(() =>{
    fetch(`https://pfp-public-productdb-api.azurewebsites.net/api/picture/${result.productPictures[0].pictureId}`)
        .then(response => response.blob())
        .then(image => {
            const localUrl = URL.createObjectURL(image);
            setImageData(localUrl);
        });
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
