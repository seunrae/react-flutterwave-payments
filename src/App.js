import './App.css';
import { FlutterWaveButton, closePaymentModal } from 'flutterwave-react-v3';

function App() {
  console.log(process.env.REACT_APP_PUBLIC_KEY)
  const email = "ademilua.oluseun@gmail.com"
  const phone_number = "08139904849"
  const name = "Ademilua Oluseun"


  const config = {
    public_key: process.env.REACT_APP_PUBLIC_KEY,
    tx_ref: Date.now(),
    amount: 100,
    currency: 'NGN',
    payment_options: 'card,mobilemoney,ussd',
    customer: {
      email,
      phone_number,
      name,
    },
    customizations: {
      title: 'Murasaki_',
      description: 'Payment for items in cart',
      logo: 'https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg',
    },
  };

  const fwConfig = {
    ...config,
    text: 'Pay with Flutterwave!',
    callback: (response) => {
       console.log(response);
      closePaymentModal() // this will close the modal programmatically
    },
    onClose: () => {},
  };

  return (
    <div className='justify-center items-center flex'>
      <div className='justify-center items-center flex'>
        <button className='rounded-md bg-green-400 hover:bg-green-300 p-5'><FlutterWaveButton {...fwConfig} /></button>
      </div>
    </div>
  );
}

export default App;
