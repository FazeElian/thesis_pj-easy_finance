import React from 'react'

// Header component
import Header from '../components/Header'

// Styles for this component
import "../assets/sass/views/BuyAndSaveView.scss";

// Images - icons
  // People
  import People from "../assets/img/BuyAndSaveView/people.webp";

// Items
import Items from '../assets/js/BuyAndSaveItems';

const BuyAndSaveView = () => {
  return (
    <>
      {/* Header */}
      <Header 
        bgColor="bg-blue-low-opacity" 
        btnColor="bg-blue"
        bderColor="bder-blue-3"
      />
      
      <main className="py-top">
        <section className="bg--buy-and-save">
          <div className="cont-img--buy-and-save">
            <img src={People} alt="" />
          </div>
          <div className="cont-list-prods--buy-and-save">
            <div className="list-prods--buy-and-save flex-column">
              <div className="title-list-prods--buy-and-save">
                <h1>Lista de <br /> Compras</h1>
              </div>
              <table className="table-prods--buy-and-save flex-column">
                <thead className="th-table-prods--buy-and-save">
                  <tr className="table-prods-w-75">Producto</tr>
                  <tr className="table-prods-w-25">Precio</tr>
                </thead>

                {/* Items */}
                {Items.map ((item) => (
                  <tbody className="tb-table-prods--buy-and-save" key={item.id}>
                    <td className="tb-item-table-prods--buy-and-save">
                      <div className="table-prods-w-75">
                        <input type="checkbox" name={item.id} id="slct-prod" />
                        {item.name} 
                      </div>
                      <div className="table-prods-w-25">
                        {item.price}
                      </div>
                    </td>
                  </tbody>
                ))}
              </table>

              <div className="balance--buy-and-save">
                <h2>Saldo: <h3>10000 $</h3></h2>
              </div>

              <div className="cont-btn-pay--buy-and-save">
                <button className="btn-pay--buy-and-save">Pagar</button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default BuyAndSaveView