export default function Recommended() {
    let items = [];
    for (let i = 1; i <= 4; i++) {
        items.push(<Item key={i} />);
      }
    return (
        <div className="mt-3">
            <h1 className="text-2xl font-medium">Recommended items</h1>
            <div className="grid grid-cols-2 gap-2 p-3">
                {items}
            </div>
            
        </div>
    )
}

export function Item({className}) {
    return (
        <div className={`p-2 bg-white border rounded border-slate-200 ${className}`}>
            <div className="h-48"></div>
            <p className="font-medium">$10.30</p>
            <p className="text-sm text-slate-400">T-shirts with multiple colors, for men</p>
        </div>
    )
}