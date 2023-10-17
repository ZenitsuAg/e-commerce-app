import Tags from "./Tags";

export default function Header({ children }) {
    return (
        <header className="p-5 font-inter">
            {children}
            <div className="flex gap-1 py-3 mt-3 overflow-scroll">
                <Tags tag={'All Category'} />
                <Tags tag={'Gadgets'} />
                <Tags tag={'Clothes'} />
                <Tags tag={'Accessories'} />
                <Tags tag={'Tablets'} />
                <Tags tag={'Phones'} />
            </div>
        </header>
    )
}