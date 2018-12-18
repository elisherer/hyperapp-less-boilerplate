import { h } from 'hyperapp';
import LoginForm from './LoginForm';
import { isLoggedIn } from "actions/login";
import Modal from './Modal';
import './App.less';

export default () => (state, actions) => {

  return (
    <div data-name="App">
      <LoginForm />

      {isLoggedIn(state) && <Modal onRequestClose={actions.login.logout}>You successfully logged in!</Modal>}
    </div>
  );
}