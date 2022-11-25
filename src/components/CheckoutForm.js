import { useState } from "react";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import axios from "axios";

const CheckoutForm = ({ id, title, price }) => {
  const stripe = useStripe();
  const elements = useElements();

  const [completed, setCompleted] = useState(false);

  const handleSubmitPaiement = async (event) => {
    event.preventDefault();
    try {
      const cardElement = elements.getElement(CardElement);

      const stripeResponse = await stripe.createToken(cardElement, {
        name: id,
      });
      const stripeToken = stripeResponse.token.id;
      const response = await axios.post(
        "https://site--vinted-backend--b4q4rvkfdvcr.code.run/pay",
        {
          stripeToken,
          amount: price,
          title: title,
        }
      );

      if (response.data.status === "succeeded") {
        setCompleted(true);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const fraisAcheteur = price / 10;
  const fraisPort = fraisAcheteur * 2;

  return (
    <>
      {!completed ? (
        <div className="paiement-page">
          <form className="form-paiement" onSubmit={handleSubmitPaiement}>
            <h1>Résume de la commande</h1>
            <section className="total">
              <div className="detail-paiement">
                <span>Commande</span>
                <span>{price}</span>
              </div>
              <div className="detail-paiement">
                <span>Frais de protection acheteurs</span>
                <span>0.40 €</span>
              </div>
              <div className="detail-paiement">
                <span>Frais de port</span>
                <span>0.80 €</span>
              </div>
            </section>
            <section className="paiement">
              <div className="detail-paiement">
                <span>Total</span>
                <span>
                  {(
                    Number(price) +
                    Number(fraisAcheteur) +
                    Number(fraisPort)
                  ).toFixed(2)}{" "}
                  €
                </span>
              </div>
              <p>
                Il ne vous reste plus qu'un étape pour vous offrir {title}. Vous
                allez payer{" "}
                {(
                  Number(price) +
                  Number(fraisAcheteur) +
                  Number(fraisPort)
                ).toFixed(2)}{" "}
                € (Frais de protection et frais de port inclus)
              </p>
              <CardElement />
            </section>
            <div className="payer">
              {" "}
              <button>Payer</button>
            </div>
          </form>
        </div>
      ) : (
        <span>Paiement affectué!</span>
      )}
    </>
  );
};

export default CheckoutForm;
