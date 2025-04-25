import { Dialog } from "@mui/material";

type ModalNewTransectionProps = {
    open: boolean;
    handleClose: (value:boolean) => void
}

export default function ModalNewTransection({open, handleClose}: ModalNewTransectionProps){
    return(
        <Dialog open={open} onClose={handleClose}>
            <h1>Modal New Transection</h1>
        </Dialog>
    )
}