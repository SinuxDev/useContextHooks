import { useState } from "react";
import { Child1 } from "./components/Child1";

function App() {
    const [username,setUsername] = useState("Shin")

    return(
        <section>
            <h1>Hello</h1>
            <Child1 userName = {username} />
        </section>
    )
}

export default App;
