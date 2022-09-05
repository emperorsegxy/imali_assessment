import {Box} from "@mui/material";

interface Props {
    children?: any;
    height?: number | string;
}

export function CardBox (props?: Props) {
    return (
        <Box sx={{
            background: '#FFF',
            border: '1px solid #EAECF0',
            height: props?.height || 176,
            p: 3,
            borderRadius: 2,
            boxShadow: '0px 1px 3px rgba(16, 24, 40, 0.1), 0px 1px 2px rgba(16, 24, 40, 0.06);'
        }}>
            {props?.children}
        </Box>
    )
}
