import { ImageField, Show, SimpleShowLayout, TextField } from 'react-admin';

const ProductShow = () => (
    <Show>
        <SimpleShowLayout>
            <TextField source="name" />
            <TextField source="slug" />
            <TextField source="price" />
            <ImageField source="images" />
        </SimpleShowLayout>
    </Show>
);

export default ProductShow