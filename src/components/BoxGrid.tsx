import {Container} from "@mui/material";

interface Props {
    children?: any
}

export function BoxGrid (props: Props) {
    return (
        <Container sx={{
            display: "grid",
            gridGap: 24,
            gridTemplateColumns: "repeat(3, 1fr)",
            p: 0
        }}>
            {props?.children }
        </Container>
    )
}
