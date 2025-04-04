import { Create, SimpleForm, TextInput, NumberInput } from 'react-admin';

const OrderCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="name" />
            <TextInput source="slug" />
            <NumberInput source="price" />
        </SimpleForm>
    </Create>
);

export default OrderCreate