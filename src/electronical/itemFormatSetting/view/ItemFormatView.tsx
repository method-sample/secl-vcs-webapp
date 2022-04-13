import { ItemFormat } from "../ItemFormatSettingView.stores";

interface ItemFormatViewProps extends ItemFormat {}

export function ItemFormatView(props: ItemFormatViewProps) {
  const {} = props;
  return (
    <tr>
      <td>
        <i class="mdi mdi-menu align-middle"></i>
      </td>
      <td>text</td>
      <td>text</td>
      <td>text</td>
      <td>text</td>
      <td>text</td>
      <td>text</td>
      <td>text</td>
      <td>text</td>
      <td>text</td>
      <td>text</td>
      <td>
        <i class="mdi mdi-delete-outline align-middle text-danger"></i>
      </td>
    </tr>
  );
}
