interface ModelCardData {
    id: string;
    name: string;
    title: string;
    description: string;
    author: string;
    images: string[];
    coverImageIndex: number;
    trainingCount: number;
    tags: string[];
    createdAt: number;
    checkpointUpdatedAt: number;
}

export default ModelCardData;