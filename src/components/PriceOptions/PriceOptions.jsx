// import React from 'react';

import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {
    const priceOptions = [
        {
          "id": 1,
          "name": "Basic",
          "features": [
            "Access to gym facilities",
            "Standard workout equipment",
            "Locker room access",
            "Access to cardio machines"
          ],
          "price": "$30/month"
        },
        {
          "id": 2,
          "name": "Silver",
          "features": [
            "Access to gym facilities",
            "Standard workout equipment",
            "Locker room access",
            "Group fitness classes (limited)",
            "Access to sauna and steam room"
          ],
          "price": "$50/month"
        },
        {
          "id": 3,
          "name": "Gold",
          "features": [
            "Access to gym facilities",
            "Premium workout equipment",
            "Locker room access",
            "Unlimited group fitness classes",
            "Personal training session (1/month)",
            "Access to swimming pool",
            "Towel service"
          ],
          "price": "$80/month"
        },
        {
          "id": 4,
          "name": "Platinum",
          "features": [
            "Access to gym facilities",
            "Premium workout equipment",
            "Locker room access",
            "Unlimited group fitness classes",
            "Unlimited personal training sessions",
            "Access to hot tub",
            "Massage therapy (1/month)"
          ],
          "price": "$120/month"
        }
      ]
      
    return (
        <div>
            <h1>Best Price Options in the Town</h1>
            {
                priceOptions.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
            }
            
        </div>
    );
};

export default PriceOptions;