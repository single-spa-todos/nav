import * as singleSpa from 'single-spa';
import style from './root.module.css';

export default function Root(props) {
  const redirect = (path) => {
    singleSpa.navigateToUrl(path);
  };
  return (
    <div>
      <ul class={style.ul}>
        <li onClick={() => redirect('/todos')}>Todos</li>
        <li onClick={() => redirect('/users')}>Users</li>
      </ul>
    </div>
  );
}
