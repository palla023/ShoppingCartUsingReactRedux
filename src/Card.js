import React from 'react';
import { useState } from 'react';
import { connect } from 'react-redux';
import { AddProduct } from './actions';
import { RemoveProduct } from './actions';

const Card = ({ products, AddProduct, RemoveProduct }) => {
    const [item, setItem] = useState("");          //var to store our products
    const submitHandler = async e => {
        e.preventDefault();
        if (item !== "") {                          //check the input value is empty or not ,if not empty then only add product
            await AddProduct({ name: item });         //we have to dispatch the action with the user input
            setItem("");
        }
        setItem("");           //reset the input box
    }
    return (
        <center>
            <div class="card shadow" style={{ "width": "18rem" }}>
                <div class="card-body">
                    <form onSubmit={submitHandler}>
                        <input type="text" placeholder="Add Products" value={item} onChange={e => setItem(e.target.value)} /> <br />
                        <button type="submit" class="btn btn-success">
                            Add Product
                        </button>
                    </form>
                    <br />
                    {products.map(product => {      //products => the state values hydrate  //In Reducers for Filtering , product can be taken from here after map(hydrate) the data
                        return (
                            <div className="item"  >{product.name}
                                <span onClick={() => RemoveProduct(product.name)} class="badge square-pill bg-danger" style={{ "float": "right", "padding": "6px 10px 6px 10px" }}>
                                    X</span></div>     //we have to dispatch the action with the product.name for deletion
                        )
                    })}
                </div>
            </div>
        </center>
    )
}

const mapStateToProps = (state) => ({
    products: state
})

export default connect(mapStateToProps, { AddProduct, RemoveProduct })(Card);
