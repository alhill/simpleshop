import { Edit, SimpleForm, TextInput, NumberInput } from 'react-admin';

const OrderEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="id" disabled />
            <TextInput source="name" />
            <TextInput source="slug" />
            <NumberInput source="price" />
        </SimpleForm>
    </Edit>
);

export default OrderEdit