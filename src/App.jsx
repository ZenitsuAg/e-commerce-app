import Counter from "./Components/Counter"
import Header from "./Components/Header"
import Input from "./Components/Input"
import NavBar from "./Components/Navbar"
import Products from "./Components/Produts"
import Recommended from "./Components/Recommended"

function App() {
  return (
    <>
      <Header>
        <NavBar />
        <Input />
      </Header>
      <main className="font-inter bg-slate-100">
        <section className="flex items-center justify-between p-5 bg-white">
          <div>
            <h1 className="text-xl font-bold">Deals and offers</h1>
            <p>Electronic equipments</p>
          </div>
          <div className="flex gap-2">
            <Counter num={13} unit={"Hour"} />
            <Counter num={34} unit={"Min"} />
            <Counter num={56} unit={"Sec"} />
          </div>
        </section>

        <section>
            <Products />
            <div className="text-white bg-gradient-to-r from-blue-500/50 p-7 py-8 mt-3">
                <p className="font-medium">An easy way to send request to all suppliers</p>
                <button className="bg-sky-500 p-1 rounded-lg mt-4">Send inquiry</button>
            </div>

           <Recommended />
        </section>

      </main>
    </>
    
  )
}
export default App
