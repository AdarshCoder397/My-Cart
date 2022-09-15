import React from "react";
class AddItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productName: "",
      price: "",
    };
  }
  state = {};
  render() {
    return (
      <>
        <form
          className="row mb-5"
          onSubmit={(e) => {
            console.log("Heloow")
            e.preventDefault();
            this.props.addItem(this.state.productName,this.state.price);
          }}
        >
          <div className="mb-3 col-6">
            <label htmlFor="inputName" className="form-label">
              Product Name
            </label>
            <input
              type="text"
              className="form-control"
              id="inputName"
              aria-describedby="name"
              name="productName"
              onChange={(e) => {
                this.setState({ productName: e.currentTarget.value });
              }}
              value={this.state.productName}
            />
          </div>
          <div className="mb-3 col-6">
            <label htmlFor="inputPrice" className="form-label">
              Price
            </label>
            <input
              type="number"
              className="form-control"
              id="price"
              name="price"
              onChange={(e) => {
                this.setState({ price: Number(e.currentTarget.value) });
              }}
              value={this.state.price}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Add Product
          </button>
        </form>
      </>
    );
  }
}

export default AddItem;
