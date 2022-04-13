import { setItemFormatSetting } from "./ItemFormatSettingView.stores";

export function onEquipmetnDataDropDownMenuClick() {
  setItemFormatSetting((value) => {
    return { ...value, type: "EquipmentData" };
  });
}

export function onLoadnDataDropDownMenuClick() {
  setItemFormatSetting((value) => {
    return { ...value, type: "LoadData" };
  });
}
