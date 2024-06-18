import {
    Avatar,
    Badge,
    Button, Card,
    CardBody, CardFooter,
    CardHeader,
    Chip,
    Divider, Link,
    Skeleton,
    Spinner,
    Tooltip
} from "@nextui-org/react";
import {CheckBadgeIcon, CheckIcon, PlusIcon, UserGroupIcon, UserPlusIcon} from "@heroicons/react/16/solid";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faQuoteLeft, faQuoteRight} from "@fortawesome/free-solid-svg-icons";
import {faDiscord, faGithub} from "@fortawesome/free-brands-svg-icons";
import CountryFlagView from "../../../components/CountryFlagView";
import ProfileCardData from "../../../types/ProfileCardData.ts";
import dateFormat from "dateformat";
import numeral from "numeral";

const ProfileCardView = ({profile}: {profile?: ProfileCardData}) => {

    const isProfileLoaded = !!profile

    return <Card className="max-w-[400px]">
        <CardHeader className="flex flex-col gap-3 items-start">
            <div className="flex gap-x-6 gap-y-4 justify-between flex-wrap">
                <Link href={`/user/${profile?.id ?? ''}`}>

                    <div className="flex gap-3">

                        <Badge
                            classNames={{
                                badge: 'border-none bg-transparent',
                            }}
                            shape="circle"
                            content={
                                profile?.isVerified &&
                                <Tooltip content="Verified" className="dark text-success">
                                    <CheckBadgeIcon className="w-4 h-4 text-success bg-default-50 rounded-full"/>
                                </Tooltip>
                            }
                        >
                            <Avatar
                                alt="nextui logo"
                                // height={40}
                                size="md"
                                radius="md"
                                src={profile?.avatarUrl ?? ''}
                                // width={40}
                            />
                        </Badge>
                        <div className="flex flex-col">
                            <Skeleton className="rounded-lg" isLoaded={isProfileLoaded}>
                                <div className="inline-flex items-center gap-1">
                                    <p className="text-base">{profile?.username ?? "Author"}</p>

                                    {
                                        profile?.isTeam &&
                                        <Tooltip content="Team" className="dark text-foreground">
                                            <UserGroupIcon className="w-4 h-4 text-default-500"/>
                                        </Tooltip>
                                    }
                                </div>
                            </Skeleton>
                            <Skeleton className="rounded-lg" isLoaded={isProfileLoaded}>
                                <p className="text-xs text-default-500 whitespace-nowrap">Joined {profile?.joinedAt ? dateFormat(profile?.joinedAt, "mmm d, yyyy") : "Date"}</p>
                            </Skeleton>

                        </div>
                    </div>
                </Link>
                <div>
                    <Button
                        size="sm"
                        color="primary"
                        radius={'full'}
                        startContent={
                            <UserPlusIcon className="w-4 h-4"/>
                        }
                        endContent={
                            <Skeleton className="rounded-lg " style={{
                                backgroundColor: "#fff"
                            }} isLoaded={isProfileLoaded}>
                                <span>{profile?.followers ? numeral(profile?.followers).format('0a').toUpperCase() : '000'}</span>
                            </Skeleton>
                        }
                    >
                        Follow
                    </Button>
                </div>
            </div>

            <Skeleton className="rounded-lg" isLoaded={isProfileLoaded}>
                <p className="space-x-2 max-w-xs">
                    <FontAwesomeIcon icon={faQuoteLeft} className="text-default-400"/>
                    <span
                        className="text-sm line-clamp-2 inline">{profile?.bio ?? "A fairly long string of text to simulate the average expected size of a bio"}</span>
                    <FontAwesomeIcon icon={faQuoteRight} className="text-default-400"/>
                </p>
            </Skeleton>
        </CardHeader>
        {/*<Divider/>*/}
        <Divider/>
        <CardBody>
            {
                isProfileLoaded ?
                    <div className="inline-flex gap-2 flex-wrap">

                        <Chip
                            startContent={<PlusIcon className="w-4 h-4 ml-1"/>}
                            variant="flat"
                            color="default"
                            size="sm"
                        >
                            <p className="text-xs font-medium leading-loose">{
                                numeral(profile?.modelsCreated).format('0a').toUpperCase()
                            }&nbsp;created</p>
                        </Chip>

                        <Chip
                            startContent={<CheckIcon className="w-4 h-4 ml-1"/>}
                            variant="flat"
                            color="success"
                            size="sm"
                        >
                            <p className="text-xs font-medium leading-loose">{
                                numeral(profile?.modelsTrained).format('0a').toUpperCase()
                            }&nbsp;trained</p>
                        </Chip>

                    </div> :
                    <Spinner size="sm"/>
            }
        </CardBody>
        <Divider/>
        <CardFooter className="space-x-4 inline-flex justify-between">

            {
                !isProfileLoaded &&
                <Spinner size='sm' className="self-center"/>
            }
            <div className="space-x-4 inline-flex">
                {
                    profile?.githubUrl &&
                <Link
                    isExternal
                    // showAnchorIcon
                    href={profile?.githubUrl ?? ""}
                >
                    <Tooltip content={
                        "Github"
                    } className="dark text-foreground">
                        <FontAwesomeIcon icon={faGithub} size={"lg"}/>
                    </Tooltip>

                </Link>
                }

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
            </div>


            {
                profile?.country &&
                <CountryFlagView countryCode={profile?.country}/>
            }

            {
                !isProfileLoaded &&
                <Spinner size='sm' className="self-center"/>
            }


        </CardFooter>
    </Card>
}

export default ProfileCardView