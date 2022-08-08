import './RightPanel.css';
import Intro from './Intro';
import Filter from '../filter/Filter'
import Pagination from '../pagination/Pagination';
import Results from '../results/Results';
import { useSelector } from 'react-redux';
import {  FetchState } from "../../store/fetchReducer";

function RightPanel(){
  const searchItems:any = useSelector<FetchState>((state) => state);

    return <div className={'rightPanel'}>
        <Intro />
        <div className={'filterMobile'}> <Filter/></div>
        <Results />
        {!searchItems.loading && <Pagination />}
    </div>
}

export default RightPanel;