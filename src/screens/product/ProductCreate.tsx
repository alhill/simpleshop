import { Create, SimpleForm, TextInput, NumberInput, ImageInput } from 'react-admin';

const ProductCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="name" />
            <TextInput source="slug" />
            <NumberInput source="price" />
            <ImageInput source="images" />
        </SimpleForm>
    </Create>
);

export default ProductCreate