export default function Products() {
    return (
        <div>
            <div className="grid grid-flow-col bg-white overflow-scroll divide-x divide-slate-100 border-y">
                <Items />
                <Items />
                <Items />
                <Items />
            </div>
            <div>
                <OtherProducts productTitle={'Home and Outdoor'}/>
                <OtherProducts productTitle={'Consumer Electronics'}/>
            </div>
        </div>
    );
}

function OtherProducts({ productTitle }) {
    return (
        <div className="mt-1 bg-white shadow-sm">
            <h1 className="text-2xl font-medium p-5">{productTitle}</h1>
            <div className="grid grid-flow-col overflow-scroll divide-x border-y">
                <ProductItems />
                <ProductItems />
                <ProductItems />
                <ProductItems />   
            </div>
            <div className="text-sky-500 p-3 border-b py-5">
                    <p>Source Now <i class="fa-solid fa-arrow-right"></i></p>
            </div>
        </div>
    );
}

function ProductItems() {
    return (
        <div className="w-48">
            <div className="h-32"></div>
            <div className="flex flex-col items-center justify-center text-center text-base">
                <p>Smart Watches</p>
                <p className="text-slate-400">From USD 19</p>
            </div>
  
        </div>
    )
}

function Items () {
    return (
        <div className="w-48">
            <div className="h-32"></div>
            <div className="flex flex-col items-center justify-center text-center">
                <p>Smart Watches</p>
                <p className="inline p-2 text-red-500 rounded-2xl bg-red-700/10 font-medium"></p>
            </div>
        </div>
    )
}