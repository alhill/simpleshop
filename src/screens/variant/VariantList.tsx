import { List, Datagrid, TextField } from 'react-admin';

const VariantList = () => (
    <List>
        <Datagrid>
            <TextField source="name" />
            <TextField source="slug" />
        </Datagrid>
    </List>
);

export default VariantList