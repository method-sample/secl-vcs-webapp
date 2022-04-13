import { ItemFormat } from "../ItemFormatSettingView.stores";

type ItemFormatSumViewProps = ItemFormat;
// interface ItemFormatSumViewProps extends ItemFormat {
//   //
// }

export function ItemFormatSumView(props: ItemFormatSumViewProps) {
  const {} = props;
  return (
    <tr className="table-active text-primary">
      <td>SUM</td>
      <td>00</td>
      <td>00</td>
      <td>00</td>
      <td>00</td>
      <td>00</td>
      <td>00</td>
      <td>00</td>
      <td>00</td>
      <td>00</td>
      <td>00</td>
      <td></td>
    </tr>
  );
}
