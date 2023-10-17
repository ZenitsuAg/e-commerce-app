export default function Input() {
    return (
        <div className="pl-3 border rounded-lg bg-slate-100 border-slate-300">
            <i
                class="fa-solid fa-magnifying-glass fa-xl"
                style={{ color: "#888a85" }}
            ></i>
            <input
                type="text"
                name="search"
                id="search"
                placeholder="Search"
                className="p-2 text-xl w-fit bg-slate-100 outline-none md:w-full"
            />
        </div>
    );
}
