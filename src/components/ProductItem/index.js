import React from 'react';
import { Link } from 'react-router-dom';
import ReactStars from 'react-stars';

const textCrop = (str, n) => {
  return str.length > n ? str.substr(0, n - 1) + '...' : str;
};

const ProductItem = (props) => {
  return (
    <div className="card">
      <div className="flex flex-col h-full justify-between">
        <div>
          <div className="flex items-center justify-center pt-2">
            <Link href={`/product/${props.id}`}>
              <img
                src={props.image}
                alt={props.title}
                className="object-contain max-h-80 hover:scale-110"
              />
            </Link>
          </div>
          <div className="flex flex-col p-5">
            <div>
              <Link href={`/product/${props.id}`}>
                <h2 className="text-lg font-bold text-blue-600 hover:underline">
                  {props.title}
                </h2>
              </Link>
              <div className="flex items-center text-blue-600">
                <ReactStars
                  value={props.rating}
                  size={25}
                  color2={'#14db14'}
                  edit={false}
                />
                <Link href="" className="flex hover:underline">
                  <p>{props.reviewCount}</p>
                  <p className="ml-1">reviews</p>
                </Link>
              </div>
              <div className="flex justify-between">
                <p className="font-bold">
                  Color:{' '}
                  <span className="font-normal text-gray-700">
                    {props.color}
                  </span>{' '}
                </p>
                {props.mobilememory !== null ? (
                  <p className="text-slate-500 underline decoration-dashed">
                    {props.mobilememory} storage
                  </p>
                ) : null}
              </div>
            </div>
            <div>
              <div className="flex justify-between">
                <div>
                  <span className="text-slate-600">Retail price: </span>
                  <span className="line-through text-slate-600">
                    {props.msrpPrice},-
                  </span>
                  <span className="font-bold"> {props.price},-</span>
                </div>
                <div>
                  {props.stock === 'inStock' ? (
                    <p>✔️ In stock</p>
                  ) : (
                    <p>Out of stock</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col p-5">
          {props.usp.length !== 0 ? (
            <div className="pl-6 pr-5">
              <ul className="list-disc text-xs leading-5">
                {props.usp.map((item) => {
                  return <li>{textCrop(item, 55)}</li>;
                })}
              </ul>
            </div>
          ) : null}
        </div>
        <div className="flex flex-col p-5">
          <div className="border-2 rounded-lg mt-4 p-3 text-xs leading-5">
            {props.storePromotions !== null ? (
              <div>
                <ul>
                  {props.storePromotions.map((item) => {
                    return <li>○ {textCrop(item.promotionText, 50)}</li>;
                  })}
                </ul>
              </div>
            ) : null}
            <ul>
              {props.localBenefitList.map((item) => {
                return <li>○ {item.localBenefitText}</li>;
              })}
            </ul>
          </div>
          <div className="flex flex-col mt-4">
            {props.stock === 'inStock' ? (
              <button
                className="primary-button hover:bg-zinc-700 active:bg-gray-500"
                type="button"
              >
                Add to cart
              </button>
            ) : (
              <button
                className="primary-button disabled:opacity-75"
                type="button"
                disabled
              >
                Add to cart
              </button>
            )}
            <button className="secondary-button" type="button">
              See more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export { ProductItem };
