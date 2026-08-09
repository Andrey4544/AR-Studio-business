/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import Testimonials from '../components/Testimonials';
import PageTransition from '../components/PageTransition';

export default function TestimonialsPage() {
  React.useEffect(() => {
    document.title = 'Отзиви | AR Studio - Клиентски мнения';
  }, []);

  return (
    <PageTransition>
      <Testimonials />
    </PageTransition>
  );
}
