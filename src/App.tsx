/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { GettingStarted } from './pages/GettingStarted';
import { OpenClawQuickStart } from './pages/OpenClawQuickStart';
import { OpenClawTroubleshooting } from './pages/OpenClawTroubleshooting';
import { OpenCodeConfig } from './pages/OpenCodeConfig';
import { CCSwitchConfig } from './pages/CCSwitchConfig';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="getting-started" element={<GettingStarted />} />
          <Route path="openclaw/quickstart" element={<OpenClawQuickStart />} />
          <Route path="openclaw/troubleshooting" element={<OpenClawTroubleshooting />} />
          <Route path="opencode/config" element={<OpenCodeConfig />} />
          <Route path="ccswitch/config" element={<CCSwitchConfig />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
