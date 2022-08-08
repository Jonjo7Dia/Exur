import './Body.css'
import Filter from '../filter/Filter'
import RightPanel from '../rightPanel/Rightpanel'
function Body(){
    return <div className={'body'}>
        <div className={'backgroundImage'}>
            <img src={'https://produkter.dk/img/baggrund_halvcirkel_top.8208b307.svg'} alt=""/>
        </div>
        <div className={'filterBig'}><Filter /></div>
        
        <RightPanel />
    </div>
}

export default Body;