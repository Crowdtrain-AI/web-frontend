import { useState } from 'react';
import {Button, Image} from '@nextui-org/react';
import { motion } from 'framer-motion';
import {ChevronLeftIcon, ChevronRightIcon} from "@heroicons/react/24/solid";

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

    const isSingleImage = images.length === 1;

    return (
        <div className="relative w-full">
            {/*h-[250px]*/}
            <div className={`h-[20rem] relative ${!isSingleImage ? 'sm:mx-16' : ''}`}>

                <motion.div
                    className="inline-flex absolute top-0 bottom-0"
                    animate={{
                        // x: -currentImageIndex * 500
                        x: (-currentImageIndex * 100 / images.length) + '%',
                        width: images.length * 100 + '%'
                    }}
                    transition={{
                        duration: 0.5,
                        type: 'spring',
                        bounce: 0
                    }}
                >
                    <div className={`inline-flex self-center flex-1 w-[${(1 / images.length * 100)}%]`}>

                        {
                            images.map((image, i) => (
                                <motion.div
                                    key={i}
                                    animate={{
                                        scale: currentImageIndex === i ? 1 : 0.8,
                                        opacity: currentImageIndex === i ? 1 : 0
                                    }}
                                    transition={{
                                        duration: 0.5,
                                        type: 'spring',
                                        bounce: 0
                                    }}
                                    className="inline-flex relative w-full justify-center"
                                >
                                    {/*<div className="bg-green-500 w-full h-full absolute top-0 right-0 bottom-0 left-0"/>*/}
                                    <Image
                                        // src={image}
                                        isBlurred={true}
                                        src={image}
                                        alt="carousel image"
                                        // className="max-h-[300px]"
                                        // className="object-cover"
                                        // layout="fill"
                                        // objectFit="cover"
                                        // width={500}
                                        // height={300}

                                    />
                                </motion.div>
                            ))
                        }
                        {/*images[currentImageIndex]*/}
                        {/*<Image src={"https://picsum.photos/500/300"} alt="carousel image" width={500} height={300} />*/}
                        {/*<Image src={"https://picsum.photos/500/300"} alt="carousel image" width={500} height={300} />*/}
                        {/*<Image src={"https://picsum.photos/500/300"} alt="carousel image" width={500} height={300} />*/}
                    </div>
                </motion.div>

            </div>
            {/*<Spacer y={1}/>*/}
            {/*<Button onClick={handlePrevious}>Previous</Button>*/}
            {/*<Spacer x={0.5} isInline={true}/>*/}
            {/*<Button onClick={handleNext}>Next</Button>*/}

            {
                !isSingleImage && (<>

                    <div className="absolute -left-0 inline-flex h-full top-0 bottom-0 items-center z-10">
                        <Button
                            onClick={handlePrevious}
                            variant="flat"
                            radius="full"
                            // color="primary"
                            // size="sm"
                            size="lg"
                            isIconOnly={true}
                        >
                            <ChevronLeftIcon className="w-6 h-6"/>
                        </Button>
                    </div>

                    <div className="absolute -right-0 inline-flex h-full top-0 bottom-0 items-center z-10">
                        <Button
                            onClick={handleNext}
                            variant="flat"
                            radius="full"
                            // color="primary"
                            size="lg"
                            isIconOnly={true}
                        >
                            <ChevronRightIcon className="w-6 h-6"/>
                        </Button>
                    </div>

                </>)
            }
        </div>
    );
};

export default ImageCarouselView;