import Item from './components/index'
import Card from './components/Card/index'

const App = () => {
  return (
    <>
      <h1> Primeira aplicação com React! =D </h1>
      <ul>
        <Item>Lista Vazia</Item>
        <Item>Lista vazia</Item>
        <Item>Lista vazia</Item>
      </ul>
      <Card />
    </>
  )
}

export default App
