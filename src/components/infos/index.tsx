import { AiOutlineCreditCard } from 'react-icons/ai';
import { BsArrowCounterclockwise } from 'react-icons/bs';
import { FiLifeBuoy } from 'react-icons/fi';
import { TbTruck } from 'react-icons/tb';

import CardInfos from './card-infos';

export default function Infos() {
  return (
    <div className="flex justify-around flex-wrap my-32 gap-y-5">
      <CardInfos
        icon={<TbTruck className="text-5xl" />}
        title="Free shipping"
        text="Enjoy free shipping on all orders above $100"
      />
      <CardInfos
        icon={<FiLifeBuoy className="text-5xl" />}
        title="Suport 24/7"
        text="Our support team is there to help you for queries"
      />
      <CardInfos
        icon={<BsArrowCounterclockwise className="text-5xl" />}
        title="30 days return"
        text="Simply return it within 30 days for an exchange."
      />
      <CardInfos
        icon={<AiOutlineCreditCard className="text-5xl" />}
        title="100% Payment secure"
        text="Our payments are secured with 256 bit encryption"
      />
    </div>
  );
}
