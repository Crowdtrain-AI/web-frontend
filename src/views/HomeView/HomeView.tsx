import ModelCard from "../../components/ModelCard";
import {Button} from "@nextui-org/react";
import {ArrowUpRightIcon, CpuChipIcon} from "@heroicons/react/20/solid";
import { faker } from '@faker-js/faker';
import ModelCardData from "../../types/ModelCardData.ts";
import {useState} from "react";


const ipsumModels = [
    {
        id: faker.string.uuid(),
        name: 'DetailDynamics',
        title: 'Dynamic Detail Enhancement',
        author: faker.person.firstName(),
        description: 'Enhancing details dynamically for a more immersive experience.',
        image: '',
        trainingCount: Math.round(Math.random() * 1000),
        category: 'Dynamic Details'
    },
    {
        id: faker.string.uuid(),
        name: 'ArchitectArtistry',
        title: 'Artistry in Architecture',
        author: faker.person.firstName(),
        description: 'Bringing artistry to architecture with fine-tuned adjustments.',
        image: '',
        trainingCount: Math.round(Math.random() * 1000),
        category: 'Architectural Artistry'
    },
    {
        id: faker.string.uuid(),
        name: 'Bestvision',
        title: 'Realistic finetune for SD3',
        author: faker.person.firstName(),
        description: 'A realistic finetune for SD3, with a focus on the best possible results.',
        image: '',
        trainingCount: Math.round(Math.random() * 1000),
        category: 'Realistic'
    },
    {
        id: faker.string.uuid(),
        name: 'PrecisionPixels',
        title: 'Pixel Precision Project',
        author: faker.person.firstName(),
        description: 'A project focused on achieving pixel precision for sharper images.',
        image: '',
        trainingCount: Math.round(Math.random() * 1000),
        category: 'Pixel Precision'
    }
]

const HomeView = () => {

    const [models, setModels] = useState<ModelCardData[]>(ipsumModels)

    return <div className="py-16 px-32 gap-8 flex items-center flex-col xl:flex-row">

        <div className="space-y-6">

            <h1 className="text-6xl font-extrabold">
                Making a new model?
            </h1>
            <h2 className="text-4xl font-bold text-primary">
                We want to train it. <b>Now.</b>
            </h2>
        </div>

        <div className="w-full flex items-center flex-col relative">
            <div className="hero-glow-bg w-full h-full absolute opacity-20"/>

            <div className="space-y-4">
                <h3 className="text-lg font-bold">Featured projects</h3>

                <div className="inline-flex max-w-screen-lg gap-4 justify-center">

                    {models.map((data, i) =>
                        <ModelCard
                            key={i}
                            data={data}
                        />
                    )}
                </div>

                <div className="space-x-3 py-4">
                    <Button
                        onClick={() => window.location.href = '/models'}
                        endContent={<ArrowUpRightIcon className="w-5 h-5"/>}
                        // color={'primary'}
                        // radius={'full'}
                        variant="flat"
                    >
                        Explore all
                    </Button>

                    <Button
                        onClick={() => window.location.href = '/create-project'}
                        endContent={<CpuChipIcon className="w-5 h-5"/>}
                        color={'primary'}
                        // radius={'full'}
                        // variant="flat"
                    >
                        Train my model
                    </Button>
                </div>
            </div>

        </div>

    </div>
}

export default HomeView