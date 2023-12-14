import { Child1 } from "./components/Child1";
import { Child2 } from "./components/Child2";
import { Child3 } from "./components/Child3";
import FirstContextProvider from "./FirstContent";

function App() {
    
    return(
        <section>
            <FirstContextProvider>
                <Child1 />
                <Child2 />
                <Child3 />
            </FirstContextProvider>
        </section>
    )
}

export default App;
