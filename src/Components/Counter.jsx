export default function Counter({ num, unit }) {
    return (
        <div className="flex flex-col w-12 p-2 text-center sm:w-16 bg-slate-100 text-slate-500">
            <h1><strong>{num}</strong></h1>
            <span>{unit}</span>
        </div>
    );
}
