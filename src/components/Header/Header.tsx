'use client';
import React from 'react';
import { Volume2, VolumeX } from 'react-feather';

import VisuallyHidden from 'src/components/VisuallyHidden';
import MaxWidthWrapper from 'src/components/MaxWidthWrapper';
import styles from './Header.module.css';
import {usePreferences} from "src/context/PreferencesProvider";

function Header() {
  const id = React.useId();

  const {muted, toggle} = usePreferences();

  return (
    <header className={styles.wrapper}>
      <MaxWidthWrapper
        className={styles.innerWrapper}
      >
        <a href="/">Kool Website</a>

        <button
          onClick={toggle}
        >
          {!muted ? (
            <Volume2 />
          ) : (
            <VolumeX />
          )}
          <VisuallyHidden>
            {!muted
              ? 'Disable sound effects'
              : 'Enable sound effects'}
          </VisuallyHidden>
        </button>
      </MaxWidthWrapper>
    </header>
  );
}

export default Header;
