import {ReactNode} from "react";
import ChipCheckboxView from "../ChipCheckboxView";

const ChipPickerView = ({
    label,
    items={},
    selectedChips=[],
    setSelectedChips
}: {
    label?: ReactNode,
    items: {[key: string]: string},
    selectedChips: string[],
    setSelectedChips: React.Dispatch<React.SetStateAction<string[]>>
}) => {
    // const [selectedChips, setSelectedChips] = useState<string[]>([]);

    return (
        <div className="inline-flex flex-col gap-1 overflow-auto">
            {/*<CheckboxGroup*/}
            {/*    className="gap-1"*/}
            {/*    classNames={{*/}
            {/*        wrapper: 'overflow-x-auto inline-flex whitespace-nowrap line-clamp-1 flex-nowrap'*/}
            {/*    }}*/}
            {/*    label={label}*/}
            {/*    orientation="horizontal"*/}
            {/*    value={groupSelected}*/}
            {/*    onChange={setGroupSelected}*/}
            {/*>*/}
            {label}
            <div
                className="overflow-x-auto inline-flex whitespace-nowrap line-clamp-1 flex-nowrap gap-1"
            >
            {
                Object.keys(items).map(((item, index) =>
                    <ChipCheckboxView
                        key={index}
                        isSelected={
                            selectedChips.includes(item)
                        }
                        toggleSelected={() => {
                            const isSelected = selectedChips.includes(item)

                            setSelectedChips(prevState => {

                                if(!isSelected)
                                    return [...prevState, item]

                                return [...prevState.filter(compareItem => item !== compareItem)]
                            })
                        }}
                    >{items[item]}</ChipCheckboxView>
                ))
            }
            </div>
            {/*</CheckboxGroup>*/}

            {/*<p className="mt-4 ml-1 text-default-500">*/}
            {/*    Selected: {groupSelected.join(", ")}*/}
            {/*</p>*/}
        </div>
    );

}

export default ChipPickerView