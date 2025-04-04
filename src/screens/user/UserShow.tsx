import { Show, SimpleShowLayout, TextField } from 'react-admin';

const UserShow = () => (
    <Show>
        <SimpleShowLayout>
            <TextField source="name" />
            <TextField source="slug" />
            <TextField source="price" />
        </SimpleShowLayout>
    </Show>
);

export default UserShow