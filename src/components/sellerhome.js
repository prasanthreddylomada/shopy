import React, { Component } from 'react';
import './SellerHome.css';
import SellerProduct from './sellerproducts';
import Customer from './customer';
import SellerTopnav from './sellertopnav';

class SellerHome extends Component {
    state = {
        clickedProductId: null,
    };

    sellerproducts = [
        {
            id:1,
            imageUrl: 'https://imgs.search.brave.com/UhTqkdoyNgdA_Xcwbcl2kWQHQS8WvufoKWQDkTnoawI/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pLmV0/c3lzdGF0aWMuY29t/LzExMjQ5MjM5L3Iv/aWwvNGM2YWZhLzQ4/ODcyNTE5MTMvaWxf/NjAweDYwMC40ODg3/MjUxOTEzX3NnNXMu/anBn',
            name: 'Product 1',
            size: 'Medium',
            price: 20,
            category: 'Shirts',
            sales:'10'
        },
        {
            id:2,
            imageUrl: 'https://imgs.search.brave.com/UhTqkdoyNgdA_Xcwbcl2kWQHQS8WvufoKWQDkTnoawI/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pLmV0/c3lzdGF0aWMuY29t/LzExMjQ5MjM5L3Iv/aWwvNGM2YWZhLzQ4/ODcyNTE5MTMvaWxf/NjAweDYwMC40ODg3/MjUxOTEzX3NnNXMu/anBn',
            name: 'Product 1',
            size: 'Medium',
            price: 20,
            category: 'Shirts',
            sales:'15'
            },
            {
            id:3,
            imageUrl: 'https://imgs.search.brave.com/UhTqkdoyNgdA_Xcwbcl2kWQHQS8WvufoKWQDkTnoawI/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pLmV0/c3lzdGF0aWMuY29t/LzExMjQ5MjM5L3Iv/aWwvNGM2YWZhLzQ4/ODcyNTE5MTMvaWxf/NjAweDYwMC40ODg3/MjUxOTEzX3NnNXMu/anBn',
            name: 'Product 1',
            size: 'Medium',
            price: 20,
            category: 'Shirts',
            sales:'10'
        },
        {
            id:4,
            imageUrl: 'https://imgs.search.brave.com/UhTqkdoyNgdA_Xcwbcl2kWQHQS8WvufoKWQDkTnoawI/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pLmV0/c3lzdGF0aWMuY29t/LzExMjQ5MjM5L3Iv/aWwvNGM2YWZhLzQ4/ODcyNTE5MTMvaWxf/NjAweDYwMC40ODg3/MjUxOTEzX3NnNXMu/anBn',
            name: 'Product 1',
            size: 'Medium',
            price: 20,
            category: 'Shirts',
            sales:'15'
            },
            {
            id:5,
            imageUrl: 'https://imgs.search.brave.com/UhTqkdoyNgdA_Xcwbcl2kWQHQS8WvufoKWQDkTnoawI/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pLmV0/c3lzdGF0aWMuY29t/LzExMjQ5MjM5L3Iv/aWwvNGM2YWZhLzQ4/ODcyNTE5MTMvaWxf/NjAweDYwMC40ODg3/MjUxOTEzX3NnNXMu/anBn',
            name: 'Product 1',
            size: 'Medium',
            price: 20,
            category: 'Shirts',
            sales:'10'
        },
        {
            id:6,
            imageUrl: 'https://imgs.search.brave.com/UhTqkdoyNgdA_Xcwbcl2kWQHQS8WvufoKWQDkTnoawI/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pLmV0/c3lzdGF0aWMuY29t/LzExMjQ5MjM5L3Iv/aWwvNGM2YWZhLzQ4/ODcyNTE5MTMvaWxf/NjAweDYwMC40ODg3/MjUxOTEzX3NnNXMu/anBn',
            name: 'Product 1',
            size: 'Medium',
            price: 20,
            category: 'Shirts',
            sales:'15'
            },
            {
            id:7,
            imageUrl: 'https://imgs.search.brave.com/UhTqkdoyNgdA_Xcwbcl2kWQHQS8WvufoKWQDkTnoawI/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pLmV0/c3lzdGF0aWMuY29t/LzExMjQ5MjM5L3Iv/aWwvNGM2YWZhLzQ4/ODcyNTE5MTMvaWxf/NjAweDYwMC40ODg3/MjUxOTEzX3NnNXMu/anBn',
            name: 'Product 1',
            size: 'Medium',
            price: 20,
            category: 'Shirts',
            sales:'10'
        },
        {
            id:8,
            imageUrl: 'https://imgs.search.brave.com/UhTqkdoyNgdA_Xcwbcl2kWQHQS8WvufoKWQDkTnoawI/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pLmV0/c3lzdGF0aWMuY29t/LzExMjQ5MjM5L3Iv/aWwvNGM2YWZhLzQ4/ODcyNTE5MTMvaWxf/NjAweDYwMC40ODg3/MjUxOTEzX3NnNXMu/anBn',
            name: 'Product 1',
            size: 'Medium',
            price: 20,
            category: 'Shirts',
            sales:'15'
            },
    ];

