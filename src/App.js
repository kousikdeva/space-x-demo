import RouterView from "./router/RouterView"
import './style/styles.css'
import { Suspense } from "react"
import store from "./redux/store"
import { Provider } from "react-redux"

function App() {
  return (
    <div>
      <Suspense fallback={<p>Fetching user details...</p>}>
        <Provider store={store}>
          <RouterView />
        </Provider>
      </Suspense>
    </div>
  )
}

export default App
