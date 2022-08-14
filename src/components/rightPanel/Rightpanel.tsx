import './RightPanel.css';
import Intro from './Intro';
import Filter from '../filter/Filter'
import Results from '../results/Results';


function RightPanel(){


    return <div className={'rightPanel'}>
        <Intro />
        <div className={'filterMobile'}> <Filter/></div>
        <Results />
        {/* {!searchItems.loading && <Pagination />} */}
    </div>
}

export default RightPanel;