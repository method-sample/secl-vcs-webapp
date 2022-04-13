import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./Layout";
import { EquipmentDataPage } from "./pages/electronical/EquipmentDataPage";
import { ItemFormatSetttingPage } from "./pages/electronical/ItemFormatSetttingPage";
import { LoadDataPage } from "./pages/electronical/LoadDataPage";
import { StandardTemplatePage } from "./pages/electronical/StandardTemplatePage";
export function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route
            path="electronical/standard_template"
            element={<StandardTemplatePage />}
          />
          <Route
            path="electronical/item_format_settting"
            element={<ItemFormatSetttingPage />}
          />
          <Route path="electronical/load_data" element={<LoadDataPage />} />
          <Route
            path="electronical/equipment_data"
            element={<EquipmentDataPage />}
          />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
