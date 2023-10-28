import {AiOutlineStar} from "react-icons/ai"
import {BsThreeDots} from "react-icons/bs"
import {HiOutlineWifi} from "react-icons/hi"
import {TbUserShare} from "react-icons/tb"
import {BsPeopleFill} from "react-icons/bs"
import {BsTrello} from "react-icons/bs"
const Nav2=()=>{
    return (
        <div style={{display:"flex",justifyContent:"space-between",height:"25px",color:"white",padding:"15px",  boxShadow:"0 0 10px black"}}>
            
            <div style={{display:"flex",gap:"30px",height:"25px"}}>
            <button style={{backgroundColor:"#C0C0C0",border:"none", borderRadius:"2px ", padding:"5px"}}><BsTrello/>&nbsp;&nbsp;Board</button>
            <h2 style={{marginTop:"0px"}}>GTM Campaign</h2>
            <button style={{backgroundColor:"#C0C0C0",border:"none", borderRadius:"2px ", padding:"5px"}}><AiOutlineStar/></button>
            <button style={{backgroundColor:"#C0C0C0",border:"none", borderRadius:"2px ", padding:"5px"}}>Marketing</button>
            <button style={{backgroundColor:"#C0C0C0",border:"none", borderRadius:"2px ", padding:"5px"}}><BsPeopleFill/>&nbsp;&nbsp;Workspace visible</button>
            <button style={{backgroundColor:"#C0C0C0",border:"none", borderRadius:"2px ", padding:"5px"}}><TbUserShare/>&nbsp;&nbsp;Share</button>
            </div>
            <div style={{display:"flex",gap:"20px"}}>
            <button style={{backgroundColor:"#C0C0C0",border:"none", borderRadius:"2px ", padding:"5px"}}><HiOutlineWifi/>&nbsp;&nbsp;Filter</button>
            <button style={{backgroundColor:"#C0C0C0",border:"none", borderRadius:"2px ", padding:"5px"}}><BsThreeDots/>&nbsp;&nbsp;Show Menu</button>
            </div>
           
        </div>
    )
}
export {Nav2}