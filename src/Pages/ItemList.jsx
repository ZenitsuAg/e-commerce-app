import { Item } from "../Components/Recommended";


export default function ItemList() {
    const availableItems = [];
    const suggestedItems = []
    for (let i = 0; i < 5; i++) {
        availableItems.push(<FilteredItems key={i} />);
        suggestedItems.push(<Item key={i} className={'min-w-[14rem] max-w-[16rem]'}/>)
    }

    return (
        <div>
            <SortBar />

            <div className="flex gap-3 p-3">
                <div className="p-2 border border-blue-400 rounded-md">
                    <p>
                        Huawei{" "}
                        <span className="cursor-pointer text-slate-500">X</span>
                    </p>
                </div>
                <div className="p-2 border border-blue-400 rounded-md">
                    <p>
                        Apple{" "}
                        <span className="cursor-pointer text-slate-500">X</span>
                    </p>
                </div>
                <div className="p-2 border border-blue-400 rounded-md">
                    <p>
                        64GB{" "}
                        <span className="cursor-pointer text-slate-500">X</span>
                    </p>
                </div>
            </div>

            <div className="p-3">{availableItems}</div>

            <div className="p-3">
                <h1 className="font-medium">You may also like</h1>
                <div className="flex gap-2 p-2 overflow-scroll">
                    {suggestedItems}
                </div>
            </div>
        </div>
    );
}

const SortBar = () => {
    return (
        <div className="flex gap-2 p-2 text-center bg-white border">
            <div className="p-1 border rounded-lg basis-2/5">
                <p>Sort: Newest</p>
            </div>
            <div className="p-1 border rounded-lg basis-2/5">
                <p>Filter(3)</p>
            </div>
            <div className="p-1 border rounded-lg">
                {/* The Icons go here */}
            </div>
        </div>
    );
};

const FilteredItems = () => {
    return (
        <div className="flex items-center mt-2 bg-white border rounded-lg">
            <div className="w-32 h-36"></div>
            <div>
                <h1 className="text-slate-500">Regular Fit Resort Shirt</h1>
                <p className="font-medium">$57.70</p>
                <div id="stars" className="flex gap-4">
                    <div className="text-orange-500">
                        {" "}
                        {/* The stars go here */} 7.5
                    </div>
                    <div className="text-slate-300">154 orders</div>
                </div>
                <p className="text-sm text-green-500">Free Shipping</p>
            </div>
        </div>
    );
};
