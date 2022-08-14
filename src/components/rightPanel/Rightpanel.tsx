import './RightPanel.css';
import Intro from './Intro';
import Filter from '../filter/Filter'
import Results from '../results/Results';
import { useSelector } from 'react-redux';
import Pagination from '../pagination/Pagination';
import { State } from "../../store";


function RightPanel(){
  const results = useSelector((state: State) => state.results);
  
    return <div className={'rightPanel'}>
        <Intro />
        <div className={'filterMobile'}> <Filter/></div>
        <Results />
        {!results.loading && <Pagination />}
    </div>
}

export default RightPanel;