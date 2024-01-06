import React from "react";
import { ShimmerSimpleGallery } from "react-shimmer-effects";

export class Shimmer extends React.Component {
    render() {
        return (
            <>
                <ShimmerSimpleGallery imageType="thumbnail" imageHeight={200} caption />
                <ShimmerSimpleGallery card imageHeight={300} />
                <ShimmerSimpleGallery card imageHeight={300} caption />
            </>
        );
    }
}