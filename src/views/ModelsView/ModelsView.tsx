import {faker} from "@faker-js/faker";
import {useEffect, useMemo, useRef, useState} from "react";
import ModelCardData from "../../types/ModelCardData.ts";
import ModelCard from "../../components/ModelCard";
import { Input, Select, SelectItem, Spinner} from "@nextui-org/react";
import useScrollBottom from "../../hooks/useScrollBottom.tsx";
import {CheckCircleIcon, MagnifyingGlassIcon} from "@heroicons/react/16/solid";
import ChipPickerView from "../../components/ChipPickerView";
import {Key} from "@react-types/shared";


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

const tags = {
    'realism': 'Realism',
    'art': 'Art',
    'person': 'Person',
    'style': 'Style',
    'effect': 'Effect',
    'character': 'Character',
    'object': 'Object'
}

const sortingOptions: { [key: Key]: string } = {
    'newest': 'Newest',
    'oldest': 'Oldest',
    'mostPopular': 'Most Popular',
    'leastPopular': 'Least Popular',
    'mostTrained': 'Most Trained',
    'leastTrained': 'Least Trained',
    'mostLiked': 'Most Liked',
    'leastLiked': 'Least Liked',

}

const sortingOptionsKeys = Object.keys(sortingOptions)

const ModelsView = () => {

    const [models, setModels] = useState<ModelCardData[]>([1, 2, 3, 4].reduce((acc) => [...acc, ...ipsumModels], [] as ModelCardData[]))

    const [modelCaret, setModelCaret] = useState('')

    const [loading, setLoading] = useState(false)
    const [reachedEnd, setReachedEnd] = useState(false)

    const gridRef = useRef(null);
    const isBottom = useScrollBottom(gridRef);

    const loadMore = async () => {
        // setLoading(true)

        await new Promise(resolve => setTimeout(resolve, 500))

        setModels(prev => [...prev, ...[1, 2, 3, 4].reduce((acc) => [...acc, ...ipsumModels], [] as ModelCardData[])])

        if(models.length > 20)
            setReachedEnd(true)

        // setLoading(false)
    }

    useEffect(() => {
        if (isBottom && !reachedEnd) {
            // Load more items here
            // setLoading(true)
            setLoading(alreadyLoading => {
                if(alreadyLoading) return alreadyLoading

                loadMore()
                    .then(() => setLoading(false))

                return true
            })
        }
    }, [isBottom, reachedEnd]);


    const [sortingValues, setSortingValues] = useState(new Set([sortingOptionsKeys[0]]));
    const [selectedChips, setSelectedChips] = useState<string[]>([]);
    const [searchQuery, setSearchQuery] = useState<string>('');

    const sortingMode = useMemo(() => sortingValues.values().next()?.value ?? sortingOptionsKeys[0], [sortingValues])

    const requestModels = async () => {
        // const response = await fetch('https://api.example.com/models', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //         'Authorization': 'Bearer ' + localStorage.getItem('token')
        //     },
        //     body: JSON.stringify({
        //         sortingValues,
        //         selectedChips,
        //         searchQuery
        //     })
        // })
        //
        // if(!response.ok) {
        //     // Handle error
        //     return
        // }
        //
        // const data = await response.json()
        //
        // setModels(data)
    }

    // Immediately update the models when the sorting values or selected chips change
    useEffect(() => {
        requestModels()
            .then(() => {
                // Handle success
            })
    }, [sortingValues, selectedChips]);

    // Debounce the search query to prevent excessive API calls
    useEffect(() => {

        const delayDebounceFn = setTimeout(() => {
            requestModels()
                .then(() => {
                    // Handle success
                })
        }, 500)

        return () => clearTimeout(delayDebounceFn)

    }, [searchQuery]);



    return <div className="py-8 md:py-16 px-12 md:px-32 space-y-6">

        <Input
            // label="Search"
            onValueChange={setSearchQuery}
            isClearable
            radius="lg"
            classNames={{
                label: "text-black/50 dark:text-white/90",
                input: [
                    "bg-transparent",
                    "text-black/90 dark:text-white/90",
                    "placeholder:text-default-700/50 dark:placeholder:text-white/60",
                ],
                innerWrapper: "bg-transparent",
                inputWrapper: [
                    "shadow-xl",
                    "bg-default-200/50",
                    "dark:bg-default/60",
                    "backdrop-blur-xl",
                    "backdrop-saturate-200",
                    "hover:bg-default-200/70",
                    "dark:hover:bg-default/70",
                    "group-data-[focus=true]:bg-default-200/50",
                    "dark:group-data-[focus=true]:bg-default/60",
                    "!cursor-text",
                ],
            }}
            placeholder="Type to search..."
            startContent={
                <MagnifyingGlassIcon className="w-4 h-4 text-black/50 mb-0.5 dark:text-white/90 text-slate-400 pointer-events-none flex-shrink-0" />
            }
        />



        <div className="inline-flex w-full flex-col sm:flex-row gap-x-8 gap-4 justify-between">

            <ChipPickerView
                // label={'Select tags...'}
                items={tags}
                selectedChips={selectedChips}
                setSelectedChips={setSelectedChips}
            />

            <Select
                label="Sorting by"
                placeholder="Select a sorting option..."
                className="max-w-[10rem] shrink-0"
                classNames={{
                    popoverContent: "dark text-foreground",
                }}
                size={'sm'}
                selectedKeys={sortingValues}
                onSelectionChange={( selectedKeys ) => {
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-expect-error
                    if(selectedKeys.size === 0)
                        return

                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-expect-error
                    setSortingValues(selectedKeys)
                }}
            >
                {sortingOptionsKeys.map((sortingTerm) => (
                    <SelectItem key={sortingTerm}>
                        {sortingOptions[sortingTerm]}
                    </SelectItem>
                ))}
            </Select>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4" ref={gridRef}>

            {models.map((data, i) =>
                <ModelCard
                    key={i}
                    data={data}
                />
            )}
        </div>

        {
            loading &&

            <div className="inline-flex w-full flex-col justify-center gap-4 items-center">
                <Spinner/>

                <p className="text-sm text-primary-500 font-medium">Loading more...</p>
            </div>
        }

        {
            reachedEnd &&

            <div className="inline-flex w-full flex-col justify-center gap-4 items-center">
                {/*<Divider/>*/}

                <p className="text-sm text-default-500 font-medium inline-flex items-center gap-2"><CheckCircleIcon className="w-4 h-4 inline"/> You've reached the bottom</p>
            </div>
        }

    </div>
}

export default ModelsView