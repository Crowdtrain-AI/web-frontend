import ImageCarouselView from "../../components/ImageCarouselView";
import numeral from "numeral";
import dateFormat from "dateformat";
import {useEffect, useState} from "react";
import ModelCardData from "../../types/ModelCardData.ts";
import {faker} from "@faker-js/faker";
import {
    Card,
    CardHeader,
    Divider,
    Link,
    Skeleton,
    Button,
    Chip, Spinner, ScrollShadow
} from "@nextui-org/react";
import ProfileCardData from "../../types/ProfileCardData.ts";
import {
    ArrowDownTrayIcon, PaperClipIcon,
    SparklesIcon, TagIcon,
} from "@heroicons/react/16/solid";
import ProfileCardView from "./ProfileCardView";
import AcceleratorItemView from "../../components/AcceleratorItemView";
import AcceleratorData from "../../types/AcceleratorData.ts";
import TimestampFormat from "../../utils/TimestampFormat.ts";


const ipsumModel = {
    // id: faker.string.uuid(),
    name: 'Bestvision',
    title: 'Realistic finetune for SD3',
    author: faker.person.firstName(),
    description: 'A realistic finetune for SD3, with a focus on the best possible results.',
    images: [
        `https://picsum.photos/seed/${faker.number.int({min: 0, max: 100})}/500/300`,
        `https://picsum.photos/seed/${faker.number.int({min: 0, max: 100})}/500/300`,
        `https://picsum.photos/seed/${faker.number.int({min: 0, max: 100})}/500/300`
    ],
    coverImageIndex: 0,
    trainingCount: Math.round(Math.random() * 1000),
    tags: ['Realistic', 'SD3', 'Finetune'],
    createdAt: faker.date.recent().getTime(),
    checkpointUpdatedAt: faker.date.recent().getTime()
}

const ipsumProfile = {
    id: faker.string.uuid(),
    isTeam: true,
    isVerified: true,
    username: faker.person.firstName(),
    avatarUrl: `https://picsum.photos/seed/${faker.number.int({min: 0, max: 100})}/40/40`,
    bio: "I'm a passionate developer and designer.",
    modelsCreated: faker.number.int({min: 0, max: 1000}),
    modelsTrained: faker.number.int({min: 0, max: 1000}),
    followers: faker.number.int({min: 0, max: 1000000}),
    following: faker.number.int({min: 0, max: 1000}),
    githubUrl: 'https://github.com',
    joinedAt: faker.date.recent().getTime(),
    country: faker.location.countryCode(),
    discordUsername: faker.internet.userName()
}

const ipsumAccelerators = [
    {
        id: 1,
        name: 'RTX 3090',
        brand: 'NVIDIA',
        memoryGb: 24
    }
]

