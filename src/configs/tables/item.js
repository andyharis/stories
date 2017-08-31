import {TextInputTypeConfig, DateTypeConfig, DropdownTypeConfig, RelationTypeConfig} from 'components/types';
import product from './product';
const {attributes: {bStockItem}} = product;
export default {
  table: 'item',
  attributes: {
    sName: {
      ...TextInputTypeConfig,
      attribute: 'sName',
      label: "name item",
    },
    // date: {
    //   ...DateTypeConfig,
    //   attribute: 'date',
    //   label: "test date",
    //   format: "YYYY/MM/DD",
    // },
    // dropdown: {
    //   ...DropdownTypeConfig,
    //   attribute: 'dropdown',
    //   label: "test dropdown",
    // },
    product: {
      showGroup: true,
      label: 'Product Group',
      // bPrice,//: {...bPrice, label: 'Hui'},
      attributes: {
        bStockItem,
      }
    }
  },
}
