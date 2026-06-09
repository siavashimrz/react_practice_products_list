import ProductCategoryRow from "./ProductCategoryRow";
import ProductRow from "./ProductRow";

export default function ProductTable({ products, filterText, inStockOnly }) {
  let rows = [];

  function makeRows() {
    let lastCategory = null;
    products.map(({ category, price, stocked, name }) => {
      if (name.toLowerCase().indexOf(filterText.toLowerCase()) === -1) {
        return;
      }
      if (inStockOnly && !stocked) {
        return;
      }
      if (category !== lastCategory) {
        lastCategory = category;
        rows.push(
          <ProductCategoryRow categoryName={category} key={category} />
        );
      }
      rows.push(
        <ProductRow name={name} price={price} stocked={stocked} key={name} />
      );
    });
    return rows;
  }
  return (
    <>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{makeRows()}</tbody>
    </>
  );
}
