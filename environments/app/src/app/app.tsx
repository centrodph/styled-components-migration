import React from 'react';
import styles from './app.module.css';
import { Button as ButtonVanillaExtract } from '@centrodphlibs/button-vanilla-extract';
import { Button as ButtonLinaria } from '@centrodphlibs/button-linaria';
import { Button as ButtonLinariaStyled } from '@centrodphlibs/button-linaria-styled';
import { Button as ButtonCssModules } from '@centrodphlibs/button-css-modules';
import { Button as ButtonTailwind } from '@centrodphlibs/button-tailwind';
import '@centrodphlibs/button-css-modules/style.css';
import '@centrodphlibs/button-linaria/style.css';
import '@centrodphlibs/button-linaria-styled/style.css';
import '@centrodphlibs/button-vanilla-extract/style.css';
import '@centrodphlibs/vanilla-extract-theme/style.css';
import '@centrodphlibs/linaria-theme/style.css';
import '@centrodphlibs/css-modules-theme/style.css';




export function App() {
  return (
    <>

      {/* Button Showcase Section */}
      <div className={styles['button-showcase']}>
        <h2 className={styles['showcase-title']}>Button Components Showcase</h2>

        {/* Vanilla Extract Showcase */}
        <div className={styles['showcase-section']}>
          <h3 className={styles['section-title']}>Vanilla Extract Styling</h3>
          <p className={styles['section-description']}>
            Type-safe, zero-runtime CSS-in-TypeScript
          </p>
          <div className={styles['button-group']}>
            <ButtonVanillaExtract variant="primary" size="small" p="s">
              Primary Small
            </ButtonVanillaExtract>
            <ButtonVanillaExtract variant="primary" size="medium">
              Primary Medium
            </ButtonVanillaExtract>
            <ButtonVanillaExtract variant="primary" size="large">
              Primary Large
            </ButtonVanillaExtract>
            <ButtonVanillaExtract variant="secondary">
              Secondary
            </ButtonVanillaExtract>
            <ButtonVanillaExtract variant="outline">
              Outline
            </ButtonVanillaExtract>
            <ButtonVanillaExtract variant="ghost">Ghost</ButtonVanillaExtract>
            <ButtonVanillaExtract variant="primary" disabled>
              Disabled
            </ButtonVanillaExtract>
          </div>
        </div>

        {/* Linaria Showcase */}
        <div className={styles['showcase-section']}>
          <h3 className={styles['section-title']}>Linaria Styling</h3>
          <p className={styles['section-description']}>
            Zero-runtime CSS-in-JS with compile-time extraction
          </p>
          <div className={styles['button-group']}>
            <ButtonLinaria variant="primary" size="small">
              Primary Small
            </ButtonLinaria>
            <ButtonLinaria variant="primary" size="medium">
              Primary Medium
            </ButtonLinaria>
            <ButtonLinaria variant="primary" size="large">
              Primary Large
            </ButtonLinaria>
            <ButtonLinaria variant="secondary">Secondary</ButtonLinaria>
            <ButtonLinaria variant="outline">Outline</ButtonLinaria>
            <ButtonLinaria variant="ghost">Ghost</ButtonLinaria>
            <ButtonLinaria variant="primary" disabled>
              Disabled
            </ButtonLinaria>
          </div>
        </div>

        {/* Linaria Styled Showcase */}
        <div className={styles['showcase-section']}>
          <h3 className={styles['section-title']}>Linaria Styled Function</h3>
          <p className={styles['section-description']}>
            Zero-runtime CSS-in-JS using Linaria's styled function
          </p>
          <div className={styles['button-group']}>
            <ButtonLinariaStyled variant="primary" size="small">
              Primary Small
            </ButtonLinariaStyled>
            <ButtonLinariaStyled variant="primary" size="medium">
              Primary Medium
            </ButtonLinariaStyled>
            <ButtonLinariaStyled variant="primary" size="large">
              Primary Large
            </ButtonLinariaStyled>
            <ButtonLinariaStyled variant="secondary">Secondary</ButtonLinariaStyled>
            <ButtonLinariaStyled variant="outline">Outline</ButtonLinariaStyled>
            <ButtonLinariaStyled variant="ghost">Ghost</ButtonLinariaStyled>
            <ButtonLinariaStyled variant="primary" disabled>
              Disabled
            </ButtonLinariaStyled>
          </div>
        </div>

        {/* CSS Modules Showcase */}
        <div className={styles['showcase-section']}>
          <h3 className={styles['section-title']}>CSS Modules Styling</h3>
          <p className={styles['section-description']}>
            Traditional CSS modules with scoped styling
          </p>
          <div className={styles['button-group']}>
            <ButtonCssModules variant="primary" size="small">
              Primary Small
            </ButtonCssModules>
            <ButtonCssModules variant="primary" size="medium">
              Primary Medium
            </ButtonCssModules>
            <ButtonCssModules variant="primary" size="large">
              Primary Large
            </ButtonCssModules>
            <ButtonCssModules variant="secondary">Secondary</ButtonCssModules>
            <ButtonCssModules variant="outline">Outline</ButtonCssModules>
            <ButtonCssModules variant="ghost">Ghost</ButtonCssModules>
            <ButtonCssModules variant="primary" disabled>
              Disabled
            </ButtonCssModules>
          </div>
        </div>

        {/* Tailwind CSS Showcase */}
        <div className={styles['showcase-section']}>
          <h3 className={styles['section-title']}>Tailwind CSS Styling</h3>
          <p className={styles['section-description']}>
            Utility-first CSS framework with zero runtime
          </p>
          <div className={styles['button-group']}>
            <ButtonTailwind variant="primary" size="small">
              Primary Small
            </ButtonTailwind>
            <ButtonTailwind variant="primary" size="medium">
              Primary Medium
            </ButtonTailwind>
            <ButtonTailwind variant="primary" size="large">
              Primary Large
            </ButtonTailwind>
            <ButtonTailwind variant="secondary">Secondary</ButtonTailwind>
            <ButtonTailwind variant="outline">Outline</ButtonTailwind>
            <ButtonTailwind variant="ghost">Ghost</ButtonTailwind>
            <ButtonTailwind variant="primary" disabled>
              Disabled
            </ButtonTailwind>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
