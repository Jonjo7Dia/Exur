import { useEffect, useState } from "react";
import "./Checkbox.css";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators, State } from "../../store";
import { bindActionCreators } from "redux";


function Checkbox() {


  const dispatch = useDispatch();
  const { setCompliance , setResults, setLoading, emptyCompliance, setCurrentPage} = bindActionCreators(
    actionCreators,
    dispatch
  );
  const filter = useSelector((state: State) => state.fetch);

  const [checkBox1, setCheckBox1] = useState(filter.complianceTypeIds.includes(2));
  const [checkBox2, setCheckBox2] = useState(filter.complianceTypeIds.includes(1));


  function checkboxHandler(){
    setCheckBox1(!checkBox1);
  }
  function checkBoxHandler2(){
    setCheckBox2(!checkBox2);
  }

  useEffect(()=>{
    let array = [];
    if(checkBox1 || checkBox2){
      if(checkBox1){
        array.push(2);
      }
      if(checkBox2){
        array.push(1);
      }
      setCompliance(array);
     
    }
    if(!checkBox2 && checkBox1){
      emptyCompliance();
      
    }
    setCurrentPage(1)
    setResults([]);
    setLoading(true);
  }, [checkBox1,checkBox2]);
  return (
    <div className={"checkBoxes"}>
      <div className={"checkBoxHeading"}>
        <img src={"https://produkter.dk/img/pil.a217864f.svg"} alt="" />
        <p>Filtrer på produkttype</p>
      </div>
      <div className={"filterOptions"}>
        <div className={"checkbox"}>
          <input type="checkbox"  onClick={checkboxHandler}/>
          <p>Farlige produkter</p>
        </div>
        <div className={"checkbox"}>
          <input type="checkbox" onClick={checkBoxHandler2}/>
          <p>Mangelfulde produkter</p>
        </div>
      </div>
    </div>
  );
}

export default Checkbox;
