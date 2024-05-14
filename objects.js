let products = {
  product_id: 1,
  product_name: "Facial Cleansing Foam",
  quantity_in_stock: 1750,
  unit_price: 199,
  product_description: {
    product_brand: "Hada labo",
    size_or_quantity: "100 ml.",
    taste_or_scent: "No fragrance",
    colour: "No colour",
    additional_description: "No paraben, No SLS",
  },
};
console.log("Product ID =", products.product_id);
console.log("Product Name =", products.product_name);
console.log("Quantity in Stock =", products.quantity_in_stock, "Each");
console.log("Unit Price =", products.unit_price, "Bath");
console.log("Product Description;");
console.log("  Brand =", products.product_description.product_brand);
console.log("  Size =", products.product_description.size_or_quantity);
console.log("  Scent =", products.product_description.taste_or_scent);
console.log("  Colour =", products.product_description.colour);
console.log(
  "  Additional Description =",
  products.product_description.additional_description
);
