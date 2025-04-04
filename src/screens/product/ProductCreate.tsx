import { Create, SimpleForm, TextInput, NumberInput } from 'react-admin';

const ProductCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="name" />
            <TextInput source="slug" />
            <NumberInput source="price" />
        </SimpleForm>
    </Create>
);

export default ProductCreate