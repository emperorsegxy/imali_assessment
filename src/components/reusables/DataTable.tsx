import {DataGrid, GridColDef} from "@mui/x-data-grid"
import "../../assets/data-table.scss"

interface Props {
    headers: GridColDef[];
    items: any[]
}

export default function DataTable(props: Props) {
    const {headers, items} = props
    return (
        <div style={{height: 400, width: '100%'}} className="data-table">
            <DataGrid
                checkboxSelection
                rows={items}
                autoHeight
                disableColumnMenu
                disableColumnFilter
                hideFooter
                rowHeight={64}
                columns={headers}/>
        </div>
    )
}
