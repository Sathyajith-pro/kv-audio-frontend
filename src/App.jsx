import './App.css'
import ProductCard from './components/productCard'

function App() {
 

  return (
    <>
    <ProductCard name ="Audio setup" price ="3225" 
    description = "kljsalksj kldjksdldskj" photoUrl = "data:image/jpeg;base64,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" />
    

    <ProductCard name ="Audio setup mini" price ="5000" 
    description = "Good product made in china" photoUrl = "https://img.drz.lazcdn.com/static/lk/p/ea26e67af1767575ecfcd5c4f09dfe11.png_200x200q80.png_.webp"/>
    
    </>
)
}
export default App
