import { Create, SimpleForm, TextInput, NumberInput } from 'react-admin';

const TagCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="name" />
            <TextInput source="slug" />
        </SimpleForm>
    </Create>
);

export default TagCreate