/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import FAQ from '../components/FAQ';
import PageTransition from '../components/PageTransition';

export default function FAQPage() {
  React.useEffect(() => {
    document.title = 'ЧЗВ | AR Studio - Често задавани въпроси';
  }, []);

  return (
    <PageTransition>
      <FAQ />
    </PageTransition>
  );
}
