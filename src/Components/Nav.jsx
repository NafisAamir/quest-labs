import {PiDotsNine} from "react-icons/Pi"
import {AiFillBell} from "react-icons/ai"
import {RiSuitcase3Fill} from "react-icons/ri"
import {TfiSettings} from "react-icons/tfi"

const Nav=()=>{
    
    return (
        <div style={{display:"flex",justifyContent:"space-between",height:"20px",color:"white",padding:"15px",  boxShadow:"0 0 10px black"}}>
            <div style={{display:"flex"}}>
            <PiDotsNine/>
            <div style={{display:"flex",gap:"40px", marginTop:"-20px",height:"20px"}}>
            <h3>Trello</h3>
            <p>Workspaces</p>
            <p>Recent</p>
            <p>Starred</p>
            <button style={{backgroundColor:"gray",color:"white", padding:"3px 10px 3px 10px",marginTop:"15px"}}>Create</button>
            </div>
            </div>
            <div style={{display:"flex",justifyContent:"flex-end",gap:"30px"}}>
           
            <input style={{padding:"10px"}}type="text" placeholder="Search" />
           
            <AiFillBell/>
            <RiSuitcase3Fill/>
            <TfiSettings/>
            </div>
        </div>
       
    )
}
export {Nav}