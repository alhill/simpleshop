import { List, Datagrid, TextField } from 'react-admin';

const TagList = () => (
    <List>
        <Datagrid>
            <TextField source="name" />
            <TextField source="slug" />
        </Datagrid>
    </List>
);

export default TagList