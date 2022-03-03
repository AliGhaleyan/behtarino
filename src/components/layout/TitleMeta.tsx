import Head from 'next/head';
import React from "react";

interface Props {
    title?: string;
    description?: string;
}

const TitleMeta = (props: Props) => {
    let title = process.env.APP_TITLE;
    
    if (props.title != null)
        title = `${props.title} | ${title}`;

    return <Head>
        <title>{title}</title>
        <meta name="Description" content={props.description}/>
    </Head>;
};

export default TitleMeta;
