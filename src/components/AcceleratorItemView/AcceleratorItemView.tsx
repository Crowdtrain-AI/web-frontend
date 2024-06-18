import AcceleratorData from "../../types/AcceleratorData.ts";
import {CpuChipIcon} from "@heroicons/react/16/solid";

const AcceleratorItemView = ({accelerator}: {accelerator: AcceleratorData}) => {

    return <div className="inline-flex gap-4 border-1 border-default-100 rounded-lg px-4 py-2">

        <div className="space-x-2 flex items-center">

            <CpuChipIcon className="w-4 h-4"/>
            <p className="text-default-500 text-xs">{accelerator.brand}</p>
            <p className="font-bold text-sm">{accelerator.name}</p>
        </div>
        <p className="text-primary-500 text-xs font-bold">{accelerator.memoryGb}GB</p>

    </div>
}

export default AcceleratorItemView