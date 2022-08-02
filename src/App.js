import RouterView from "./router/RouterView"
import './style/styles.css'
import { Suspense } from "react"

function App() {
  return (
    <div>
      <Suspense fallback={<p>Fetching user details...</p>}>
      <RouterView />
      </Suspense>
    </div>
  )
}

export default App
