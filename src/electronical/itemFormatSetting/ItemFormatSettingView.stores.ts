import { createStore } from "@methodjs/store";

export type ItemFormatSettingType = "EquipmentData" | "LoadData";

export interface ItemFormat {
  order: number;
}

export interface ItemFormatSetting {
  totalCount: number;
  type: ItemFormatSettingType;
  itemFormatArray: ItemFormat[];
  itemFormatSum: ItemFormat;
  itemFormatAverage: ItemFormat;
  itemFormatMaximum: ItemFormat;
  itemFormatMinumum: ItemFormat;
}

export function intitializeItemFormat(): ItemFormat {
  return { order: 0 };
}

export function initializeItemFormatSetting(): ItemFormatSetting {
  return {
    totalCount: 0,
    type: "EquipmentData",
    itemFormatArray: [],
    itemFormatSum: intitializeItemFormat(),
    itemFormatAverage: intitializeItemFormat(),
    itemFormatMaximum: intitializeItemFormat(),
    itemFormatMinumum: intitializeItemFormat(),
  };
}

export const [
  useItemFormatSetting,
  setItemFormatSetting,
  getItemFormatSetting,
] = createStore<ItemFormatSetting>(initializeItemFormatSetting);
