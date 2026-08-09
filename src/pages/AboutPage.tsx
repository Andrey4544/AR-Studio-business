/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import About from '../components/About';
import PageTransition from '../components/PageTransition';

export default function AboutPage() {
  React.useEffect(() => {
    document.title = 'За нас | AR Studio - Уеб дизайн и разработка';
  }, []);

  return (
    <PageTransition>
      <About />
    </PageTransition>
  );
}
