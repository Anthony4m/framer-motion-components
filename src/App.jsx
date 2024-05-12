import {useState} from "react";
import {motion} from "framer-motion";

function App() {
    const [open, setOpen] = useState(false);
  return (

    <div className='wrapper'>
      <motion.div
          onClick={()=>setOpen((s)=>!s)}
          className="element"
          style={open ? {position:"fixed",inset: 0, width: "100%", height: "100%"}
              : { height: 48, width: 48 }
            }
          layout
      >

      </motion.div>
    </div>
  )
}

export default App
