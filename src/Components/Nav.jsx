import {PiDotsNine} from "react-icons/pi"
import {AiFillBell} from "react-icons/ai"
import {RiSuitcase3Fill} from "react-icons/ri"
import {TfiSettings} from "react-icons/tfi"
import {BsTrello} from "react-icons/bs"

const Nav=()=>{
    
    return (
        <div style={{display:"flex",justifyContent:"space-between",height:"20px",color:"white",padding:"15px",  boxShadow:"0 0 10px black"}}>
            <div style={{display:"flex"}}>
            <PiDotsNine/>
            <div style={{display:"flex",gap:"40px", marginTop:"-20px",height:"20px"}}>
           
            <h3 style={{display:"flex",gap:"10px",marginLeft:"10px"}}> <BsTrello/>Trello</h3>
            <p>Workspaces</p>
            <p>Recent</p>
            <p>Starred</p>
            <button style={{backgroundColor:"#C0C0C0",color:"white", padding:"3px 10px 3px 10px",marginTop:"15px"}}>Create</button>
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