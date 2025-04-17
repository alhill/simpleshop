import { Edit, SimpleForm, TextInput, NumberInput, ImageInput } from 'react-admin';

const ProductEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="id" disabled />
            <TextInput source="name" />
            <TextInput source="slug" />
            <NumberInput source="price" />
            <ImageInput source="images" />
        </SimpleForm>
    </Edit>
);

export default ProductEdit