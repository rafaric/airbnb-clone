"use client";

import useCountries from "@/app/hooks/useCountries";
import { User } from "@prisma/client";
import { IconType } from "react-icons";
import Avatar from "../Avatar";
import { gu } from "date-fns/locale";
import ListingCategory from "./ListingCategory";
import dynamic from "next/dynamic";
import Map from "../Map";
import CategoryBox from "../CategoryBox";
import { BsPeople } from "react-icons/bs";
import { LiaBedSolid } from "react-icons/lia";
import CategoryInput from "../inputs/CategoryInput";
import { TbBath } from "react-icons/tb";

const map = dynamic(() => import("@/app/components/Map"), { ssr: false });

interface ListingInfoProps {
  user: User | null;
  category:
    | {
        icon: IconType;
        label: string;
        description: string;
      }
    | undefined;
  description: string;
  roomCount: number;
  guestCount: number;
  bathroomCount: number;
  locationValue: string;
}

const ListingInfo: React.FC<ListingInfoProps> = ({
  user,
  category,
  description,
  roomCount,
  guestCount,
  bathroomCount,
  locationValue,
}) => {
  const { getByValue } = useCountries();

  const coordinates = getByValue(locationValue)?.latlng;

  return (
    <div className="col-span-4 flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <div className="text-xl font-semibold flex flex-row items-center gap-2">
          <div>Anfitrión: {user?.name}</div>
          <Avatar src={user?.image} />
        </div>
        <div className="flex flex-row items-center gap-8 font-light text-neutral-500">
          <CategoryInput
            onClick={() => {}}
            label={`${guestCount} huesped/es`}
            icon={BsPeople}
            selected={false}
          />
          <CategoryInput
            onClick={() => {}}
            label={`${roomCount} habitacion/es`}
            icon={LiaBedSolid}
            selected={false}
          />
          <CategoryInput
            onClick={() => {}}
            label={`${bathroomCount} baño/s`}
            icon={TbBath}
            selected={false}
          />
        </div>
      </div>
      <hr />
      {category && (
        <ListingCategory
          icon={category.icon}
          label={category.label}
          description={category.description}
        />
      )}
      <hr />
      <div className="text-lg font-light text-neutral-500">{description}</div>
      <hr />
      <Map center={coordinates} />
    </div>
  );
};

export default ListingInfo;
