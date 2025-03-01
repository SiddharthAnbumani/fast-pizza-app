import Header from './header'
import CartOverview from '../src/features/cart/CartOverview'

export default function AppLayout(){
  return (
    <div>
        <Header/>
        <main>
            <h1>This is main</h1>
        </main>

        <CartOverview />
    </div>
  )
}
