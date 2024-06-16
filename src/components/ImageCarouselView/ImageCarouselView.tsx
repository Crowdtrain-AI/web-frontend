import { useState } from 'react';
import { Button, Image, Spacer } from '@nextui-org/react';

const ImageCarouselView = ({
    images
}: {
    images: string[]
}) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const handleNext = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const handlePrevious = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    return (
        <div>
            <Image src={images[currentImageIndex]} alt="carousel image" width={500} height={300} />
            <Spacer y={1} />
            <Button onClick={handlePrevious}>Previous</Button>
            <Spacer x={0.5} isInline={true} />
            <Button onClick={handleNext}>Next</Button>
        </div>
    );
};

export default ImageCarouselView;