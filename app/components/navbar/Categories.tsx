"use client";
import Container from "../Container";
import { BsSnow } from "react-icons/bs";
import { IoDiamond } from "react-icons/io5";
import { TbBeach, TbMountain, TbPool } from "react-icons/tb";
import {
  GiBarn,
  GiBoatFishing,
  GiCactus,
  GiCastle,
  GiCaveEntrance,
  GiForestCamp,
  GiIsland,
  GiWindmill,
} from "react-icons/gi";
import { MdOutlineVilla } from "react-icons/md";
import { FaSkiing } from "react-icons/fa";
import CategoryBox from "../CategoryBox";
import { usePathname, useSearchParams } from "next/navigation";

export const categories = [
  {
    label: "Playa",
    icon: TbBeach,
    description: "Esta propiedad está cerca de la playa!",
  },
  {
    label: "Molinos",
    icon: GiWindmill,
    description: "Esta propiedad tiene Molinos!",
  },
  {
    label: "Moderno",
    icon: MdOutlineVilla,
    description: "Esta propiedad es moderna!",
  },
  {
    label: "Campo",
    icon: TbMountain,
    description: "Esta propiedad esta en el campo!",
  },
  {
    label: "Pools",
    icon: TbPool,
    description: "Esta propiedad tiene piscina!",
  },
  {
    label: "Islas",
    icon: GiIsland,
    description: "Esta propiedad esta en un isla!",
  },
  {
    label: "Lago",
    icon: GiBoatFishing,
    description: "Esta propiedad esta cerca de un lago!",
  },
  {
    label: "Ski",
    icon: FaSkiing,
    description: "Esta propiedad tiene actividades de Sky!",
  },
  {
    label: "Castillos",
    icon: GiCastle,
    description: "Esta propiedad es un castillo!",
  },
  {
    label: "Camping",
    icon: GiForestCamp,
    description: "Esta propiedad esta en un campamento!",
  },
  {
    label: "Arctico",
    icon: BsSnow,
    description: "Esta propiedad esta en zonas heladas!",
  },
  {
    label: "Caverna",
    icon: GiCaveEntrance,
    description: "Esta propiedad esta cerca de cavernas!",
  },
  {
    label: "Desierto",
    icon: GiCactus,
    description: "Esta propiedad esta en el desierto!",
  },
  {
    label: "Granero",
    icon: GiBarn,
    description: "Esta propiedad tiene un granero!",
  },
  {
    label: "De Lujo",
    icon: IoDiamond,
    description: "Esta propiedad es lujosa!",
  },
];

const Categories = () => {
  const params = useSearchParams();
  const categoria = params?.get("category");
  const pathname = usePathname();

  const isMainPage = pathname === "/";

  if (!isMainPage) {
    return null;
  }

  return (
    <Container>
      <div className="pt-4 flex flex-row items-center justify-between overflow-x-auto">
        {categories.map((category) => (
          <CategoryBox
            key={category.label}
            label={category.label}
            icon={category.icon}
            selected={category.label === categoria}
          />
        ))}
      </div>
    </Container>
  );
};

export default Categories;
