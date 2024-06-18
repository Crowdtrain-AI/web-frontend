import {Button} from "@nextui-org/react";

const ChipCheckboxView = ({
    isSelected,
    toggleSelected,
    children
}: {
    isSelected: boolean,
    toggleSelected: () => void,
    children?: React.ReactNode
}) => {
    // const {
    //     children: checkboxChildren,
    //     isSelected,
    //     isFocusVisible,
    //     getBaseProps,
    //     getLabelProps,
    //     getInputProps,
    // } = useCheckbox({
    //     value,
    //     children
    // })

    // const styles = checkbox({ isSelected, isFocusVisible })

    return (
        <Button
            color={isSelected ? "primary" : "default"}
            onClick={toggleSelected}
            size={'sm'}
            variant={isSelected ? "solid" : "flat"}
            radius={'full'}
        >
            {children ? children : isSelected ? "Enabled" : "Disabled"}
        </Button>
    )
        // <label {...getBaseProps()}>
        //     <VisuallyHidden>
        //         <input {...getInputProps()} />
        //     </VisuallyHidden>
            {/*<Chip*/}
            {/*    classNames={{*/}
            {/*        base: styles.base(),*/}
            {/*        content: styles.content(),*/}
            {/*    }}*/}
            {/*    color="primary"*/}
            {/*    // startContent={isSelected ? <CheckIcon className="ml-1 w-4 h-4" /> : null}*/}
            {/*    variant="faded"*/}
            {/*    {...getLabelProps()}*/}
            {/*>*/}
            {/*    {checkboxChildren ? checkboxChildren : isSelected ? "Enabled" : "Disabled"}*/}
            {/*</Chip>*/}
        // </label>
}


// const checkbox = tv({
//     slots: {
//         base: "border-default hover:bg-default-200",
//         content: "text-default-500"
//     },
//     variants: {
//         isSelected: {
//             true: {
//                 base: "border-primary bg-primary hover:bg-primary-500 hover:border-primary-500",
//                 content: "text-primary-foreground" //pl-1
//             }
//         },
//         isFocusVisible: {
//             true: {
//                 base: "outline-none ring-2 ring-focus ring-offset-2 ring-offset-background",
//             }
//         }
//     }
// })


export default ChipCheckboxView