    customers = [
        {
            customerid:'1',
            purchases:[1],
            imageurl:'https://imgs.search.brave.com/5nZjuhiVcfDbdmE3t0L62RDU4HuIw9Wbej4KGq-NYco/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9idWZm/ZXIuY29tL2xpYnJh/cnkvY29udGVudC9p/bWFnZXMvMjAyMi8w/My9hbWluYS5wbmc',
            totalcost:'1100'
        },
        {
            customerid:'2',
            purchases:[1,2],
            imageurl:'https://imgs.search.brave.com/5nZjuhiVcfDbdmE3t0L62RDU4HuIw9Wbej4KGq-NYco/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9idWZm/ZXIuY29tL2xpYnJh/cnkvY29udGVudC9p/bWFnZXMvMjAyMi8w/My9hbWluYS5wbmc',
            totalcost:'1100'
        },
        {
            customerid:'3',
            purchases:[3],
            imageurl:'https://imgs.search.brave.com/5nZjuhiVcfDbdmE3t0L62RDU4HuIw9Wbej4KGq-NYco/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9idWZm/ZXIuY29tL2xpYnJh/cnkvY29udGVudC9p/bWFnZXMvMjAyMi8w/My9hbWluYS5wbmc',
            totalcost:'1100'
        },
        {
            customerid:'1',
            purchases:[4],
            imageurl:'https://imgs.search.brave.com/5nZjuhiVcfDbdmE3t0L62RDU4HuIw9Wbej4KGq-NYco/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9idWZm/ZXIuY29tL2xpYnJh/cnkvY29udGVudC9p/bWFnZXMvMjAyMi8w/My9hbWluYS5wbmc',
            totalcost:'1100'
        },
        {
            customerid:'2',
            purchases:[5],
            imageurl:'https://imgs.search.brave.com/5nZjuhiVcfDbdmE3t0L62RDU4HuIw9Wbej4KGq-NYco/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9idWZm/ZXIuY29tL2xpYnJh/cnkvY29udGVudC9p/bWFnZXMvMjAyMi8w/My9hbWluYS5wbmc',
            totalcost:'1100'
        },
        {
            customerid:'3',
            purchases:[2,6],
            imageurl:'https://imgs.search.brave.com/5nZjuhiVcfDbdmE3t0L62RDU4HuIw9Wbej4KGq-NYco/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9idWZm/ZXIuY29tL2xpYnJh/cnkvY29udGVudC9p/bWFnZXMvMjAyMi8w/My9hbWluYS5wbmc',
            totalcost:'1100'
        },
        {
            customerid:'4',
            purchases:['2'],
            imageurl:'https://imgs.search.brave.com/5nZjuhiVcfDbdmE3t0L62RDU4HuIw9Wbej4KGq-NYco/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9idWZm/ZXIuY29tL2xpYnJh/cnkvY29udGVudC9p/bWFnZXMvMjAyMi8w/My9hbWluYS5wbmc',
            totalcost:'1100'
        },
        {
            customerid:'5',
            purchases:['2','8'],
            imageurl:'https://imgs.search.brave.com/5nZjuhiVcfDbdmE3t0L62RDU4HuIw9Wbej4KGq-NYco/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9idWZm/ZXIuY29tL2xpYnJh/cnkvY29udGVudC9p/bWFnZXMvMjAyMi8w/My9hbWluYS5wbmc',
            totalcost:'1100'
        },
    ];

    handleProductClick = (productId) => {
        console.log(`Product with id ${productId} was clicked.`);
        this.setState({ clickedProductId: productId });
    };

    render() {
        const { clickedProductId } = this.state;
        const customersWithProduct = this.customers.filter(customer => {
            for (const purchase of customer.purchases) {
                console.log('purchases',purchase);
                console.log('productid',clickedProductId);
                if (purchase == clickedProductId) {
                    return true;
                }
            }
            return false;
        });
        return (
            <div>
                <SellerTopnav
                    logoUrl="https://imgs.search.brave.com/5nZjuhiVcfDbdmE3t0L62RDU4HuIw9Wbej4KGq-NYco/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9idWZm/ZXIuY29tL2xpYnJh/cnkvY29udGVudC9p/bWFnZXMvMjAyMi8w/My9hbWluYS5wbmc"
                    profilePhotoUrl="https://imgs.search.brave.com/5nZjuhiVcfDbdmE3t0L62RDU4HuIw9Wbej4KGq-NYco/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9idWZm/ZXIuY29tL2xpYnJh/cnkvY29udGVudC9p/bWFnZXMvMjAyMi8w/My9hbWluYS5wbmc"
                    coins={100}
                />  
                <div className='main-container'>
                    <div className='left'>
                        <h1>Your Products</h1>
                        <div className='sold-product-row'>
                            {this.sellerproducts.map((product) => (
                                <SellerProduct
                                    key={product.id}
                                    imageUrl={product.imageUrl}
                                    name={product.name}
                                    size={product.size}
                                    price={product.price}
                                    sales={product.sales}
                                    onClick={() => this.handleProductClick(product.id)}
                                />
                            ))}
                        </div>
                    </div>
                    <div className='right'>
                    <h1 className='ali'>Product Customers</h1>
                    <div className='customer-product-row'>
                        {customersWithProduct.map((customer) => (
                            <Customer
                                key={customer.customerid}
                                customerid={customer.customerid}
                                purchases={customer.purchases}
                                imageurl={customer.imageurl}
                                totalcost={customer.totalcost}
                            />
                        ))}
                    </div>
                </div>
                </div>
            </div>
        );
    }
}

export default SellerHome;
