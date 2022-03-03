import { NextPage } from "next";
import { useSelector } from "react-redux";
import { END } from "redux-saga";
import Layout from "../../components/layout/Layout";
import { Product } from "../../data/model/product.model";
import { ProductAction } from "../../data/state/product/action";
import { AppState, SagaStore, wrapper } from "../../data/state/store";

export const getServerSideProps = wrapper.getServerSideProps(store => async ({ query }: any) => {
    const id = parseInt(query.id);
    store.dispatch(ProductAction.find(id));
    store.dispatch(END);

    await (store as SagaStore)?.sagaTask?.toPromise();
});

interface Props {
    //
}

const ProductView: NextPage<Props> = ({ }) => {
    const product = useSelector<AppState>(x => x.product?.payload);

    return <Layout title="Product">
        {(product as Product)?.description}
    </Layout>;
};

export default ProductView;