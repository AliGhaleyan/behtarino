import { NextPage } from "next";
import Layout from "../../components/layout/Layout";

export const getServerSideProps = (contex: any) => {
    const id = parseInt(contex.query.id);
    
    return { props: { id } }
}

interface Props {
    id: number
}

const ProductView: NextPage<Props> = ({id}) => {
    return <Layout title="Product">
        {id}
    </Layout>;
};

export default ProductView;