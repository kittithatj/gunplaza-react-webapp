import './style/AppPost.css';
import { motion, AnimatePresence } from "framer-motion"
import { useState } from 'react';
import * as postMotion from './motion/post-motion'


function AppPost(props) {
    const { gunpla, closeItem } = props
    const [open, setOpen] = useState(true);
    return (
        <AnimatePresence>
            {open &&
                <motion.div
                    className="app-post"
                    initial={postMotion.appPostMotion.initial} animate={postMotion.appPostMotion.animate} exit={postMotion.appPostMotion.exit}
                >
                    <div className="post-backdrop" onClick={() => { setOpen(false); setTimeout(closeItem, 300) }} />
                    <motion.div
                        className="post-content"
                        initial={postMotion.postContentMotion.initial} animate={postMotion.postContentMotion.animate} exit={postMotion.postContentMotion.exit}
                    >
                        <motion.div className='content-main'
                            initial={postMotion.postMainMotion.initial} animate={postMotion.postMainMotion.animate} exit={postMotion.postMainMotion.exit}postMainMotion
                        >
                            <h3>{gunpla.name}</h3>
                            <p className='desciption'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{gunpla.des}</p>
                        </motion.div>

                        <motion.img src={gunpla.image}
                            initial={postMotion.postImageMotion.initial} animate={postMotion.postImageMotion.animate} exit={postMotion.postImageMotion.exit}
                        />
                    </motion.div>
                </motion.div>
            }
        </AnimatePresence>
    )
}

export default AppPost