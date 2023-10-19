export default function NavBar() {
    return(
        <nav className="py-5 text-5xl">
          <div className="flex items-center justify-between">
            <div>
                <span className="cursor-pointer">&equiv;</span>
                <i class="fa-solid fa-bag-shopping fa-2xs" style={{color: "#74c0fc"}}></i>
                <p id="logo" className="inline-block text-4xl font-extrabold text-sky-500/60">Brand</p>
            </div>
            <div id="other-icons">
              <i class="fa-solid fa-cart-shopping fa-2xs"></i>
              <i class="fa-regular fa-user fa-2xs"></i>
            </div>
          </div>
        </nav>
    )
}