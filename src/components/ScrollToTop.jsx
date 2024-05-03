import { KeyboardArrowUp} from '@mui/icons-material'
import { Fab, Zoom, useScrollTrigger } from '@mui/material'



const ScrollToTop = () => {
    return (

        <div>
            <Zoom in={useScrollTrigger({ threshold: 50 })}>
                <Fab
                    onClick={() => {
                        window.scrollTo({ top: 0, behavior: "smooth" })
                    }}
                    size='small'
                    sx={{ position: "fixed", bottom: 100, right: 33 }}
                    color="primary" aria-label="add">
                    <KeyboardArrowUp fontSize='medium' />
                </Fab>
            </Zoom>
        </div>


    )
}

export default ScrollToTop;