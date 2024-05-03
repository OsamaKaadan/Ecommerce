import whatsapplogo from '../../public/icon/whatsapp.png';
import { Fab } from '@mui/material'


const Whatsapp = () => {

    return (

        <Fab
            color="primary"
            size="small"
            aria-label="Scroll back to top"
            sx={{
                position: "fixed",
                bottom: 33,
                right: 33,
            }}
            onClick={() => {
                window.open('https://web.whatsapp.com/', '_blank');
            }}
        >
            <img src={whatsapplogo} alt="logo" width={41} />
        </Fab>


    )
}

export default Whatsapp