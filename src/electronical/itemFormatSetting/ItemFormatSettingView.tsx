import {
  onEquipmetnDataDropDownMenuClick,
  onLoadnDataDropDownMenuClick,
} from "./ItemFormatSettingView.events";
import { useItemFormatSetting } from "./ItemFormatSettingView.stores";
import { ItemFormatSumView } from "./view/ItemFormatSumView";
import { ItemFormatView } from "./view/ItemFormatView";

export function ItemFormatSettingView() {
  const { totalCount, itemFormatArray, itemFormatSum, type } =
    useItemFormatSetting();
  return (
    <>
      <div className="row">
        <div className="col-12 title">
          <div className="page-title-box clearfix">
            <div className="btn-group pro-tit">
              <ul className="clearfix main-pro-tit sts-tit">
                <li>
                  <button
                    className="btn btn-outline-primary btn-md"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    {type === "EquipmentData" && <>Equipment Data</>}
                    {type === "LoadData" && <>Load Data</>}
                    <i className="mdi mdi-chevron-down d-none d-sm-inline-block align-middle"></i>
                  </button>
                  <div className="dropdown-menu">
                    <a
                      className="dropdown-item"
                      href="#"
                      onClick={onEquipmetnDataDropDownMenuClick}
                    >
                      {" "}
                      Equipment Data
                    </a>
                    <a
                      className="dropdown-item"
                      href="#"
                      onClick={onLoadnDataDropDownMenuClick}
                    >
                      Load Data
                    </a>
                  </div>
                  <button
                    className="btn btn-outline-primary btn-md"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Item
                    <i className="mdi mdi-chevron-down d-none d-sm-inline-block align-middle"></i>
                  </button>
                  <div className="dropdown-menu">
                    <a className="dropdown-item" href="#">
                      LV SWGR/MCC
                    </a>
                    <a className="dropdown-item" href="#">
                      text
                    </a>
                    <a className="dropdown-item" href="#">
                      text
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="card-body table-com">
        <div className="table-top-btn">
          <ul className="btn-area clearfix">
            <li className="table-btn-l">
              <button type="button" className="btn btn-info">
                Load Template
              </button>
              <button type="button" className="btn btn-info">
                Load User Defined Attr.
              </button>
              <button type="button" className="btn btn-info">
                Add Attr.
              </button>
            </li>
            <li className="table-btn-r">
              <button type="button" className="btn btn-secondary distance">
                Save User Defined Attr.
              </button>
              <button type="button" className="btn btn-secondary">
                Save Item Format
              </button>
            </li>
          </ul>
        </div>
        <div className="dataTables_info" id="basic-datatable_info">
          count:{totalCount}
        </div>
        <table className="table table-centered mb-0 table-de item-set">
          <thead>
            <tr className="table-light">
              <th></th>
              <th>text</th>
              <th>text</th>
              <th>text</th>
              <th>text</th>
              <th>text</th>
              <th>text</th>
              <th>text</th>
              <th>text</th>
              <th>text</th>
              <th>text</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {itemFormatArray.map((itemFormat, index) => (
              <ItemFormatView key={index} {...itemFormat} />
            ))}
            <ItemFormatSumView {...itemFormatSum} />
            <tr className="table-active text-primary">
              <td>AVG</td>
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
            <tr className="table-active text-primary">
              <td>MAX</td>
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
            <tr className="table-active text-primary">
              <td>MIN</td>
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
          </tbody>
        </table>
      </div>
    </>
  );
}
