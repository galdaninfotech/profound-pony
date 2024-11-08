import { component$ } from '@builder.io/qwik';
import { QwikLogo } from '../icons/qwik';
import styles from './header.module.css';

export default component$(() => {
  return (
    <header class={styles.header}>
      <div class={['container', styles.wrapper]}>
        <div class={styles.logo}>
          <a href="/" title="qwik">
            <QwikLogo height={50} width={143} />
          </a>
        </div>
        <ul>
          <li>
            <a href="/" class="hover:text-blue-500">Home</a>
          </li>
          <li>
            <a href="/contact" class="hover:text-blue-500">Contact</a>
          </li>
          <li>
            <a
              href="https://qwik.dev/docs/components/overview/"
              target="_blank"
              class="hover:text-blue-500"
            >
              Docs
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
});