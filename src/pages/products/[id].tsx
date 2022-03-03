import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { END } from "redux-saga";
import Layout from "../../components/layout/Layout";
import ProductInfo from "../../components/product/ProductInfo";
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
    const router = useRouter();
    const product = useSelector<AppState>(x => x.product?.payload);

    useEffect(() => {
        if (!product)
            router.push('/404');
    }, []);

    return <Layout title={(product as Product).title} description={(product as Product).description}>
        {product ? <ProductInfo product={product as Product} /> : null}
    </Layout>;
};

export default ProductView;