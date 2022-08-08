import { useEffect, useState } from "react";
import "./Checkbox.css";
import { useDispatch, useSelector } from "react-redux";
import { FetchState } from "../../store/fetchReducer";
import { HttpGetData } from "../../hooks/requests";

function Checkbox() {
  const [checkBox1, setCheckBox1] = useState(false);
  const [checkBox2, setCheckBox2] = useState(false);
  let array: number[] = [];
  const dispatch = useDispatch();
  const searchItems: any = useSelector<FetchState>((state) => state);
  async function getData() {
    dispatch({
      type: "UPDATE_SEARCH",
      payload: {
        ...searchItems,
        loading: true,
        results: [],
      },
    });
    const data = await HttpGetData(
      searchItems.currentPage,
      searchItems.searchWord,
      array
    );
    dispatch({
      type: "UPDATE_SEARCH",
      payload: {
        totalCount: data.pageCount,
        pageSize: data.pageSize,
        siblingCount: 1,
        currentPage: data.currentPage,
        searchText: searchItems.searchWord,
        complianceTypeIds: array,
        loading: false,
        results: data.results,
      },
    });
  }
  useEffect(() => {
    if (checkBox1) {
      array.push(2);
    }
    if (checkBox2) {
      array.push(1);
    }
    if (!checkBox1 && !checkBox2) {
      array = [];
    }

    getData();
  }, [checkBox2, checkBox1]);
  return (
    <div className={"checkBoxes"}>
      <div className={"checkBoxHeading"}>
        <img src={"https://produkter.dk/img/pil.a217864f.svg"} alt="" />
        <p>Filtrer på produkttype</p>
      </div>
      <div className={"filterOptions"}>
        <div className={"checkbox"}>
          <input
            type="checkbox"
            onChange={(e) => {
              setCheckBox1(e.target.checked);
            }}
          />
          <p>Farlige produkter</p>
        </div>
        <div className={"checkbox"}>
          <input
            type="checkbox"
            onChange={(e) => {
              setCheckBox2(e.target.checked);
            }}
          />
          <p>Mangelfulde produkter</p>
        </div>
      </div>
    </div>
  );
}

export default Checkbox;
