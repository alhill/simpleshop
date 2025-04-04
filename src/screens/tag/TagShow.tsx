import { Show, SimpleShowLayout, TextField } from 'react-admin';

const TagShow = () => (
    <Show>
        <SimpleShowLayout>
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="slug" />
        </SimpleShowLayout>
    </Show>
);

export default TagShow