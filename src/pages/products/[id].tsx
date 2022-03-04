import { NextPage } from "next";
import { useSelector } from "react-redux";
import { END } from "redux-saga";
import Layout from "../../components/layout/Layout";
import ProductInfo from "../../components/product/ProductInfo";
import { Product } from "../../data/model/product.model";
import { ProductService } from "../../data/service/product.service";
import { ProductAction } from "../../data/state/product/action";
import { AppState, SagaStore, wrapper } from "../../data/state/store";

export const getStaticPaths = async () => {
    const { getAll } = new ProductService();
    const products = await getAll();    

    return { paths: products.map(x => ({ params: { id: x.id.toString() } })), fallback: false };
};

export const getStaticProps = wrapper.getStaticProps(store => async ({ params }) => {
    store.dispatch(ProductAction.find(parseInt(params?.id as string)));
    store.dispatch(END);

    await (store as SagaStore)?.sagaTask?.toPromise();

    return { props: {} };
});

interface Props {
    //
}

const ProductView: NextPage<Props> = ({ }) => {
    const product = useSelector<AppState>(x => x.server.product?.payload);

    return <Layout title={(product as Product).title} description={(product as Product).description}>
        {product ? <ProductInfo product={product as Product} /> : null}
    </Layout>;
};

export default ProductView;