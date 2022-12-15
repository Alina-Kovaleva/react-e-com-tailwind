import { React, useState, useEffect } from 'react';
import Axios from 'axios';
import { API_URL } from '../../config';
import { HeroBanner, ProductItem } from '../../components';

function financial(x) {
  return Number.parseFloat(x).toFixed(1);
}

const HomePage = () => {
  const [data, setData] = useState('');
  useEffect(() => {
    Axios.get(API_URL).then((res) => {
      setData(res.data?.response.resultData.productList);
    });
  }, []);

  console.log(data);

  return (
    <div className="container m-auto mt-4 px-4">
      <HeroBanner />
      <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mx-auto">
        {!data
          ? 'Loading'
          : data.map((item) => {
              if (item.categorySubTypeEngName === 'Galaxy Watch') {
                return (
                  <>
                    {item.modelList.map((model) => {
                      return (
                        <ProductItem
                          key={model.id}
                          title={model.displayName}
                          image={model.galleryImage[0]}
                          localBenefitList={item.localBenefitList}
                          stock={model.ctaType}
                          price={model.price}
                          msrpPrice={model.msrpPrice}
                          rating={financial(model.ratings)}
                          storePromotions={model.storePromotions}
                          reviewCount={model.reviewCount}
                          color={model.fmyChipList[0].fmyChipLocalName}
                          usp={model.usp}
                        />
                      );
                    })}
                  </>
                );
              } else if (
                item.categorySubTypeEngName === 'Galaxy Z' ||
                item.categorySubTypeEngName === 'Galaxy S'
              ) {
                return (
                  <>
                    {item.modelList.map((model) => {
                      return (
                        <ProductItem
                          key={model.id}
                          title={model.displayName}
                          image={model.galleryImage[0]}
                          localBenefitList={item.localBenefitList}
                          stock={model.ctaType}
                          price={model.price}
                          msrpPrice={model.msrpPrice}
                          rating={financial(model.ratings)}
                          storePromotions={model.storePromotions}
                          reviewCount={model.reviewCount}
                          color={model.fmyChipList[0].fmyChipLocalName}
                          usp={model.usp}
                          mobilememory={model.fmyChipList[1].fmyChipCode}
                        />
                      );
                    })}
                  </>
                );
              }
            })}
      </div>
    </div>
  );
};

export { HomePage };
