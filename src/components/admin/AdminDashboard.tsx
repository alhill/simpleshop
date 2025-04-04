import { Admin, Resource } from 'react-admin'
import { FirebaseDataProvider, FirebaseAuthProvider } from 'react-admin-firebase'
import AdminLanding from '../../screens/AdminLanding';
import { ProductCreate, ProductEdit, ProductList, ProductShow } from '../../screens/product';
import { UserCreate, UserEdit, UserList, UserShow } from '../../screens/user';
import { CategoryCreate, CategoryEdit, CategoryList, CategoryShow } from '../../screens/category';
import { TagCreate, TagEdit, TagList, TagShow } from '../../screens/tag';
import { VariantCreate, VariantEdit, VariantList, VariantShow } from '../../screens/variant';
import { OrderCreate, OrderEdit, OrderList, OrderShow } from '../../screens/order';

const firebaseConfig = {
    apiKey: import.meta.env.PUBLIC_FIREBASE_API_KEY,
    authDomain: import.meta.env.PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: import.meta.env.PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: import.meta.env.PUBLIC_FIREBASE_APP_ID,
    measurementId: import.meta.env.PUBLIC_FIREBASE_MEASUREMENT_ID
};

const options = {}
const dataProvider = FirebaseDataProvider(firebaseConfig, options)
const authProvider = FirebaseAuthProvider(firebaseConfig, options)

const AdminDashboard = () => {
    return (
        <Admin 
            dataProvider={dataProvider}
            authProvider={authProvider}
            dashboard={AdminLanding}
        >
            <Resource
                name="categories"
                list={CategoryList}
                show={CategoryShow}
                create={CategoryCreate}
                edit={CategoryEdit}
            />
            <Resource
                name="products"
                list={ProductList}
                show={ProductShow}
                create={ProductCreate}
                edit={ProductEdit}
            />
            <Resource
                name="tags"
                list={TagList}
                show={TagShow}
                create={TagCreate}
                edit={TagEdit}
            />
            <Resource
                name="users"
                list={UserList}
                show={UserShow}
                create={UserCreate}
                edit={UserEdit}
            />
            <Resource
                name="orders"
                list={OrderList}
                show={OrderShow}
                create={OrderCreate}
                edit={OrderEdit}
            />
        </Admin>
    );
}

export default AdminDashboard