import { useId } from "react";

function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectCurrency = "usd",
    amountDisable = false,
    currencyDisable = false,

    className = "",
}) {
  const amountInputId = useId();

    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className} `}>
            <div className="w-1/2">
                <label className="text-black/40 mb-2 inline-block" htmlFor={amountInputId}>
                    {label}
                </label>
                <input
                    id={amountInputId}
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    disabled={amountDisable}
                    value={amount}
                    onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={selectCurrency} onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                    disabled={currencyDisable}

                >

                    {
                        currencyOptions.map((currency) => (
                            <option key={currency} value={currency}>
                               {currency}
                            </option>
                        ))
                    }

                </select>
            </div>
        </div>
    );
}

export default InputBox;


// select box manage
// import React, { useState } from "react";

// const CurrencyConverter = () => {
//     const [value, setValue] = useState("")

//     const handleSubmit = (e) =>{
//         e.preventDefault();
//         console.log(value)

//     }

//   return (
//     <>
//       <h1>this is currency convertor</h1>
//       <form onSubmit={handleSubmit}>
//         <select value={value} onChange={(e)=>setValue(e.target.value)} >
//         <option disabled value="">select a value</option>
//           <option value="someOption">some option</option>
//           <option value="otherOption1">Other option1</option>
//           <option value="otherOption2">Other option2</option>
//           <option value="otherOption3">Other option3</option>
//           <option value="otherOption4">Other option4</option>
//           <option value="otherOption5">Other option5</option>
//         </select>
//         <button type="submit"  >submit</button>
//       </form>
//     </>
//   );
// };

// export default CurrencyConverter;

