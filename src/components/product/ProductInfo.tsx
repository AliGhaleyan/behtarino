import { faShareAlt, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Rating } from "react-simple-star-rating";
import { Product } from "../../data/model/product.model";
import styles from "./ProductInfo.module.scss";

interface Props {
    product: Product
}

const ProductInfo: FC<Props> = ({ product }) => {
    return <div className="d-flex h-100 w-100 min-vh-100">
        <Container>
            <Row className="h-100 min-vh-100">
                <Col lg={4} className={`${styles.imageSection} bg-white`}>
                    <img src={product.image} alt={product.title} className="d-block my-4" />
                </Col>
                <Col lg={8} className="p-lg-5">
                    <div className="d-flex flex-column h-100">
                        <div className="d-flex flex-xl-row flex-column align-items-xl-center justify-content-between">
                            <div className="mb-2 mb-xl-0">
                                <h2 className="mb-0 boldText">{product.title}</h2>
                            </div>
                            <div className="small">
                                <Rating initialValue={product.rating.rate} readonly size={20} ratingValue={0} />
                            </div>
                        </div>
                        <div className="text-muted text-uppercase regularText mt-4 mt-lg-5">
                            {product.category}
                        </div>
                        <div className={`${styles.price} mt-1`}>
                            ${product.price}
                        </div>
                        <h5 className="text-uppercase semiBoldText mt-4 mt-lg-5 mb-3">description</h5>
                        <div className="text-muted small mb-lg-5 regularText">
                            {product.description}
                        </div>
                        <div className="mt-5 mt-lg-auto mb-5 d-flex align-items-center justify-content-between">
                            <Button variant={"primary"} className="text-uppercase boldText rounded-border-sm px-4 py-3 d-flex justify-content-center align-items-center">
                                <FontAwesomeIcon icon={faShoppingCart} className="me-3" size="lg" />
                                Add To Card
                            </Button>
                            <FontAwesomeIcon icon={faShareAlt} size="2x" className="text-muted cursor-pointer" />
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>;
};

export default ProductInfo;