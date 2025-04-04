import { Edit, SimpleForm, TextInput, NumberInput } from 'react-admin';

const VariantEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="id" disabled />
            <TextInput source="name" />
            <TextInput source="slug" />
        </SimpleForm>
    </Edit>
);

export default VariantEdit