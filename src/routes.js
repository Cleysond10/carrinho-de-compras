import Carrinho from 'pages/Carrinho';
import Feira from 'pages/Feira';
import Login from 'pages/Login';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { UsusarioProvider } from 'common/context/Ususario';
import { CarrinhoProvider } from 'common/context/Carrinho';

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <UsusarioProvider>
          <Route exact path='/'>
            <Login />
          </Route>
          <CarrinhoProvider>
            <Route path='/feira'>
              <Feira />
            </Route>
            <Route path='/carrinho'>
              <Carrinho />
            </Route>
          </CarrinhoProvider>
        </UsusarioProvider>
      </Switch>
    </BrowserRouter>
  )
}
export default Router;