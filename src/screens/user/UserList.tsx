import { List, Datagrid, TextField } from 'react-admin';

const UserList = () => (
    <List>
        <Datagrid>
            <TextField source="name" />
            <TextField source="slug" />
            <TextField source="price" />
        </Datagrid>
    </List>
);

export default UserList