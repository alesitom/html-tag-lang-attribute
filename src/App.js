import HtmlLangList from "./components/htmlLangCards/HtmlLangList";
import { htmlLangListDetail } from "./data"

function App() {
  return (
    <div className="bg-dark">
      <div className="container py-16 mx-auto">
          <h1 h1 className="text-6xl font-bold text-center font-recursive text-emerald-300">
            HTML Lang Attribute
          </h1>
      </div>
      <HtmlLangList list={htmlLangListDetail}/>
    </div>
  )
}

export default App;