const ModelDetailView = ({
    id
}: {
    id: string
}) => {

    const [model, setModel] = useState<undefined | ModelCardData>(undefined)
    const [profile, setProfile] = useState<undefined | ProfileCardData>(undefined)
    const [availableAccelerators, setAvailableAccelerators] = useState<undefined | AcceleratorData[]>(undefined)
    const [isAcceleratorsLoading, setIsAcceleratorsLoading] = useState(true)

    const isModelLoaded = model !== undefined
    // const isProfileLoaded = profile !== undefined

    useEffect(() => {

        (async () => {

            await new Promise(r => setTimeout(r, 500))

            setModel({
                id,
                ...ipsumModel
            })

            await new Promise(r => setTimeout(r, 200))

            setProfile({
                ...ipsumProfile
            })


        })()


    }, [id]);

    const isTrainingLive = model?.trainingCount && model.trainingCount !== 0
    const isCheckpointAvailable = model?.checkpointUpdatedAt !== undefined
    const hasAccelerators = !(availableAccelerators === undefined || availableAccelerators.length === 0)

    const refreshAccelerators = async () => {
        setIsAcceleratorsLoading(true)
        setAvailableAccelerators(undefined)
        await new Promise(r => setTimeout(r, 500))

        setAvailableAccelerators(faker.datatype.boolean({probability: 0.2}) ? undefined :
            faker.datatype.boolean({probability: 0.3}) ? [] :
                ipsumAccelerators)
        setIsAcceleratorsLoading(false)
    }

    useEffect(() => {
        if(availableAccelerators === undefined) {
            refreshAccelerators()
                .then(() => {})
        }else {
            setIsAcceleratorsLoading(false)
        }
    }, [])

    return <div className="py-8 md:py-16 px-12 md:px-32 space-y-6">

        <div className="flex justify-center gap-x-12 flex-col lg:flex-row gap-y-6">

            <div className="flex flex-col gap-6 grow max-w-prose">
                <div className="inline-flex flex-col gap-2">
                    <div className="inline-flex justify-between w-full gap-x-8 gap-y-2 flex-wrap">
                        <Skeleton className="rounded-lg" isLoaded={isModelLoaded}>
                            <h1 className="text-3xl font-bold">{model?.name ?? "Name"}</h1>
                        </Skeleton>
                        <Skeleton className="rounded-lg" isLoaded={isModelLoaded}>
                        {
                            (!isModelLoaded || model?.tags && model.tags.length > 0) &&
                            <ScrollShadow className="max-w-[18rem]" orientation="horizontal">
                            <div className="inline-flex gap-2">
                            {
                                (!isModelLoaded ? ['hey', 'there'] : model.tags)
                                    .map((tag, index) => {
                                    return <Link href={`/models?tag=${tag}`}><Chip
                                        key={index}
                                        size="sm"
                                        color="default"
                                        variant="flat"
                                        radius="full"
                                        startContent={<TagIcon className="w-4 h-4 mx-1 text-default-500"/>}
                                    >
                                        {tag}
                                    </Chip></Link>
                                })
                            }
                            </div>
                            </ScrollShadow>
                        }
                        </Skeleton>
                    </div>

                    <Skeleton className="rounded-lg" isLoaded={isModelLoaded}>
                        <h1 className="text-sm text-default-500">Created {model?.createdAt ? dateFormat(model?.createdAt, 'mmm d, yyyy') : "date"}</h1>
                    </Skeleton>
                </div>

                <Skeleton className="rounded-lg" isLoaded={isModelLoaded}>
                <ImageCarouselView
                    images={model?.images ?? []}
                />
                </Skeleton>

                <Skeleton className="rounded-lg" isLoaded={isModelLoaded}>
                    <p className="max-w-prose">{model?.description ?? faker.lorem.paragraphs(1)}</p>
                </Skeleton>
            </div>

            <div className="flex flex-col shrink-0 gap-6">

                <Card className="max-w-[400px]">
                    <CardHeader className="flex flex-col gap-4">
                        {/*<span className="text-sm font-semibold">Train</span>*/}

                        <div className="inline-flex gap-2 justify-between w-full">

                            <div className="space-y-2">
                                <Button
                                    disabled={!hasAccelerators}
                                    size="sm"
                                    color={!hasAccelerators ? "default" : "primary"}
                                    variant={!hasAccelerators ? "flat" : "solid"}
                                    radius={'full'}
                                    startContent={
                                        <SparklesIcon className="w-4 h-4"/>
                                    }
                                >
                                    {isTrainingLive ? "Join" : "Start"} training
                                </Button>

                                {/*<p className="text-xs text-default-500 font-medium">Powered by WebGPU</p>*/}
                            </div>

                            <Chip color={isTrainingLive ? "success" : "default"} variant="dot" size="sm">
                                {numeral(model?.trainingCount).format('0a')} training live
                            </Chip>
                        </div>

                        <Divider/>

                        <div className="inline-flex justify-between w-full">

                            <p className="self-start text-xs font-semibold text-default-500">Detected GPUs</p>

                            {/*<Link href="#" size="sm" className="leading-none">Refresh</Link>*/}
                            {/*<ArrowPathIcon className="w-4 h-4"/>*/}
                            <button
                                className={`${isAcceleratorsLoading ? 'text-default-400' : 'text-primary-500 hover:text-primary-600'} text-xs leading-none`}
                                onClick={refreshAccelerators}
                                disabled={isAcceleratorsLoading}
                            >Refresh</button>
                        </div>

                        {
                        isAcceleratorsLoading ?
                            <Spinner/> :
                            hasAccelerators ?
                        <div className="flex flex-col gap-4">
                        {
                            availableAccelerators.map((accelerator, index) => {
                                return <AcceleratorItemView
                                    key={index}
                                    accelerator={accelerator}
                                />
                            })
                        }
                        </div> :

                            availableAccelerators === undefined ?

                                <p className="text-xs">No training software detected. <Link
                                    className="text-xs"
                                    href="/get-started"
                                >Download
                                    here.</Link>
                                </p> :

                                <p className="text-xs">No GPU detected.<br/>
                                    <Link
                                        className="text-xs"
                                        href="/contact"
                                    >Contact us if
                                        this is incorrect.</Link>
                                </p>
                        }

                    </CardHeader>

                    {/*<Divider/>*/}
                    {/*<CardBody>*/}

                    {/*</CardBody>*/}
                    {/*<Divider/>*/}
                    {/*<CardFooter>*/}

                    {/*</CardFooter>*/}
                </Card>


                {
                    isCheckpointAvailable &&

                    <Card className="max-w-[400px]">
                        <CardHeader className="flex flex-col gap-4">
                            {/*<span className="text-sm font-semibold">Train</span>*/}

                            <div className="inline-flex gap-2 justify-between w-full">

                                <div className="space-y-3">
                                    <Button
                                        disabled={!isCheckpointAvailable}
                                        size="sm"
                                        color={!isCheckpointAvailable ? "default" : "primary"}
                                        variant={!isCheckpointAvailable ? "flat" : "solid"}
                                        radius={'full'}
                                        startContent={
                                            <ArrowDownTrayIcon className="w-4 h-4"/>
                                        }
                                    >
                                        Download checkpoint
                                    </Button>

                                    <p className="text-xs text-default-500 font-medium">Last updated {
                                        model?.checkpointUpdatedAt ?
                                            TimestampFormat.intraDay(model.checkpointUpdatedAt)
                                            : "date"}</p>
                                </div>

                                <Chip variant="light" size="sm" startContent={<PaperClipIcon className="w-4 h-4"/> }>
                                    {numeral(4.42).format('0.00')} GB
                                </Chip>
                            </div>

                        </CardHeader>

                    </Card>

                }

                <ProfileCardView
                    profile={profile}
                />
            </div>

        </div>
    </div>
}

export default ModelDetailView