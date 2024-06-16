import ImageCarouselView from "../../components/ImageCarouselView";
import dateFormat from "dateformat";
import {useEffect, useState} from "react";
import ModelCardData from "../../types/ModelCardData.ts";
import {faker} from "@faker-js/faker";
import {
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    Divider,
    Link,
    Skeleton,
    Image,
    Button,
    Spacer, Tooltip
} from "@nextui-org/react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faDiscord, faGithub} from "@fortawesome/free-brands-svg-icons";
import ProfileCardData from "../../types/ProfileCardData.ts";
import {ChatBubbleOvalLeftIcon, UserPlusIcon} from "@heroicons/react/16/solid";
import {faQuoteLeft, faQuoteRight} from "@fortawesome/free-solid-svg-icons";

const ipsumModel = {
    // id: faker.string.uuid(),
    name: 'Bestvision',
    title: 'Realistic finetune for SD3',
    author: faker.person.firstName(),
    description: 'A realistic finetune for SD3, with a focus on the best possible results.',
    image: '',
    trainingCount: Math.round(Math.random() * 1000),
    category: 'Realistic'
}

const ipsumProfile = {
    id: faker.string.uuid(),
    username: faker.person.firstName(),
    fullName: faker.person.fullName(),
    avatarUrl: '',
    bio: "I'm a passionate developer and designer.",
    modelsCreated: 10,
    modelsTrained: 3,
    followers: faker.number.int({min: 0, max: 1000}),
    following: faker.number.int({min: 0, max: 1000}),
    githubUrl: '',
    joinedAt: faker.date.recent().getTime(),
    country: faker.location.country(),
    discordUsername: faker.internet.userName()
}

const ModelDetailView = ({
    id
}: {
    id: string
}) => {

    const [model, setModel] = useState<undefined | ModelCardData>(undefined)
    const [profile, setProfile] = useState<undefined | ProfileCardData>(undefined)
    const isModelLoaded = model !== undefined
    const isProfileLoaded = profile !== undefined

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

    return <div className="py-8 md:py-16 px-12 md:px-32 space-y-6">
        {/*<ImageCarouselView*/}
        {/*    images={[*/}
        {/*    ]}*/}
        {/*/>*/}

        <div className="flex justify-center gap-x-12">

            <div className="flex flex-col gap-6">
                <Skeleton className="rounded-lg" isLoaded={isModelLoaded}>
                    <h1 className="text-3xl font-bold">{model?.name ?? "Name"}</h1>
                </Skeleton>

                <Skeleton className="rounded-lg" isLoaded={isModelLoaded}>
                    <p className="max-w-md">{model?.description ?? faker.lorem.paragraphs(1)}</p>
                </Skeleton>
            </div>

            <div>
                <Card className="max-w-[400px]">
                    <CardHeader className="flex gap-3 justify-between">
                        <div  className="flex gap-3">
                            <Image
                                alt="nextui logo"
                                height={40}
                                radius="sm"
                                src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
                                width={40}
                            />
                            <div className="flex flex-col">
                                <Skeleton className="rounded-lg" isLoaded={isProfileLoaded}>
                                    <p className="text-base">{model?.author ?? "Author"}</p>
                                </Skeleton>
                                {/*<p className="text-small text-default-500 space-x-1">*/}
                                {/*    <FontAwesomeIcon*/}
                                {/*        icon={faDiscord}*/}
                                {/*    />*/}
                                {/*    <span>{profile?.discordUsername ?? "Discord username"}</span>*/}
                                {/*</p>*/}
                                <Skeleton className="rounded-lg" isLoaded={isProfileLoaded}>
                                    <p className="text-xs text-default-500">Joined {profile?.joinedAt ? dateFormat(profile?.joinedAt, "mmm d, yyyy") : "Date"}</p>
                                </Skeleton>
                            </div>
                        </div>
                        <div>
                            <Button
                                size="sm"
                                // variant="flat"
                                color="primary"
                                radius={'full'}
                                endContent={<UserPlusIcon className="w-4 h-4"/>}
                            >
                                Follow
                            </Button>
                        </div>
                    </CardHeader>
                    <Divider/>
                    <CardBody>
                        <Skeleton className="rounded-lg" isLoaded={isProfileLoaded}>
                            <p className="space-x-2">
                                <FontAwesomeIcon icon={faQuoteLeft} className="text-default-400"/>
                                <p className="text-sm max-w-xs line-clamp-2 inline">{profile?.bio ?? faker.lorem.sentence(1)}</p>
                                <FontAwesomeIcon icon={faQuoteRight} className="text-default-400"/>
                            </p>
                        </Skeleton>
                    </CardBody>
                    <Divider/>
                    <CardFooter className="space-x-4">

                        <Link
                            isExternal
                            // showAnchorIcon
                            href={profile?.githubUrl ?? ""}
                        >
                            <Tooltip content={
                                "Github"
                            } classNames={{
                                content: 'dark text-foreground',
                            }}>
                                <FontAwesomeIcon icon={faGithub} size={"lg"} />
                            </Tooltip>

                        </Link>

                        {
                            profile?.discordUsername &&

                            <Tooltip content={
                                profile?.discordUsername
                            } classNames={{
                                content: 'dark text-foreground',
                            }}>
                                <FontAwesomeIcon icon={faDiscord} size={"lg"} className="text-primary-400"/>
                            </Tooltip>
                        }

                    </CardFooter>
                </Card>
            </div>

        </div>
    </div>
}

export default ModelDetailView