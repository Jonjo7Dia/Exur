import "./Checkbox.css";

function Checkbox() {
  return (
    <div className={"checkBoxes"}>
      <div className={"checkBoxHeading"}>
        <img src={"https://produkter.dk/img/pil.a217864f.svg"} alt="" />
        <p>Filtrer på produkttype</p>
      </div>
      <div className={"filterOptions"}>
        <div className={"checkbox"}>
          <input type="checkbox" />
          <p>Farlige produkter</p>
        </div>
        <div className={"checkbox"}>
          <input type="checkbox" />
          <p>Mangelfulde produkter</p>
        </div>
      </div>
    </div>
  );
}

export default Checkbox;
