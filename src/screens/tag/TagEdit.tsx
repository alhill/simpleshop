import { Edit, SimpleForm, TextInput, NumberInput } from 'react-admin';

const TagEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="id" disabled />
            <TextInput source="name" />
            <TextInput source="slug" />
        </SimpleForm>
    </Edit>
);

export default TagEdit