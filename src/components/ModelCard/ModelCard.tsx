import ModelCardData from "../../types/ModelCardData.ts";
import {Card, CardBody, CardFooter, Image, Link} from "@nextui-org/react";
import {UserGroupIcon} from "@heroicons/react/16/solid";

const ModelCard = ({data}: {data: ModelCardData}) => {

    return <Link href={`/model/${data.id}`}>
        <Card shadow="sm" isPressable onPress={() => console.log("item pressed")} className="w-50 flex-1">
            <CardBody className="overflow-visible p-0 grow-0">
                <Image
                    shadow="sm"
                    radius="lg"
                    width="100%"
                    alt={data.title}
                    className="w-full object-cover h-[140px]"
                    src={data.images[data.coverImageIndex]}
                />
            </CardBody>
            <CardFooter className="text-small flex-col items-start grow justify-between">
                <b className="text-left line-clamp-2">{data.title}</b>

                <div className="inline-flex flex-wrap gap-4 justify-between w-full">
                    <p className="space-x-1 text-default-500">
                        <UserGroupIcon className="w-4 h-4 inline"/>
                        <span>{data.author}</span>
                    </p>

                    <p className="text-default-500 whitespace-nowrap">{data.trainingCount} training</p>
                </div>

            </CardFooter>
        </Card>
    </Link>
}

export default ModelCard